import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Discover Excellence</span>
      <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
      {centered && <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mt-6 mx-auto rounded-full opacity-80"></div>}
    </motion.div>
  );
};

export default SectionTitle;