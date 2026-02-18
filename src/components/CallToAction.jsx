import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

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
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the forward-thinking companies that trust True North Tech for their software solutions. Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/25 hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center"
            >
              Get Started Now <ArrowRight size={20} className="ml-2" />
            </button>
            <button
              onClick={() => navigate('/products')}
              className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300"
            >
              Explore Products
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;