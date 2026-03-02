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

  useEffect(() => {
    const consent = getCookie(COOKIE_CONSENT);
    if (consent) return;

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleChoice = (value) => {
    setCookie(COOKIE_CONSENT, value, { days: 365, sameSite: "Lax" });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] flex justify-center sm:bottom-6">
      <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-dark/95 p-6 shadow-2xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-white">{t.cookies.title}</p>
            <p className="mt-1 text-sm text-gray-300">{t.cookies.message}</p>
            <Link
              to="/privacy-policy"
              className="mt-2 inline-flex text-sm font-semibold text-accent hover:text-accent/80"
            >
              {t.cookies.learnMore}
            </Link>
          </div>
          <div className="mt-2 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={() => handleChoice(COOKIE_NONE)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              {t.cookies.acceptNone}
            </button>
            <button
              type="button"
              onClick={() => handleChoice(COOKIE_NECESSARY)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              {t.cookies.acceptNecessary}
            </button>
            <button
              type="button"
              onClick={() => handleChoice(COOKIE_ALL)}
              className="inline-flex items-center justify-center rounded-xl bg-primary/85 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary"
            >
              {t.cookies.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
