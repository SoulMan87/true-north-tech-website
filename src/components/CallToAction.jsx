import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CallToAction = ({ disableExplore = false }) => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  // Función para renderizar el HTML con el gradient
  const renderTitle = () => {
    if (language === 'es') {
      return (
        <>
          Listo para <span className="text-gradient">Transformar</span> tu Negocio?
        </>
      );
    }
    return (
      <>
        Ready to <span className="text-gradient">Transform</span> Your Business?
      </>
    );
  };

  return (
    <section className="py-20 relative overflow-hidden bg-dark">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {renderTitle()}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t.home.joinCompanies}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/25 hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center"
            >
              {t.common.getStarted} <ArrowRight size={20} className="ml-2" />
            </button>
            <button
              onClick={() => {
                if (!disableExplore) navigate('/products');
              }}
              disabled={disableExplore}
              className={`bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 ${
                disableExplore
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-white/10'
              }`}
            >
              {t.home.exploreProducts}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;