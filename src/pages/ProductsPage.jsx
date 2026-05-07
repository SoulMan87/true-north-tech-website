import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";

import { useLanguage } from "@/context/LanguageContext";
import { fetchProducts } from "@/services/productsService";
import { resolveProductImage } from "@/utils/productImages";
import { MultipleSchemas } from "@/components/StructuredData";
import {
  getPageSEOConfig,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/utils/seoMetadata";

const ProductsPage = () => {
  const { t, language } = useLanguage();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const seoConfig = getPageSEOConfig('products');

  const schemas = [
    getOrganizationSchema(),
    getWebsiteSchema(),
  ];

  // ✅ Load products from backend
  useEffect(() => {
    let active = true;

    async function loadProducts() {
      try {
        setLoading(true);

        const data = await fetchProducts(language);
        if (!active) return;

        setProducts(
          data.map((product) => ({
            ...product,
            image: product.image || resolveProductImage(product.imageUrl),
            slug: product.slug || product.id,
          }))
        );
      } catch (error) {
        if (active) {
          console.error("Error loading products:", error);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProducts();
    return () => {
      active = false;
    };
  }, [language]);

  return (
    <MultipleSchemas schemas={schemas}>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content="software solutions, restaurant KDS, hotel booking, fleet management, funeral management, real estate software, custom software development, enterprise software" />
        <link rel="canonical" href={seoConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:image" content={seoConfig.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoConfig.url} />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content={seoConfig.image} />
      </Helmet>

      <div className="min-h-screen bg-light pt-28 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t.productsPage.sectionTitle}
            subtitle={
              <>
                {t.productsPage.sectionSubtitle}
                <br />
                <span className="block mt-2 text-primary font-medium">
                  {t.productsPage.customPricingIntro}
                </span>
              </>
            }
          />

          {/* ✅ Loading state */}
          {loading && (
            <p className="text-center text-gray-500 mt-10">
              Loading products...
            </p>
          )}

          {/* ✅ Products grid */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {products.map((product) => (
                <ProductCard
                  key={product.slug || product.id}
                  product={{
                    ...product,
                    image: product.image || resolveProductImage(product.imageUrl),
                    slug: product.slug || product.id,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <CallToAction disableExplore={!loading} />
      </div>
    </MultipleSchemas>
  );
};

export default ProductsPage;
