import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import CompassLogo from './CompassLogo';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isActivePath = (path) => {
    if (path === "/products") {
      return location.pathname === "/products" || location.pathname === "/products/";
    }
    return location.pathname === path;
  };
  const isCurrentPath = (path) =>
    location.pathname === path || location.pathname === `${path}/`;

  const quickLinks = [
    { name: t.navigation.home, path: '/' },
    { name: t.navigation.products, path: '/products' },
    { name: t.navigation.about, path: '/about' },
    { name: t.navigation.contact, path: '/contact' }
  ];

  const products = [
    { name: t.products[0].name, path: '/products/hotel-booking' },
    { name: t.products[1].name, path: '/products/drivers-saas' },
    { name: t.products[2].name, path: '/products/kds-system' },
    { name: t.products[3].name, path: '/products/real-estate-crm' }
  ];

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/company/true-north-tech-col/', label: 'LinkedIn' },
    { icon: Facebook, url: 'https://www.facebook.com/share/1CbQLYPqQE/', label: 'Facebook' },
    { icon: Twitter, url: 'https://x.com/TrueNorthTech25', label: 'X' },
    { icon: Instagram, url: 'https://www.instagram.com/true_north_tech?igsh=MTNyeDVlNG4zdWM5Ng==', label: 'Instagram' }
  ];

  return (
    <footer className="bg-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <CompassLogo className="w-12 h-12" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon size={18} className="text-gray-400 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.footer.solutions}</h3>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.path}>
                  {isCurrentPath(link.path) ? (
                    <span
                      className="text-gray-500 text-sm flex items-center cursor-not-allowed opacity-60"
                      aria-disabled="true"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-40" />
                      {link.name}
                    </span>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.footer.company}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  {isActivePath(link.path) ? (
                    <span
                      className="text-gray-500 text-sm flex items-center cursor-not-allowed opacity-60"
                      aria-disabled="true"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-40" />
                      {link.name}
                    </span>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t.footer.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                <div className="mt-1.5">
                  <p className="font-medium text-white">{t.footer.email}</p>
                  <a href="mailto:informacion@truenorthtech.site" className="hover:text-accent transition-colors">informacion@truenorthtech.site</a>
                </div>
              </li>
              <li className="flex items-start text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                <div className="mt-1.5">
                  <p className="font-medium text-white">{t.footer.phone}</p>
                  <a href="tel:+573117105157" className="hover:text-accent transition-colors">+57 (311) 710-5157</a>
                </div>
              </li>
              <li className="flex items-start text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div className="mt-1.5">
                  <p className="font-medium text-white">{t.footer.headquarters}</p>
                  <span>Cr 81 No 97 A 31, Medellín - Colombia · 05001001</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} True North Tech. {t.common.allRightsReserved}
          </p>
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              {t.common.privacyPolicy}
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
              {t.common.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
