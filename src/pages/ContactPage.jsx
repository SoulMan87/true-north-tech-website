import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/context/LanguageContext';

const API_URL = import.meta.env.VITE_API_URL;

const ContactPage = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: t.contact.form.options.general,
    productName: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam) {
      setFormData(prev => ({
        ...prev,
        inquiryType: t.contact.form.options.quoteRequest,
        productName: productParam
      }));
    }
  }, [searchParams, t.contact.form.options.quoteRequest]);

  // Update dropdown default when language changes if user hasn't interacted
  useEffect(() => {
    const productParam = searchParams.get('product');
    if (!productParam && formData.inquiryType === 'General Inquiry' && t.contact.form.options.general !== 'General Inquiry') {
        setFormData(prev => ({ ...prev, inquiryType: t.contact.form.options.general }));
    } else if (productParam && formData.inquiryType === 'Quote Request' && t.contact.form.options.quoteRequest !== 'Quote Request') {
        setFormData(prev => ({ ...prev, inquiryType: t.contact.form.options.quoteRequest }));
    }
  }, [t.contact.form.options.general, t.contact.form.options.quoteRequest]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.contact.form.errors.nameRequired;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.errors.emailInvalid;
    }
    
    // Validate product name if inquiry type is quote request
    if (formData.inquiryType === t.contact.form.options.quoteRequest && !formData.productName.trim()) {
      newErrors.productName = t.contact.form.errors.productNameRequired || "Product Name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.errors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contact.form.errors.messageShort;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    toast({
      title: t.contact.form.validationTitle,
      description: t.contact.form.validationDesc,
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        inquiryType: formData.inquiryType,
        productName: formData.productName,
        message: formData.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    toast({
      title: t.contact.form.successTitle,
      description: t.contact.form.successDesc,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: t.contact.form.options.general,
      productName: "",
      message: "",
    });

  } catch (error) {
    console.error("Error:", error);

    toast({
      title: t.contact.form.errorTitle,
      description: t.contact.form.errorDesc,
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.emailUs,
      content: 'informacion@truenorthtech.site',
      sub: t.contact.form.options.general
    },
    {
      icon: Phone,
      title: t.contact.callUs,
      content: '+57 (311) 710-5157',
      sub: 'Mon-Fri, 9am - 6pm EST'
    },
    {
      icon: MapPin,
      title: t.contact.visitUs,
      content: 'Cr 81 No 97 A 31',
      sub: 'Medellín - Colombia · 05001001'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t.contact.title}</title>
        <meta name="description" content={t.contact.pageSubtitle} />
      </Helmet>

      <div className="min-h-screen bg-light pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.contact.pageTitle} 
            subtitle={t.contact.pageSubtitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-1">{info.title}</h3>
                  <p className="text-lg font-medium text-primary mb-1">{info.content}</p>
                  <p className="text-sm text-gray-500">{info.sub}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold text-dark mb-6">{t.contact.sendMessage}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.name} *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.email} *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.company}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.inquiryType}</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-700"
                  >
                    <option value={t.contact.form.options.general}>{t.contact.form.options.general}</option>
                    <option value={t.contact.form.options.quoteRequest}>{t.contact.form.options.quoteRequest}</option>
                    <option value={t.contact.form.options.support}>{t.contact.form.options.support}</option>
                  </select>
                </div>

                {formData.inquiryType === t.contact.form.options.quoteRequest && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.productName} *</label>
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border ${errors.productName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                      placeholder={t.contact.form.productName}
                    />
                    {errors.productName && <p className="mt-1 text-xs text-red-500">{errors.productName}</p>}
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.message} *</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none`}
                    placeholder="..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-primary/25 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.form.sendBtn} <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Side Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-dark text-white rounded-2xl p-10 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full filter blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary rounded-full filter blur-3xl opacity-20 -ml-10 -mb-10"></div>
                
                <h3 className="text-2xl font-bold mb-6 relative z-10">{t.contact.whyUs}</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex">
                    <div className="mr-4 mt-1 bg-white/10 p-2 rounded-lg">
                      <Clock size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{t.contact.rapidResponse}</h4>
                      <p className="text-gray-400 text-sm">{t.contact.rapidResponseDesc}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 mt-1 bg-white/10 p-2 rounded-lg">
                      <MessageSquare size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{t.contact.consultative}</h4>
                      <p className="text-gray-400 text-sm">{t.contact.consultativeDesc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-1 shadow-lg">
                 <div className="bg-white h-full w-full rounded-xl p-8">
                   <h4 className="font-bold text-dark mb-2">{t.contact.officeHours}</h4>
                   <ul className="space-y-2 text-gray-600 text-sm">
                     <li className="flex justify-between">
                       <span>{t.contact.days.monFri}</span>
                       <span className="font-medium">9:00 AM - 6:00 PM</span>
                     </li>
                     <li className="flex justify-between">
                       <span>{t.contact.days.sat}</span>
                       <span className="font-medium">10:00 AM - 2:00 PM</span>
                     </li>
                     <li className="flex justify-between">
                       <span>{t.contact.days.sun}</span>
                       <span className="font-medium text-red-500">{t.contact.days.closed}</span>
                     </li>
                   </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;