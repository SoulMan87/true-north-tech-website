import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import CallToAction from '@/components/CallToAction';
import { useLanguage } from '@/context/LanguageContext';
import { MultipleSchemas } from '@/components/StructuredData';
import {
  getPageSEOConfig,
  getOrganizationSchema,
  getWebsiteSchema,
  getLocalBusinessSchema,
  getServiceSchema,
} from '@/utils/seoMetadata';
import backGround from '@/assets/back-ground.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const seoConfig = getPageSEOConfig('home');

  const features = [
    {
      icon: Zap,
      title: t.home.features.innovation.title,
      description: t.home.features.innovation.desc
    },
    {
      icon: ShieldCheck,
      title: t.home.features.reliability.title,
      description: t.home.features.reliability.desc
    },
    {
      icon: Cpu,
      title: t.home.features.scalable.title,
      description: t.home.features.scalable.desc
    },
    {
      icon: Globe,
      title: t.home.features.support.title,
      description: t.home.features.support.desc
    }
  ];

  const schemas = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getLocalBusinessSchema(),
    getServiceSchema(),
  ];

  return (
    <MultipleSchemas schemas={schemas}>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <link rel="canonical" href={seoConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:image" content={seoConfig.image} />
        <meta property="og:image:alt" content="True North Tech - Enterprise Software Development" />
        <meta property="og:site_name" content="True North Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoConfig.url} />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content={seoConfig.image} />
        <meta name="twitter:creator" content="@truenorthtech" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={backGround}
              alt="Technology and Innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-primary/30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 flex items-center space-x-2"
              >
                <span className="h-1 w-12 bg-accent rounded-full"></span>
                <span className="text-accent font-bold tracking-widest uppercase text-sm">{t.home.welcome}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
              >
                {t.home.heroTitle} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">{t.home.heroSubtitle}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
              >
                {t.home.heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <button
                  onClick={() => navigate('/products')}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary/25 hover:translate-y-[-2px]"
                >
                  {t.home.exploreSolutions}
                  <ArrowRight size={20} className="ml-2" />
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:translate-y-[-2px]"
                >
                  {t.home.getInTouch}
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">{t.home.whyChooseTitle}</span>
              <h2 className="text-4xl font-bold text-dark mb-4">{t.home.engineeringExcellence}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.home.engineeringDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <CallToAction />
      </div>
    </MultipleSchemas>
  );
};

export default HomePage;