/**
 * Structured Data / Schema.org JSON-LD Component
 * Renders schema.org structured data for better SERP rich results
 */

import { Helmet } from 'react-helmet';
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getLocalBusinessSchema,
  getServiceSchema,
  getSoftwareApplicationSchema,
  getBreadcrumbSchema,
} from '@/utils/seoMetadata';

/**
 * Generic Schema Component
 * Pass any schema object and it will be rendered as JSON-LD
 */
export const StructuredData = ({ schema, children }) => {
  if (!schema) return children || null;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      {children}
    </>
  );
};

/**
 * Organization Schema Component
 * Usually rendered once in the root or layout
 */
export const OrganizationSchema = ({ children }) => {
  return (
    <StructuredData schema={getOrganizationSchema()}>
      {children}
    </StructuredData>
  );
};

/**
 * Website Schema Component
 * Usually rendered once in the root or layout
 */
export const WebsiteSchema = ({ children }) => {
  return (
    <StructuredData schema={getWebsiteSchema()}>
      {children}
    </StructuredData>
  );
};

/**
 * LocalBusiness Schema Component
 */
export const LocalBusinessSchema = ({ children }) => {
  return (
    <StructuredData schema={getLocalBusinessSchema()}>
      {children}
    </StructuredData>
  );
};

/**
 * Service Schema Component
 */
export const ServiceSchema = ({ children }) => {
  return (
    <StructuredData schema={getServiceSchema()}>
      {children}
    </StructuredData>
  );
};

/**
 * Product / SoftwareApplication Schema Component
 */
export const ProductSchema = ({ product, children }) => {
  if (!product) return children || null;

  return (
    <StructuredData schema={getSoftwareApplicationSchema(product)}>
      {children}
    </StructuredData>
  );
};

/**
 * BreadcrumbList Schema Component
 */
export const BreadcrumbSchema = ({ breadcrumbs, children }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return children || null;

  return (
    <StructuredData schema={getBreadcrumbSchema(breadcrumbs)}>
      {children}
    </StructuredData>
  );
};

/**
 * Render multiple schemas at once
 */
export const MultipleSchemas = ({ schemas = [], children }) => {
  if (schemas.length === 0) return children || null;

  return (
    <>
      <Helmet>
        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      {children}
    </>
  );
};

export default StructuredData;
