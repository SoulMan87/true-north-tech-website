const DEFAULT_OPTIONS = {
  days: 365,
  path: "/",
  sameSite: "Lax",
};

const buildCookieOptions = (options = {}) => {
  const merged = { ...DEFAULT_OPTIONS, ...options };
  const parts = [];

  if (typeof merged.days === "number") {
    parts.push(`Max-Age=${Math.floor(merged.days * 24 * 60 * 60)}`);
  }

  if (merged.path) {
    parts.push(`Path=${merged.path}`);
  }

  if (merged.sameSite) {
    parts.push(`SameSite=${merged.sameSite}`);
  }

  if (merged.secure || (typeof window !== "undefined" && window.location.protocol === "https:")) {
    parts.push("Secure");
  }

  return parts.length ? `; ${parts.join("; ")}` : "";
};

export const setCookie = (name, value, options) => {
  if (typeof document === "undefined") return;
  const encodedName = encodeURIComponent(name);
  const encodedValue = encodeURIComponent(value ?? "");
  document.cookie = `${encodedName}=${encodedValue}${buildCookieOptions(options)}`;
};

export const getCookie = (name) => {
  if (typeof document === "undefined") return null;
  const encodedName = encodeURIComponent(name);
  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (const cookie of cookies) {
    const [rawName, ...rest] = cookie.split("=");
    if (rawName === encodedName) {
      return decodeURIComponent(rest.join("="));
    }
  }
  return null;
};

export const removeCookie = (name, options) => {
  setCookie(name, "", { ...options, days: -1 });
};
