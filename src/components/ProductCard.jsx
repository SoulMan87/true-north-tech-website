import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {t.common.customPricing}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
          {product.category || 'Enterprise'}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">{product.description}</p>
        
        <p className="text-xs text-gray-500 mb-4 italic flex items-center">
          <ShieldCheck size={14} className="mr-1 text-primary" />
          {t.common.customPricingDesc}
        </p>

        <div className="space-y-4">
          <div className="flex items-center text-sm text-gray-500">
             <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-2" />
             <span className="font-medium text-dark">Top Rated Solution</span>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}`)}
              className="bg-primary/10 hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300"
            >
              {t.common.requestQuote}
            </button>
            <button 
              onClick={() => navigate(`/products/${product.slug || product.id}`)}
              className="text-primary font-semibold text-sm flex items-center hover:text-secondary transition-colors"
            >
              {t.common.viewDetails} <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;