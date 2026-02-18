import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import CallToAction from "@/components/CallToAction";

import { useLanguage } from "@/context/LanguageContext";
import { fetchProducts } from "@/api/productsApi";

const ProductsPage = () => {
  const { t, language } = useLanguage();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Load products from backend
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const data = await fetchProducts(language);
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [language]);

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>

        <CallToAction />
      </div>
    </>
  );
};

export default ProductsPage;