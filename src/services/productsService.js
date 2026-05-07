import { translations } from "@/context/LanguageContext";

const normalizeProduct = (product) => ({
  ...product,
  slug: product.slug || product.id,
});

export async function fetchProducts(lang = "en") {
  const products = translations[lang]?.products || [];
  return Promise.resolve(products.map(normalizeProduct));
}

export async function fetchProductDetail(slug, lang = "en") {
  const product =
    translations[lang]?.products.find(
      (item) => item.slug === slug || item.id === slug
    ) || null;

  if (!product) {
    throw new Error(`Failed to fetch product detail: ${slug}`);
  }

  return Promise.resolve(normalizeProduct(product));
}
