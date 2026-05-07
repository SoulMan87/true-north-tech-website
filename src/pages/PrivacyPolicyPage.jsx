import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import { formatLegalDate, getQuarterlyUpdatedDate } from "@/utils/legalDate";
import { MultipleSchemas } from "@/components/StructuredData";
import {
  getPageSEOConfig,
  getOrganizationSchema,
} from "@/utils/seoMetadata";

const PrivacyPolicyPage = () => {
  const { language } = useLanguage();
  const isEs = language === "es";
  const lastUpdated = formatLegalDate(getQuarterlyUpdatedDate(), language);

  const seoConfig = getPageSEOConfig('privacy');

  const schemas = [
    getOrganizationSchema(),
  ];

  const content = isEs
    ? {
        title: "Política de Privacidad",
        subtitle:
          "En True North Tech protegemos su información y usamos los datos solo para operar, mejorar y dar soporte a nuestros servicios.",
        updatedLabel: "Última actualización",
        sections: [
          {
            heading: "1. Introducción",
            paragraphs: [
              "Bienvenido a True North Tech. Estamos comprometidos con la protección de la privacidad de los visitantes de nuestro sitio web y usuarios de nuestros servicios.",
              "Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información personal.",
            ],
          },
          {
            heading: "2. Información que recopilamos",
            paragraphs: ["Podemos recopilar y procesar los siguientes datos:"],
            bullets: [
              "Información de identificación personal (nombre, correo electrónico, teléfono, datos de la empresa).",
              "Datos técnicos (dirección IP, tipo de navegador, información del dispositivo, sistema operativo).",
              "Datos de uso (páginas visitadas, tiempo de permanencia e interacciones de navegación).",
            ],
          },
          {
            heading: "3. Cómo usamos su información",
            paragraphs: ["La información recopilada se utiliza para:"],
            bullets: [
              "Prestar y mantener nuestros servicios.",
              "Notificarle sobre cambios en nuestros servicios.",
              "Responder solicitudes de cotización y formularios de contacto.",
              "Brindar soporte al cliente.",
              "Analizar y mejorar el rendimiento y la experiencia del sitio web.",
            ],
          },
          {
            heading: "4. Compartir su información",
            paragraphs: [
              "No vendemos, comercializamos ni alquilamos sus datos personales. Podemos compartir analíticas agregadas y no identificables con aliados y proveedores de confianza para operar y mejorar nuestros servicios.",
            ],
          },
          {
            heading: "5. Seguridad de los datos",
            paragraphs: [
              "Implementamos medidas técnicas y organizativas apropiadas para proteger la información personal frente a accesos no autorizados, divulgación, alteración o destrucción.",
            ],
          },
          {
            heading: "6. Sus derechos de protección de datos",
            paragraphs: [
              "Dependiendo de su ubicación, puede tener derechos como:",
            ],
            bullets: [
              "El derecho de acceso a sus datos personales.",
              "El derecho de rectificación de datos inexactos.",
              "El derecho de supresión bajo ciertas condiciones.",
            ],
          },
          {
            heading: "7. Cookies",
            paragraphs: [
              "Nuestro sitio web puede usar cookies para mejorar la experiencia de usuario y medir el comportamiento de navegación. Puede configurar su navegador para rechazarlas o notificarle cuando se utilicen.",
            ],
          },
          {
            heading: "8. Cambios a esta Política de Privacidad",
            paragraphs: [
              "Podemos actualizar esta política periódicamente. Cualquier cambio será publicado en esta página con su fecha de actualización.",
            ],
          },
          {
            heading: "9. Contáctenos",
            paragraphs: [
              "Si tiene preguntas sobre esta Política de Privacidad, contáctenos en:",
            ],
            contact: {
              email: "informacion@truenorthtech.site",
              location: "Medellín - Colombia",
            },
          },
        ],
      }
    : {
        title: "Privacy Policy",
        subtitle:
          "At True North Tech, we protect your information and use data only to operate, improve, and support our services.",
        updatedLabel: "Last updated",
        sections: [
          {
            heading: "1. Introduction",
            paragraphs: [
              "Welcome to True North Tech. We are committed to safeguarding the privacy of our website visitors and service users.",
              "This Privacy Policy outlines how we collect, use, and protect your personal information.",
            ],
          },
          {
            heading: "2. Information We Collect",
            paragraphs: ["We may collect and process the following data:"],
            bullets: [
              "Personal identification information (name, email address, phone number, company details).",
              "Technical data (IP address, browser type, device information, operating system).",
              "Usage data (pages visited, time spent on pages, and clickstream interactions).",
            ],
          },
          {
            heading: "3. How We Use Your Information",
            paragraphs: ["The information we collect is used to:"],
            bullets: [
              "Provide and maintain our services.",
              "Notify you about changes to our services.",
              "Respond to quote requests and contact forms.",
              "Provide customer support.",
              "Analyze and improve website performance and experience.",
            ],
          },
          {
            heading: "4. Sharing Your Information",
            paragraphs: [
              "We do not sell, trade, or rent your personal data. We may share aggregated, non-identifiable analytics with trusted partners and service providers as needed to operate and improve our services.",
            ],
          },
          {
            heading: "5. Data Security",
            paragraphs: [
              "We implement appropriate technical and organizational security measures to protect personal information against unauthorized access, disclosure, alteration, or destruction.",
            ],
          },
          {
            heading: "6. Your Data Protection Rights",
            paragraphs: [
              "Depending on your location, you may have rights such as:",
            ],
            bullets: [
              "The right to access your personal data.",
              "The right to rectification of inaccurate data.",
              "The right to erasure under certain conditions.",
            ],
          },
          {
            heading: "7. Cookies",
            paragraphs: [
              "Our website may use cookies to improve user experience and measure traffic behavior. You can configure your browser to reject cookies or notify you when cookies are used.",
            ],
          },
          {
            heading: "8. Changes to This Privacy Policy",
            paragraphs: [
              "We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.",
            ],
          },
          {
            heading: "9. Contact Us",
            paragraphs: [
              "If you have questions about this Privacy Policy, contact us at:",
            ],
            contact: {
              email: "informacion@truenorthtech.site",
              location: "Medellin - Colombia",
            },
          },
        ],
      };

  return (
    <MultipleSchemas schemas={schemas}>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security" />
        <link rel="canonical" href={seoConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:image" content={seoConfig.image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={seoConfig.url} />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
      </Helmet>

      <div className="min-h-screen bg-light pb-16">
        <section className="relative overflow-hidden bg-dark pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark to-primary/30" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              {content.title}
            </h1>
            <p className="text-gray-300 text-lg mt-5 max-w-3xl leading-relaxed">
              {content.subtitle}
            </p>
            <p className="text-accent font-semibold mt-6">
              {content.updatedLabel}: {lastUpdated}
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {content.sections.map((section) => (
                <article
                  key={section.heading}
                  className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-dark mb-4">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="text-gray-700 leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets?.length > 0 && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.contact && (
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Email:{" "}
                        <a
                          href={`mailto:${section.contact.email}`}
                          className="text-primary font-semibold hover:underline"
                        >
                          {section.contact.email}
                        </a>
                      </p>
                      <p className="text-gray-700 mt-1">{section.contact.location}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MultipleSchemas>
  );
};

export default PrivacyPolicyPage;
