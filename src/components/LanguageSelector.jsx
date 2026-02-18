import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
        aria-label="Select Language"
      >
        <Globe size={18} />
        <span className="uppercase font-semibold">{language}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-32 bg-dark border border-white/10 rounded-xl shadow-xl overflow-hidden z-50"
          >
            <div className="py-1">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  language === 'en' ? 'bg-primary/20 text-accent' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                English (EN)
              </button>
              <button
                onClick={() => handleLanguageChange('es')}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  language === 'es' ? 'bg-primary/20 text-accent' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                Español (ES)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;