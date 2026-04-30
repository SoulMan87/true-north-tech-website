import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { getCookie, setCookie } from "../utils/cookies";

const COOKIE_CONSENT = "cookie_consent";
const COOKIE_ALL = "all";
const COOKIE_NECESSARY = "necessary";
const COOKIE_NONE = "none";

const CookieConsent = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    const loadScriptsBasedOnConsent = (consentType) => {
        if (consentType === COOKIE_ALL) {
            loadGoogleAnalytics();
            loadOtherThirdPartyScripts();
        } else if (consentType === COOKIE_NECESSARY) {
            // Solo cookies necesarias activadas
        } else if (consentType === COOKIE_NONE) {
            // Cookies rechazadas
        }
    };

    const loadGoogleAnalytics = () => {
        if (window.gtag && window.gaLoaded) return;

        try {
            const script = document.createElement('script');
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9Q6H0QETRF';
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            window.gtag = function() {
                window.dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config', 'G-9Q6H0QETRF');
            window.gaLoaded = true;
        } catch (error) {
            console.error("Error loading Google Analytics:", error);
        }
    };

    const loadOtherThirdPartyScripts = () => {
        if (window.thirdPartyLoaded) return;
        window.thirdPartyLoaded = true;
    };

    const removeThirdPartyCookies = () => {
        document.cookie.split(";").forEach(cookie => {
            const [name] = cookie.split("=");
            const trimmedName = name.trim();
            if (trimmedName.startsWith('_ga') ||
                trimmedName.startsWith('_gid') ||
                trimmedName.includes('doubleclick')) {
                document.cookie = `${trimmedName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                document.cookie = `${trimmedName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
            }
        });
    };

    useEffect(() => {
        const existingConsent = getCookie(COOKIE_CONSENT);

        if (existingConsent) {
            loadScriptsBasedOnConsent(existingConsent);
            return;
        }

        const timer = window.setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => window.clearTimeout(timer);
    }, []);

    const handleChoice = (value) => {
        setCookie(COOKIE_CONSENT, value, { days: 365, sameSite: "Lax", secure: true });

        if (value === COOKIE_ALL) {
            loadScriptsBasedOnConsent(value);
        } else if (value === COOKIE_NONE || value === COOKIE_NECESSARY) {
            removeThirdPartyCookies();
        }

        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-[60] flex justify-center sm:bottom-6">
            <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-dark/95 p-6 shadow-2xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-base font-semibold text-white">Cookie Settings</p>
                        <p className="mt-1 text-sm text-gray-300">
                            We use cookies to enhance your experience on our website.
                        </p>
                        <Link
                            to="/privacy-policy"
                            className="mt-2 inline-flex text-sm font-semibold text-primary/85 transition-colors hover:text-primary"
                        >
                            Learn More
                        </Link>
                    </div>
                    <div className="mt-2 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center sm:justify-end">
                        <button
                            type="button"
                            onClick={() => handleChoice(COOKIE_NONE)}
                            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                        >
                            Reject All
                        </button>
                        <button
                            type="button"
                            onClick={() => handleChoice(COOKIE_NECESSARY)}
                            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                        >
                            Necessary Only
                        </button>
                        <button
                            type="button"
                            onClick={() => handleChoice(COOKIE_ALL)}
                            className="inline-flex items-center justify-center rounded-xl bg-primary/85 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;