import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Check, ArrowLeft, Shield, Zap, Layout, Globe, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/context/LanguageContext';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();

  const product = t.products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-light pt-32 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">{t.productDetail.productNotFound}</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            {t.productDetail.backToSolutions}
          </button>
        </div>
      </div>
    );
  }

  const handleRequestDemo = () => {
    toast({
      title: t.productDetail.demoRequested,
      description: t.productDetail.demoRequestedDesc,
    });
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - True North Tech</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="min-h-screen bg-light pt-28 pb-16">
        {/* Product Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <button 
            onClick={() => navigate('/products')}
            className="flex items-center text-gray-500 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" /> {t.productDetail.backToSolutions}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {product.name}
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">
                  <Tag size={12} className="mr-1" />
                  {t.common.customPricing}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">{product.tagline}</h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              <p className="text-sm text-gray-500 mb-8 italic border-l-4 border-primary/30 pl-4 py-1">
                {t.common.customPricingDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => navigate(`/contact?product=${encodeURIComponent(product.name)}`)}
                  className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-1"
                >
                  {t.common.requestQuote}
                </button>
                <button
                  onClick={handleRequestDemo}
                  className="bg-white border-2 border-gray-200 text-dark px-8 py-4 rounded-xl text-lg font-bold hover:border-primary hover:text-primary transition-all duration-300"
                >
                  {t.common.requestDemo}
                </button>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                <span className="font-bold text-dark">{product.rating}/5.0</span>
                <span>{t.productDetail.customerRating}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>

        {/* Detailed Info */}
        <section className="bg-white py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               <div className="lg:col-span-2">
                 <h2 className="text-3xl font-bold text-dark mb-6">{t.productDetail.overview}</h2>
                 {product.fullDescription.split('\n\n').map((para, i) => (
                   <p key={i} className="text-lg text-gray-600 mb-6 leading-relaxed">
                     {para}
                   </p>
                 ))}
               </div>
               
               <div className="bg-light p-8 rounded-2xl border border-gray-200">
                 <h3 className="text-xl font-bold text-dark mb-6">{t.productDetail.keyBenefits}</h3>
                 <ul className="space-y-4">
                   <li className="flex items-start">
                     <Shield className="text-primary mt-1 mr-3 shrink-0" size={20} />
                     <span className="text-gray-700">{t.productDetail.benefits.security}</span>
                   </li>
                   <li className="flex items-start">
                     <Zap className="text-primary mt-1 mr-3 shrink-0" size={20} />
                     <span className="text-gray-700">{t.productDetail.benefits.uptime}</span>
                   </li>
                   <li className="flex items-start">
                     <Layout className="text-primary mt-1 mr-3 shrink-0" size={20} />
                     <span className="text-gray-700">{t.productDetail.benefits.interface}</span>
                   </li>
                   <li className="flex items-start">
                     <Globe className="text-primary mt-1 mr-3 shrink-0" size={20} />
                     <span className="text-gray-700">{t.productDetail.benefits.support}</span>
                   </li>
                 </ul>
               </div>
             </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title={t.productDetail.powerfulFeatures} subtitle={t.productDetail.featuresSubtitle} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <Check className="text-accent mb-4" size={24} />
                  <h4 className="font-semibold text-dark">{feature}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-dark py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t.productDetail.trustedBy}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xl text-gray-300 italic mb-6">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ProductDetailPage;