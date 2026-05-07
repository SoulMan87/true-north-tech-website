/**
 * SEO Metadata Configuration for True North Tech
 * Comprehensive meta tags, structured data, and SEO optimization
 */

const SITE_URL = 'https://www.truenorthtech.site';
const SITE_NAME = 'True North Tech';
const TWITTER_HANDLE = '@truenorthtech';

export const defaultSEOConfig = {
  title: 'True North Tech - Enterprise Software Development Company | Custom SaaS Solutions',
  description: 'True North Tech: Premier software development company specializing in custom SaaS, KDS, hotel booking, fleet management, and enterprise solutions. Nearshore software development from Colombia.',
  keywords: 'software development company, custom software development, SaaS development, kitchen display system, KDS restaurant, hotel booking system, fleet management software, funeral management system, software company Medellin, nearshore software company Colombia, enterprise software solutions, B2B software, scalable software systems',
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
};

/**
 * Generate OpenGraph meta tags
 */
export const generateOGTags = ({
  title = defaultSEOConfig.title,
  description = defaultSEOConfig.description,
  image = defaultSEOConfig.image,
  url = defaultSEOConfig.url,
  type = 'website',
  locale = 'en_US',
  author = SITE_NAME,
}) => ({
  'og:type': type,
  'og:url': url,
  'og:title': title,
  'og:description': description,
  'og:image': image,
  'og:image:alt': title,
  'og:image:type': 'image/jpeg',
  'og:image:width': '1200',
  'og:image:height': '630',
  'og:locale': locale,
  'og:site_name': SITE_NAME,
  'article:author': author,
  'article:publisher': author,
});

/**
 * Generate Twitter Card meta tags
 */
export const generateTwitterTags = ({
  title = defaultSEOConfig.title,
  description = defaultSEOConfig.description,
  image = defaultSEOConfig.image,
  url = defaultSEOConfig.url,
}) => ({
  'twitter:card': 'summary_large_image',
  'twitter:url': url,
  'twitter:title': title,
  'twitter:description': description,
  'twitter:image': image,
  'twitter:image:alt': title,
  'twitter:creator': TWITTER_HANDLE,
});

/**
 * Structured Data - Organization Schema
 */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'True North Tech | Software Development',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'Premier software production company delivering scalable, innovative solutions for digital transformation.',
  foundingDate: '2018',
  foundingLocation: {
    '@type': 'Place',
    name: 'Medellin, Colombia',
  },
  areaServed: ['CO', 'US', 'EU'],
  availableLanguage: ['en', 'es'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'sales@truenorthtech.site',
    telephone: '+57-123-456-789',
    availableLanguage: ['en', 'es'],
  },
  sameAs: [
    'https://www.linkedin.com/company/true-north-tech-col/',
    'https://github.com/truenorthtech',
  ],
});

/**
 * Structured Data - Website Schema
 */
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: 'Enterprise software development solutions',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

/**
 * Structured Data - SoftwareApplication Schema
 */
export const getSoftwareApplicationSchema = (product) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: product.name,
  description: product.description,
  url: `${SITE_URL}/products/${product.slug}`,
  image: product.image,
  applicationCategory: product.category || 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: 'Contact for pricing',
  },
  aggregateRating: product.rating ? {
    '@type': 'AggregateRating',
    ratingValue: product.rating,
    ratingCount: product.testimonials?.length || 1,
  } : undefined,
  review: product.testimonials?.map((testimonial) => ({
    '@type': 'Review',
    name: testimonial.name,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: product.rating || 5,
    },
    author: {
      '@type': 'Person',
      name: testimonial.name,
      jobTitle: testimonial.role,
    },
    reviewBody: testimonial.text,
  })) || [],
});

/**
 * Structured Data - BreadcrumbList Schema
 */
export const getBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `${SITE_URL}${crumb.url}`,
  })),
});

/**
 * Structured Data - LocalBusiness Schema
 */
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  image: `${SITE_URL}/office.jpg`,
  description: 'Premier software development company',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Medellin',
    addressLocality: 'Medellin',
    addressRegion: 'Antioquia',
    postalCode: '050000',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '6.2442',
    longitude: '-75.5898',
  },
  telephone: '+57-3117105157',
  url: SITE_URL,
  priceRange: '$$$',
});

/**
 * Structured Data - Service Schema
 */
export const getServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Software Development Services',
  description: 'Enterprise software development, SaaS solutions, and digital transformation services',
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: ['Colombia', 'USA', 'Europe'],
  },
  serviceType: ['Web Application Development', 'Mobile App Development', 'Cloud Solutions'],
});

/**
 * Generate canonical URL
 */
export const getCanonicalUrl = (path = '') => {
  return `${SITE_URL}${path}`;
};

/**
 * Generate page-specific SEO configuration
 */
export const getPageSEOConfig = (page, data = {}) => {
  const configs = {
    home: {
      title: 'True North Tech - Modern Software Development | Innovation at Scale',
      description: 'True North Tech is a premier software production company. We design, build, and deploy enterprise-grade applications that drive digital transformation.',
      path: '/',
    },
    products: {
      title: 'Products & Solutions - True North Tech | Software Development',
      description: 'Explore our specialized software products: KDS, Hotel Booking System, Fleet Management, Funeral Management, Real Estate Software, and Custom Development Services.',
      path: '/products',
    },
    productDetail: {
      title: `${data.name || 'Product'} - True North Tech Software Solutions`,
      description: data.description || 'Professional software solution from True North Tech',
      path: `/products/${data.slug}`,
    },
    about: {
      title: 'About True North Tech - Engineering Excellence & Innovation',
      description: 'Learn about True North Tech: A premier software production company with 5+ years of excellence, serving 10+ global clients across 4 continents.',
      path: '/about',
    },
    contact: {
      title: 'Contact True North Tech - Start Your Software Project',
      description: 'Get in touch with our team to discuss your software development needs. Rapid response within 24 hours guaranteed.',
      path: '/contact',
    },
    privacy: {
      title: 'Privacy Policy - True North Tech',
      description: 'Privacy policy and data protection information for True North Tech website and services.',
      path: '/privacy-policy',
    },
    terms: {
      title: 'Terms of Service - True North Tech',
      description: 'Terms and conditions for using True North Tech services and website.',
      path: '/terms-of-service',
    },
  };

  return {
    ...defaultSEOConfig,
    ...(configs[page] || {}),
    url: getCanonicalUrl(configs[page]?.path || '/'),
  };
};

/**
 * Convert configuration to meta tag objects for Helmet
 */
export const configToHelmetMeta = (config) => {
  const metaTags = [
    { name: 'description', content: config.description },
    { name: 'keywords', content: config.keywords },
    { name: 'canonical', content: config.url },
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:url', content: config.url },
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: config.description },
  ];

  if (config.image) {
    metaTags.push(
      { property: 'og:image', content: config.image },
      { name: 'twitter:image', content: config.image }
    );
  }

  return metaTags;
};

/**
 * Generate full Helmet config with all meta tags
 */
export const generateHelmetConfig = (seoConfig) => {
  const og = generateOGTags({
    title: seoConfig.title,
    description: seoConfig.description,
    image: seoConfig.image,
    url: seoConfig.url,
  });

  const twitter = generateTwitterTags({
    title: seoConfig.title,
    description: seoConfig.description,
    image: seoConfig.image,
    url: seoConfig.url,
  });

  const allMeta = { ...og, ...twitter };

  return {
    title: seoConfig.title,
    meta: Object.entries(allMeta).map(([property, content]) => ({
      [property.startsWith('og:') || property.startsWith('twitter:') ? 'property' : 'name']: property,
      content,
    })),
  };
};
