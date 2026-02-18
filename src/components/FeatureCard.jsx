import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 border border-gray-100 hover:border-primary/20 transition-all duration-300 group"
    >
      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300 text-white">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;