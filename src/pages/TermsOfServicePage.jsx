import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import { formatLegalDate, getQuarterlyUpdatedDate } from "@/utils/legalDate";

const TermsOfServicePage = () => {
  const { language } = useLanguage();
  const isEs = language === "es";
  const lastUpdated = formatLegalDate(getQuarterlyUpdatedDate(), language);

  const content = isEs
    ? {
        title: "Términos de Servicio",
        subtitle:
          "Estos términos regulan el uso del sitio web y los servicios de True North Tech, incluyendo responsabilidades, límites y condiciones.",
        updatedLabel: "Última actualización",
        sections: [
          {
            heading: "1. Aceptación de los términos",
            paragraphs: [
              "Al acceder o utilizar el sitio web y los servicios de True North Tech, usted acepta cumplir estos Términos de Servicio y las leyes y regulaciones aplicables.",
            ],
          },
          {
            heading: "2. Descripción de los servicios",
            paragraphs: [
              "True North Tech ofrece productos de software, consultoría y servicios técnicos relacionados. El alcance del servicio, entregables y cronogramas pueden definirse en acuerdos comerciales separados.",
            ],
          },
          {
            heading: "3. Responsabilidades del usuario",
            paragraphs: ["Usted acepta:"],
            bullets: [
              "Proporcionar información veraz en formularios y comunicaciones.",
              "Usar el sitio web y los servicios solo con fines legales.",
              "No intentar acceder de forma no autorizada a sistemas o datos.",
            ],
          },
          {
            heading: "4. Propiedad intelectual",
            paragraphs: [
              "Todo el contenido del sitio web, la marca y los materiales son propiedad de True North Tech o de sus licenciantes, salvo indicación contraria. No puede copiar, distribuir ni reutilizar este contenido sin autorización previa por escrito.",
            ],
          },
          {
            heading: "5. Limitación de responsabilidad",
            paragraphs: [
              "En la máxima medida permitida por la ley, True North Tech no será responsable por daños indirectos, incidentales o consecuenciales derivados del uso de este sitio web o servicios.",
            ],
          },
          {
            heading: "6. Servicios de terceros",
            paragraphs: [
              "Nuestro sitio web o soluciones pueden integrar servicios de terceros. No somos responsables del contenido, políticas o prácticas de proveedores externos.",
            ],
          },
          {
            heading: "7. Terminación",
            paragraphs: [
              "Podemos suspender o terminar el acceso a los servicios, a nuestra discreción, si se incumplen estos términos o si es necesario por motivos de seguridad, legales u operativos.",
            ],
          },
          {
            heading: "8. Cambios en los términos",
            paragraphs: [
              "Podemos actualizar estos Términos de Servicio periódicamente. El uso continuado del sitio web después de dichas actualizaciones implica la aceptación de los términos revisados.",
            ],
          },
          {
            heading: "9. Ley aplicable",
            paragraphs: [
              "Estos términos se rigen por las leyes aplicables de Colombia, salvo que un acuerdo escrito independiente establezca lo contrario.",
            ],
          },
          {
            heading: "10. Contacto",
            paragraphs: [
              "Si tiene preguntas sobre estos términos, contáctenos en:",
            ],
            contact: {
              email: "informacion@truenorthtech.site",
              location: "Medellín - Colombia",
            },
          },
        ],
      }
    : {
        title: "Terms of Service",
        subtitle:
          "These terms govern the use of the True North Tech website and services, including responsibilities, limits, and conditions.",
        updatedLabel: "Last updated",
        sections: [
          {
            heading: "1. Acceptance of Terms",
            paragraphs: [
              "By accessing or using the True North Tech website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
            ],
          },
          {
            heading: "2. Services Description",
            paragraphs: [
              "True North Tech provides software products, consulting, and related technical services. Service scope, deliverables, and timelines may be defined in separate commercial agreements.",
            ],
          },
          {
            heading: "3. User Responsibilities",
            paragraphs: ["You agree to:"],
            bullets: [
              "Provide accurate information in forms and communications.",
              "Use the website and services only for lawful purposes.",
              "Not attempt unauthorized access to systems or data.",
            ],
          },
          {
            heading: "4. Intellectual Property",
            paragraphs: [
              "All website content, branding, and materials are the property of True North Tech or its licensors unless otherwise stated. You may not copy, distribute, or reuse this content without prior written permission.",
            ],
          },
          {
            heading: "5. Limitation of Liability",
            paragraphs: [
              "To the maximum extent permitted by law, True North Tech is not liable for indirect, incidental, or consequential damages arising from the use of this website or services.",
            ],
          },
          {
            heading: "6. Third-Party Services",
            paragraphs: [
              "Our website or solutions may integrate third-party services. We are not responsible for the content, policies, or practices of external providers.",
            ],
          },
          {
            heading: "7. Termination",
            paragraphs: [
              "We may suspend or terminate access to services at our discretion if these terms are violated or if required for security, legal, or operational reasons.",
            ],
          },
          {
            heading: "8. Changes to Terms",
            paragraphs: [
              "We may update these Terms of Service from time to time. Continued use of the website after updates implies acceptance of the revised terms.",
            ],
          },
          {
            heading: "9. Governing Law",
            paragraphs: [
              "These terms are governed by applicable laws of Colombia, unless a separate written agreement states otherwise.",
            ],
          },
          {
            heading: "10. Contact",
            paragraphs: [
              "If you have any questions about these terms, contact us at:",
            ],
            contact: {
              email: "informacion@truenorthtech.site",
              location: "Medellin - Colombia",
            },
          },
        ],
      };

  return (
    <>
      <Helmet>
        <title>{`${content.title} - True North Tech`}</title>
        <meta name="description" content={content.subtitle} />
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
    </>
  );
};

export default TermsOfServicePage;
