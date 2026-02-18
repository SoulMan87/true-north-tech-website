import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code2, Globe2, Lightbulb, Users2, Rocket } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import { useLanguage } from '@/context/LanguageContext';
import techTean from '@/assets/tech-team.jpg';

const AboutPage = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.yearsExcellence, value: '5+' },
    { label: t.about.globalClients, value: '10+' },
    { label: t.about.projectsDelivered, value: '25+' },
    { label: t.about.teamMembers, value: '50+' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.desc
    },
    {
      icon: Users2,
      title: t.about.values.collaboration.title,
      description: t.about.values.collaboration.desc
    },
    {
      icon: Rocket,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.desc
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t.about.title}</title>
        <meta name="description" content={t.about.heroDesc} />
      </Helmet>

      <div className="min-h-screen bg-light">
        {/* About Hero */}
        <section className="relative py-32 bg-dark overflow-hidden">
          <div className="absolute inset-0">
             <div className="absolute inset-0 bg-gradient-to-r from-dark to-primary/20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {t.about.heroTitle.split(' ')[0]} <span className="text-gradient">{t.about.heroTitle.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t.about.heroDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gray-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {stats.map((stat, i) => (
                 <div key={i}>
                   <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                   <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Company Profile */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle 
                  title={t.about.whoWeAre} 
                  subtitle={t.about.whoWeAreSubtitle}
                  centered={false} 
                />
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>{t.about.whoWeAreP1}</p>
                  <p>{t.about.whoWeAreP2}</p>
                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-dark mb-4">{t.about.techStack}</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Angular', 'Scala', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'TensorFlow', 'Kubernetes', 'Java', 'Spring', 'Kotlin'].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-xl"></div>
                <img 
                  src={techTean} 
                  alt="Modern Software Office" 
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title={t.about.coreValues} 
              subtitle={t.about.coreValuesSubtitle}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, i) => (
                <FeatureCard key={i} {...val} delay={i * 0.2} />
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-24 bg-dark text-white text-center">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <Globe2 className="text-primary" size={32} />
             </div>
             <h2 className="text-3xl font-bold mb-6">{t.about.globalImpact}</h2>
             <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
               {t.about.globalImpactDesc}
             </p>
             <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all">
               {t.about.joinNetwork}
             </button>
           </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;