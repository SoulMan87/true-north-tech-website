/**
 * Cookie Utilities - Manejo completo de cookies
 * Compatible con React y navegadores modernos
 */

const DEFAULT_OPTIONS = {
    days: 365,
    path: "/",
    sameSite: "Lax",
    secure: true, // Siempre true en producción con HTTPS
};

/**
 * Construye las opciones de la cookie como string
 */
const buildCookieOptions = (options = {}) => {
    const merged = { ...DEFAULT_OPTIONS, ...options };
    const parts = [];

    // Max-Age (en segundos)
    if (typeof merged.days === "number" && !isNaN(merged.days)) {
        const maxAge = Math.floor(merged.days * 24 * 60 * 60);
        if (maxAge > 0) {
            parts.push(`Max-Age=${maxAge}`);
        } else if (maxAge <= 0) {
            parts.push(`Max-Age=0`);
        }
    }

    // Path
    if (merged.path) {
        parts.push(`Path=${merged.path}`);
    }

    // SameSite
    if (merged.sameSite && ["Strict", "Lax", "None"].includes(merged.sameSite)) {
        parts.push(`SameSite=${merged.sameSite}`);
    }

    // Secure (solo en HTTPS o si se especifica)
    const isSecure = merged.secure ||
        (typeof window !== "undefined" && window.location.protocol === "https:");

    if (isSecure) {
        parts.push("Secure");
    }

    return parts.length ? `; ${parts.join("; ")}` : "";
};

/**
 * Establece una cookie
 * @param {string} name - Nombre de la cookie
 * @param {string|object} value - Valor de la cookie (puede ser objeto)
 * @param {object} options - Opciones adicionales
 */
export const setCookie = (name, value, options = {}) => {
    if (typeof document === "undefined") return false;

    try {
        // Convertir objeto a JSON si es necesario
        const finalValue = typeof value === "object" ? JSON.stringify(value) : value;
        const encodedName = encodeURIComponent(name);
        const encodedValue = encodeURIComponent(finalValue ?? "");

        document.cookie = `${encodedName}=${encodedValue}${buildCookieOptions(options)}`;
        return true;
    } catch (error) {
        console.error(`Error setting cookie "${name}":`, error);
        return false;
    }
};

/**
 * Obtiene el valor de una cookie
 * @param {string} name - Nombre de la cookie
 * @param {boolean} asJson - Si debe parsearse como JSON
 * @returns {string|object|null}
 */
export const getCookie = (name, asJson = false) => {
    if (typeof document === "undefined") return null;

    try {
        const encodedName = encodeURIComponent(name);
        const cookies = document.cookie ? document.cookie.split("; ") : [];

        for (const cookie of cookies) {
            const [rawName, ...rest] = cookie.split("=");
            if (rawName === encodedName) {
                const value = decodeURIComponent(rest.join("="));
                if (asJson && value) {
                    try {
                        return JSON.parse(value);
                    } catch {
                        return value;
                    }
                }
                return value;
            }
        }
    } catch (error) {
        console.error(`Error getting cookie "${name}":`, error);
    }

    return null;
};

/**
 * Elimina una cookie
 * @param {string} name - Nombre de la cookie
 * @param {object} options - Opciones (path y domain importantes)
 */
export const removeCookie = (name, options = {}) => {
    return setCookie(name, "", {
        ...options,
        days: -1,
        maxAge: 0
    });
};

/**
 * Verifica si una cookie existe
 * @param {string} name - Nombre de la cookie
 * @returns {boolean}
 */
export const hasCookie = (name) => {
    return getCookie(name) !== null;
};

/**
 * Obtiene todas las cookies como objeto
 * @returns {object}
 */
export const getAllCookies = () => {
    if (typeof document === "undefined") return {};

    const cookies = {};
    const cookieString = document.cookie;

    if (!cookieString) return cookies;

    cookieString.split("; ").forEach(cookie => {
        const [name, ...rest] = cookie.split("=");
        if (name) {
            cookies[decodeURIComponent(name)] = decodeURIComponent(rest.join("="));
        }
    });

    return cookies;
};

/**
 * Limpia todas las cookies (opcional: mantener algunas)
 * @param {array} exclude - Array de nombres de cookies a mantener
 * @param {object} options - Opciones para la eliminación
 */
export const clearAllCookies = (exclude = [], options = {}) => {
    const allCookies = getAllCookies();

    Object.keys(allCookies).forEach(name => {
        if (!exclude.includes(name)) {
            removeCookie(name, options);
        }
    });
};

/**
 * Cookie consent management
 */
const CONSENT_COOKIE_NAME = "cookie-consent";
const CONSENT_EXPIRY_DAYS = 365;

/**
 * Establece el consentimiento de cookies
 * @param {string} status - "accepted", "declined" o "customized"
 * @param {object} preferences - Preferencias específicas (para customized)
 */
export const setCookieConsent = (status, preferences = {}) => {
    const consentData = {
        status,
        timestamp: new Date().toISOString(),
        preferences: {
            necessary: true, // Siempre true
            analytics: status === "accepted" || preferences.analytics || false,
            marketing: status === "accepted" || preferences.marketing || false,
            functional: status === "accepted" || preferences.functional || false,
            ...preferences
        }
    };

    setCookie(CONSENT_COOKIE_NAME, consentData, {
        days: CONSENT_EXPIRY_DAYS,
        path: "/",
        sameSite: "Lax"
    });

    return consentData;
};

/**
 * Obtiene el estado del consentimiento de cookies
 * @returns {object|null}
 */
export const getCookieConsent = () => {
    return getCookie(CONSENT_COOKIE_NAME, true);
};

/**
 * Verifica si un tipo específico de cookie está permitido
 * @param {string} type - "analytics", "marketing", "functional"
 * @returns {boolean}
 */
export const isCookieTypeAllowed = (type) => {
    const consent = getCookieConsent();

    if (!consent) return false;
    if (consent.status === "accepted") return true;
    if (consent.status === "declined") return false;
    if (consent.status === "customized") {
        return consent.preferences?.[type] || false;
    }

    return false;
};

/**
 * Carga scripts de terceros basados en consentimiento
 * @param {string} type - Tipo de script
 * @param {string} src - URL del script
 * @param {object} attributes - Atributos adicionales
 */
export const loadThirdPartyScript = (type, src, attributes = {}) => {
    if (!isCookieTypeAllowed(type)) {
        console.log(`Script de ${type} no cargado por consentimiento`);
        return null;
    }

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        Object.keys(attributes).forEach(key => {
            script.setAttribute(key, attributes[key]);
        });

        script.onload = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
    });
};

/**
 * Google Analytics específico
 */
export const initGoogleAnalytics = (measurementId = "G-9Q6H0QETRF") => {
    if (!isCookieTypeAllowed("analytics")) {
        console.log("Google Analytics no cargado por consentimiento");
        return false;
    }

    try {
        // Cargar gtag.js
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        script.async = true;
        document.head.appendChild(script);

        // Inicializar gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', measurementId);

        return true;
    } catch (error) {
        console.error("Error inicializando Google Analytics:", error);
        return false;
    }
};

// Exportar funciones principales como objeto
const cookies = {
    set: setCookie,
    get: getCookie,
    remove: removeCookie,
    has: hasCookie,
    getAll: getAllCookies,
    clearAll: clearAllCookies,
    consent: {
        set: setCookieConsent,
        get: getCookieConsent,
        isAllowed: isCookieTypeAllowed,
        loadScript: loadThirdPartyScript,
        initGA: initGoogleAnalytics
    }
};

export default cookies;