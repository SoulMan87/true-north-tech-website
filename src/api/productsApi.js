// src/api/productsApi.js

const BASE_URL = "https://contact-lastest.onrender.com/api/products";

/**
 * GET /api/products?lang=en
 */
export async function fetchProducts(lang = "en") {
  const response = await fetch(`${BASE_URL}?lang=${lang}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

/**
 * GET /api/products/{slug}?lang=en
 */
export async function fetchProductDetail(slug, lang = "en") {
  const response = await fetch(`${BASE_URL}/${slug}?lang=${lang}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product detail: ${slug}`);
  }

  return response.json();
}
