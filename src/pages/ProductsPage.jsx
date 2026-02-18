import React from 'react';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import { useLanguage } from '@/context/LanguageContext';

const ProductsPage = () => {
  const { t } = useLanguage();
  const products = t.products;

  return (
    <>
      <Helmet>
        <title>{t.productsPage.title}</title>
        <meta name="description" content={t.productsPage.sectionSubtitle} />
      </Helmet>

      <div className="min-h-screen bg-light pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.productsPage.sectionTitle}
            subtitle={
              <>
                {t.productsPage.sectionSubtitle}
                <br />
                <span className="block mt-2 text-primary font-medium">{t.productsPage.customPricingIntro}</span>
              </>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        <CallToAction />
      </div>
    </>
  );
};

export default ProductsPage;