import React, { createContext, useState, useContext, useEffect } from 'react';
import realEstateImg from "@/assets/real-estate.jpg";
import kdfImg from "@/assets/kds.jpg";
import driverImg from "@/assets/driver-saas.jpg";
import hotelManagementSystem from "@/assets/hotel-management-system.jpg";
import customSoftwareServices from "@/assets/custom-software-services.jpg";
import funeralManagementImg from "@/assets/funeral-management.jpg";
import { getCookie, setCookie } from "@/utils/cookies";


const LanguageContext = createContext();

const LANGUAGE_COOKIE = "language";
const SPANISH_COUNTRY_CODES = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GQ",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

const normalizeLanguage = (value) => {
  if (value === "en" || value === "es") return value;
  return null;
};

const readStoredLanguage = () => {
  const cookieValue = normalizeLanguage(getCookie(LANGUAGE_COOKIE));
  if (cookieValue) return cookieValue;
  try {
    return normalizeLanguage(localStorage.getItem("language"));
  } catch (error) {
    return null;
  }
};

export const translations = {
  en: {
    common: {
      getStarted: "Get Started",
      viewDetails: "View Details",
      learnMore: "Learn More",
      contactSales: "Contact Sales",
      requestDemo: "Request Demo",
      requestQuote: "Request Quote",
      customPricing: "Custom Pricing",
      customPricingDesc: "Custom pricing based on your needs",
      loading: "Loading...",
      success: "Success",
      error: "Error",
      back: "Back",
      allRightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },
    navigation: {
      home: "Home",
      products: "Products",
      about: "About Us",
      contact: "Contact",
      getStarted: "Get Started"
    },
    cookies: {
      title: "We use cookies",
      message: "We use cookies to improve your experience and understand how you use our site.",
      learnMore: "Learn more",
      acceptAll: "Accept all",
      acceptNecessary: "Only necessary",
      acceptNone: "Reject all"
    },
    footer: {
      description: "We are a premier software production company delivering scalable, innovative solutions that drive digital transformation for businesses worldwide. Not just an agency—we are your technology partner.",
      solutions: "Solutions",
      company: "Company",
      contactUs: "Contact Us",
      email: "Email",
      phone: "Phone",
      headquarters: "Headquarters"
    },
    home: {
      welcome: "Welcome to True North Tech",
      heroTitle: "Modern Software",
      heroSubtitle: "Innovation at Scale",
      heroDescription: "We are a software production powerhouse. We design, build, and deploy enterprise-grade applications that drive digital transformation and sustainable growth.",
      exploreSolutions: "Explore Solutions",
      getInTouch: "Get in Touch",
      whyChooseTitle: "Why Choose True North",
      engineeringExcellence: "Engineering Excellence",
      engineeringDesc: "We don't just write code; we engineer solutions that solve complex business challenges.",
      readyToTransform: "Ready to Transform Your Business?",
      joinCompanies: "Join the forward-thinking companies that trust True North Tech for their software solutions. Let's build the future together.",
      exploreProducts: "Explore Products",
      features: {
        innovation: { title: "Innovation at Core", desc: "We leverage the latest technologies to build software that keeps you ahead of the curve." },
        reliability: { title: "Enterprise Reliability", desc: "Systems designed for 99.99% uptime and banking-grade security standards." },
        scalable: { title: "Scalable Architecture", desc: "Solutions that grow with your business, handling millions of requests effortlessly." },
        support: { title: "Global Support", desc: "24/7 technical support and maintenance for our clients worldwide." }
      }
    },
    about: {
      title: "About True North Tech - Our Story & Mission",
      heroTitle: "Engineering the Future",
      heroDesc: "True North Tech is not just another agency. We are a software production company building the backbone of digital business for the modern era.",
      yearsExcellence: "Years of Excellence",
      globalClients: "Global Clients",
      projectsDelivered: "Projects Delivered",
      teamMembers: "Team Members",
      whoWeAre: "Who We Are",
      whoWeAreSubtitle: "A dedicated team of engineers, designers, and strategists.",
      whoWeAreP1: "Founded with a vision to bring engineering rigor to business software, True North Tech has evolved into a global production house. We don't just build websites; we build complex, mission-critical systems that power industries ranging from hospitality to logistics.",
      whoWeAreP2: "Our \"North Star\" is quality. In an industry often plagued by technical debt and quick fixes, we stand firm on architectural integrity and long-term scalability. We build software that lasts, scales, and delivers value for years to come.",
      techStack: "Our Technology Stack",
      coreValues: "Our Core Values",
      coreValuesSubtitle: "The principles that guide every line of code we write.",
      globalImpact: "Global Impact",
      globalImpactDesc: "From Silicon Valley startups to European enterprises, our software runs businesses across 15+ countries and 4 continents.",
      joinNetwork: "Join Our Network",
      values: {
        innovation: { title: "Innovation", desc: "We constantly push the boundaries of what is possible, adopting the latest technologies to solve real-world problems." },
        collaboration: { title: "Collaboration", desc: "We believe in true partnership. We work alongside our clients, not just for them, ensuring aligned goals and success." },
        excellence: { title: "Excellence", desc: "We uphold the highest standards of code quality, security, and performance. \"Good enough\" is not in our vocabulary." }
      }
    },
    contact: {
      title: "Contact True North Tech - Start Your Project",
      pageTitle: "Let's Build Something Great",
      pageSubtitle: "Have a project in mind? We'd love to hear from you.",
      emailUs: "Email Us",
      callUs: "Call Us",
      visitUs: "Visit Us",
      sendMessage: "Send us a message",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        inquiryType: "Inquiry Type",
        productName: "Product Name",
        interest: "I'm interested in...",
        message: "Message",
        sending: "Sending...",
        sendBtn: "Send Message",
        successTitle: "Message Sent Successfully!",
        successDesc: "Thank you for reaching out. Our team will get back to you within 24 hours.",
        errorTitle: "Submission Failed",
        errorDesc: "Something went wrong. Please try again later.",
        validationTitle: "Validation Error",
        validationDesc: "Please check the form for errors.",
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Invalid email address",
          messageRequired: "Message is required",
          messageShort: "Message must be at least 10 characters",
          productNameRequired: "Product Name is required for quote requests"
        },
        options: {
          general: "General Inquiry",
          quoteRequest: "Quote Request",
          support: "Support",
          hotel: "Hotel Booking System",
          drivers: "Drivers SaaS",
          kds: "KDS System",
          custom: "Custom Development"
        }
      },
      whyUs: "Why True North Tech?",
      rapidResponse: "Rapid Response",
      rapidResponseDesc: "We value your time. Expect a response within 24 hours.",
      consultative: "Consultative Approach",
      consultativeDesc: "We listen first, then engineer the perfect solution.",
      officeHours: "Office Hours",
      days: {
        monFri: "Monday - Friday",
        sat: "Saturday",
        sun: "Sunday",
        closed: "Closed"
      }
    },
    productsPage: {
      title: "Products & Services - True North Tech",
      sectionTitle: "Our Solutions",
      sectionSubtitle: "Specialized software products designed to power specific industries with precision and reliability.",
      customPricingIntro: "All our products feature custom pricing tailored to your specific needs"
    },
    productDetail: {
      backToSolutions: "Back to Solutions",
      overview: "Overview",
      keyBenefits: "Key Benefits",
      powerfulFeatures: "Powerful Features",
      featuresSubtitle: "Everything you need to succeed at scale.",
      trustedBy: "Trusted by Industry Leaders",
      customerRating: "Customer Rating",
      productNotFound: "Product Not Found",
      demoRequested: "Demo Requested",
      demoRequestedDesc: "Our sales team will contact you shortly to schedule your personalized demo.",
      benefits: {
        security: "Enterprise Security Standards",
        uptime: "99.9% Uptime SLA",
        interface: "Intuitive User Interface",
        support: "24/7 Global Support"
      }
    },
    products: [
      {
        id: 'hotel-booking',
        name: 'Hotel Booking System',
        tagline: 'Elevate Guest Experiences & Streamline Operations',
        description: 'Comprehensive property management system for hotels and resorts. Manage reservations, housekeeping, billing, and guest experiences in one unified platform.',
        fullDescription: 'Our Hotel Booking System acts as the central nervous system for hospitality businesses. From the moment a guest books online to their checkout and post-stay feedback, our platform handles every touchpoint.\n\nDesigned for scalability, it supports single boutique hotels to large international chains. The system integrates seamlessly with major OTAs (Online Travel Agencies), payment gateways, and key card systems, ensuring that your operations run smoothly without manual data entry errors.',
        category: 'Hospitality',
        features: [
          'Real-time reservation management',
          'Channel manager integration',
          'Guest portal & mobile check-in',
          'Housekeeping Management App',
          'Point of Sale (POS) Integration',
          'Dynamic Pricing Engine',
          'Guest CRM & Loyalty Program',
          'Multi-currency & Multi-language Support'
        ],
        image: hotelManagementSystem,
        rating: 5,
        testimonials: [
          { name: "Sarah Jenkins", role: "GM, Seaside Resorts", text: "Revenue increased by 25% within the first quarter of using True North's booking engine." },
          { name: "Michael Chen", role: "Director, Urban Stays", text: "The operational efficiency we gained is unmatched. Housekeeping is finally in sync with the front desk." }
        ]
      },
      {
        id: 'drivers-saas',
        name: "Driver's SaaS",
        tagline: 'The Ultimate Fleet & Driver Management Platform',
        description: 'Advanced fleet management and driver coordination platform. Optimize routes, track performance, and manage payments for logistics and transportation companies.',
        fullDescription: 'Managing a distributed fleet of drivers is complex. Drivers SaaS simplifies this by providing a dedicated mobile app for drivers and a powerful command center for dispatchers.\n\nWe focus on driver retention through transparent earnings reports and gamified performance metrics. For the business, we offer deep insights into route efficiency, fuel consumption, and delivery times, helping logistics companies squeeze every bit of efficiency out of their operations.',
        category: 'Logistics',
        features: [
          'Real-time GPS Tracking',
          'Smart Route Optimization',
          'Digital Proof of Delivery',
          'Driver Wallet & Instant Payouts',
          'Vehicle Maintenance Alerts',
          'Shift Scheduling & Compliance',
          'In-app Chat & Support',
          'Performance Analytics Dashboard'
        ],
        image:  driverImg,
        rating: 4.8,
        testimonials: [
          { name: "David Rodriguez", role: "Ops Manager, FastLogistics", text: "Our delivery times dropped by 15% thanks to the route optimization features." },
          { name: "Elena Volkov", role: "CEO, CityCouriers", text: "Drivers love the app. It's clean, fast, and they get paid faster. Retention is at an all-time high." }
        ]
      },
      {
        id: 'kds-system',
        name: 'Kitchen Display System (KDS)',
        tagline: 'Chaos-Free Kitchens for High-Volume Restaurants',
        description: 'Streamline your kitchen operations with our digital KDS. Replace paper tickets, improve order accuracy, and reduce wait times for restaurants and ghost kitchens.',
        fullDescription: 'The kitchen is the heart of any restaurant, but it is often the most chaotic. Our KDS brings order to the chaos by digitizing order flows. Orders from the POS, online ordering apps, and kiosks appear instantly on kitchen screens.\n\nWith features like "all-day" counts, color-coded tickets for long wait times, and station routing (routing drinks to the bar, steaks to the grill), your kitchen team can focus on cooking rather than decoding handwriting.',
        category: 'FoodTech',
        features: [
          'Wait Time Management',
          'Color-Coded Priority Alerts',
          'Station-Specific Routing',
          'Recall Bumped Orders',
          'Expo Mode for Packaging',
          'Recipe Viewer Integration',
          'Average Cook Time Analytics',
          'Hardware Agnostic (runs on tablets/screens)'
        ],
        image: kdfImg,
        rating: 4.9,
        testimonials: [
          { name: "Chef Gordon", role: "Head Chef, Bistro 42", text: "No more lost tickets. The expo screen is a lifesaver during the Friday night rush." },
          { name: "Lisa Wong", role: "Owner, Noodle Bar", text: "Integration with UberEats and DoorDash directly to the KDS saved us two staff members' worth of work." }
        ]
      },
      {
        id: 'real-estate-crm',
        name: 'Real Estate Software',
        tagline: 'Close More Deals with Intelligent Property Management',
        description: 'All-in-one CRM and property management solution for real estate agencies. Manage listings, leads, viewings, and contracts efficiently.',
        fullDescription: 'In real estate, timing is everything. Our Real Estate Software ensures you never miss a lead. It automatically captures inquiries from portals like Zillow and Realtor.com and assigns them to agents instantly.\n\nBeyond leads, manage your entire inventory of properties with high-res galleries, virtual tours, and automated brochure generation. The contract management module handles e-signatures and compliance, making the closing process smooth and paperless.',
        category: 'Real Estate',
        features: [
          'Automated Lead Assignment',
          'Property Portal Syndication',
          'Virtual Tour Hosting',
          'E-Signature Integration',
          'Commission Tracking',
          'Client Portal for Viewings',
          'Open House Registration App',
          'Market Analysis Reports'
        ],
        image: realEstateImg,
        rating: 4.7,
        testimonials: [
          { name: "James Sterling", role: "Broker, Prime Estates", text: "The automation is incredible. It feels like having a personal assistant for every agent." },
          { name: "Maria Garcia", role: "Realtor, Sunny Homes", text: "My clients love the portal where they can see feedback on their property viewings instantly." }
        ]
      },
      {
        id: 'custom-services',
        name: 'Custom Software Services',
        tagline: 'Your Vision, Engineered to Perfection',
        description: 'Tailor-made software solutions for unique business needs. Our expert team develops scalable applications for domestic and international clients.',
        fullDescription: 'Sometimes off-the-shelf software isn\'t enough. That\'s where True North Tech shines. We partner with clients domestically and internationally to build custom software solutions.\n\nFrom legacy system modernization to building entirely new SaaS products from scratch, our team follows agile methodologies to deliver value quickly. We handle the entire lifecycle: discovery, design, development, testing, deployment, and ongoing maintenance.',
        category: 'Services',
        features: [
          'Web & Mobile App Development',
          'Cloud Infrastructure (AWS/Azure)',
          'API Development & Integration',
          'UI/UX Design',
          'DevOps & CI/CD Pipelines',
          'QA & Automated Testing',
          'Database Architecture',
          'Security Audits'
        ],
        image: customSoftwareServices,
        rating: 5,
        testimonials: [
          { name: "Robert Fox", role: "CTO, Fintech Startup", text: "True North Tech acted as our internal engineering team. The code quality is world-class." },
          { name: "Amanda Low", role: "VP Ops, Logistics Co", text: "They understood our complex business logic faster than any other vendor we've worked with." }
        ]
      },
            {
        id: 'funeral-management',
        name: 'Funeral Management System',
        tagline: 'Modernize Funeral Home Operations with Compassion & Efficiency',
        description:
          'A complete management platform for funeral homes. Handle service scheduling, client records, payments, inventory, and memorial coordination in one unified system.',
        fullDescription:
          'Funeral services require both sensitivity and operational excellence. Our Funeral Management System is designed to help funeral homes manage every step of the process with professionalism, clarity, and care.\n\nFrom client intake and service planning to payment tracking, staff coordination, and memorial documentation, this platform ensures that funeral directors can focus on what matters most: supporting families during difficult times.\n\nBuilt with scalability and security in mind, the system supports multi-location funeral businesses, integrates with digital memorial pages, and provides full reporting for compliance and financial oversight.',
        category: 'Funeral Services',
        features: [
          'Client & Family Record Management',
          'Service Scheduling & Ceremony Planning',
          'Digital Memorial Page Integration',
          'Inventory & Casket Tracking',
          'Billing, Payments & Invoicing',
          'Staff Assignment & Task Management',
          'Compliance Documentation & Reporting',
          'Multi-Branch Support for Funeral Networks'
        ],
        image: funeralManagementImg,
        rating: 4.9,
        testimonials: [
          {
            name: "Emily Carter",
            role: "Director, Peaceful Rest Funeral Home",
            text: "This system transformed how we manage services. Everything is organized, respectful, and efficient."
          },
          {
            name: "Daniel Moore",
            role: "Operations Manager, Heritage Memorial Group",
            text: "Multi-location support and reporting tools helped us scale without losing attention to detail."
          }
        ]
      } 
    ]
  },
  es: {
    common: {
      getStarted: "Comenzar",
      viewDetails: "Ver Detalles",
      learnMore: "Saber Más",
      contactSales: "Contactar Ventas",
      requestDemo: "Solicitar Demo",
      requestQuote: "Solicitar Cotización",
      customPricing: "Precios Personalizados",
      customPricingDesc: "Precios personalizados según tus necesidades",
      loading: "Cargando...",
      success: "Éxito",
      error: "Error",
      back: "Atrás",
      allRightsReserved: "Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      termsOfService: "Términos de Servicio"
    },
    navigation: {
      home: "Inicio",
      products: "Productos",
      about: "Nosotros",
      contact: "Contacto",
      getStarted: "Empezar"
    },
    cookies: {
      title: "Usamos cookies",
      message: "Usamos cookies para mejorar tu experiencia y entender cómo utilizas nuestro sitio.",
      learnMore: "Saber más",
      acceptAll: "Aceptar todas",
      acceptNecessary: "Solo necesarias",
      acceptNone: "Rechazar todas"
    },
    footer: {
      description: "Somos una empresa líder en producción de software que ofrece soluciones escalables e innovadoras para impulsar la transformación digital de empresas en todo el mundo. No solo una agencia, somos su socio tecnológico.",
      solutions: "Soluciones",
      company: "Empresa",
      contactUs: "Contáctanos",
      email: "Correo",
      phone: "Teléfono",
      headquarters: "Oficinas"
    },
    home: {
      welcome: "Bienvenido a True North Tech",
      heroTitle: "Software Moderno",
      heroSubtitle: "Innovación a Escala",
      heroDescription: "Somos una potencia en producción de software. Diseñamos, construimos e implementamos aplicaciones de nivel empresarial que impulsan la transformación digital y el crecimiento sostenible.",
      exploreSolutions: "Explorar Soluciones",
      getInTouch: "Contáctanos",
      whyChooseTitle: "Por Qué Elegir True North",
      engineeringExcellence: "Excelencia en Ingeniería",
      engineeringDesc: "No solo escribimos código; diseñamos soluciones de ingeniería que resuelven desafíos empresariales complejos.",
      readyToTransform: "¿Listo para Transformar tu Negocio?",
      joinCompanies: "Únete a las empresas visionarias que confían en True North Tech para sus soluciones de software. Construyamos el futuro juntos.",
      exploreProducts: "Explorar Productos",
      features: {
        innovation: { title: "Innovación Central", desc: "Aprovechamos las últimas tecnologías para construir software que te mantiene a la vanguardia." },
        reliability: { title: "Confiabilidad Empresarial", desc: "Sistemas diseñados para un 99.99% de tiempo de actividad y estándares de seguridad bancarios." },
        scalable: { title: "Arquitectura Escalable", desc: "Soluciones que crecen con tu negocio, manejando millones de solicitudes sin esfuerzo." },
        support: { title: "Soporte Global", desc: "Soporte técnico y mantenimiento 24/7 para nuestros clientes en todo el mundo." }
      }
    },
    about: {
      title: "Sobre True North Tech - Nuestra Historia y Misión",
      heroTitle: "Ingeniando el Futuro",
      heroDesc: "True North Tech no es solo otra agencia. Somos una empresa de producción de software que construye la columna vertebral del negocio digital para la era moderna.",
      yearsExcellence: "Años de Excelencia",
      globalClients: "Clientes Globales",
      projectsDelivered: "Proyectos Entregados",
      teamMembers: "Miembros del Equipo",
      whoWeAre: "Quiénes Somos",
      whoWeAreSubtitle: "Un equipo dedicado de ingenieros, diseñadores y estrategas.",
      whoWeAreP1: "Fundada con la visión de aportar rigor de ingeniería al software empresarial, True North Tech ha evolucionado hasta convertirse en una casa de producción global. No solo construimos sitios web; construimos sistemas complejos y de misión crítica que impulsan industrias desde la hostelería hasta la logística.",
      whoWeAreP2: "Nuestra \"Estrella del Norte\" es la calidad. En una industria a menudo plagada de deuda técnica y arreglos rápidos, nos mantenemos firmes en la integridad arquitectónica y la escalabilidad a largo plazo. Construimos software que perdura, escala y ofrece valor durante años.",
      techStack: "Nuestra Pila Tecnológica",
      coreValues: "Nuestros Valores Fundamentales",
      coreValuesSubtitle: "Los principios que guían cada línea de código que escribimos.",
      globalImpact: "Impacto Global",
      globalImpactDesc: "Desde startups de Silicon Valley hasta empresas europeas, nuestro software ejecuta negocios en más de 15 países y 4 continentes.",
      joinNetwork: "Únete a Nuestra Red",
      values: {
        innovation: { title: "Innovación", desc: "Constantemente empujamos los límites de lo posible, adoptando las últimas tecnologías para resolver problemas del mundo real." },
        collaboration: { title: "Colaboración", desc: "Creemos en la verdadera asociación. Trabajamos junto a nuestros clientes, no solo para ellos, asegurando objetivos alineados y éxito." },
        excellence: { title: "Excelencia", desc: "Mantenemos los más altos estándares de calidad de código, seguridad y rendimiento. \"Suficientemente bueno\" no está en nuestro vocabulario." }
      }
    },
    contact: {
      title: "Contacta a True North Tech - Comienza tu Proyecto",
      pageTitle: "Construyamos Algo Grandioso",
      pageSubtitle: "¿Tienes un proyecto en mente? Nos encantaría escucharte.",
      emailUs: "Envíanos un Correo",
      callUs: "Llámanos",
      visitUs: "Visítanos",
      sendMessage: "Envíanos un mensaje",
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        phone: "Teléfono",
        company: "Empresa",
        inquiryType: "Tipo de Consulta",
        productName: "Nombre del Producto",
        interest: "Estoy interesado en...",
        message: "Mensaje",
        sending: "Enviando...",
        sendBtn: "Enviar Mensaje",
        successTitle: "¡Mensaje Enviado con Éxito!",
        successDesc: "Gracias por contactarnos. Nuestro equipo te responderá dentro de las 24 horas.",
        errorTitle: "Envío Fallido",
        errorDesc: "Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
        validationTitle: "Error de Validación",
        validationDesc: "Por favor, verifica el formulario en busca de errores.",
        errors: {
          nameRequired: "El nombre es requerido",
          emailRequired: "El correo es requerido",
          emailInvalid: "Dirección de correo inválida",
          messageRequired: "El mensaje es requerido",
          messageShort: "El mensaje debe tener al menos 10 caracteres",
          productNameRequired: "El Nombre del Producto es requerido para solicitudes de cotización"
        },
        options: {
          general: "Consulta General",
          quoteRequest: "Solicitud de Cotización",
          support: "Soporte",
          hotel: "Sistema de Reservas Hoteleras",
          drivers: "SaaS para Conductores",
          kds: "Sistema KDS",
          custom: "Desarrollo Personalizado"
        }
      },
      whyUs: "¿Por Qué True North Tech?",
      rapidResponse: "Respuesta Rápida",
      rapidResponseDesc: "Valoramos tu tiempo. Espera una respuesta dentro de las 24 horas.",
      consultative: "Enfoque Consultivo",
      consultativeDesc: "Escuchamos primero, luego diseñamos la solución perfecta.",
      officeHours: "Horario de Oficina",
      days: {
        monFri: "Lunes - Viernes",
        sat: "Sábado",
        sun: "Domingo",
        closed: "Cerrado"
      }
    },
    productsPage: {
      title: "Productos y Servicios - True North Tech",
      sectionTitle: "Nuestras Soluciones",
      sectionSubtitle: "Productos de software especializados diseñados para potenciar industrias específicas con precisión y confiabilidad.",
      customPricingIntro: "Todos nuestros productos cuentan con precios personalizados adaptados a tus necesidades específicas"
    },
    productDetail: {
      backToSolutions: "Volver a Soluciones",
      overview: "Resumen",
      keyBenefits: "Beneficios Clave",
      powerfulFeatures: "Características Potentes",
      featuresSubtitle: "Todo lo que necesitas para tener éxito a escala.",
      trustedBy: "Confiado por Líderes de la Industria",
      customerRating: "Calificación de Clientes",
      productNotFound: "Producto No Encontrado",
      demoRequested: "Demo Solicitada",
      demoRequestedDesc: "Nuestro equipo de ventas te contactará pronto para programar tu demo personalizada.",
      benefits: {
        security: "Estándares de Seguridad Empresarial",
        uptime: "SLA de 99.9% de Tiempo de Actividad",
        interface: "Interfaz de Usuario Intuitiva",
        support: "Soporte Global 24/7"
      }
    },
    products: [
      {
        id: 'hotel-booking',
        name: 'Sistema de Reservas Hoteleras',
        tagline: 'Mejora la Experiencia del Huésped y Optimiza Operaciones',
        description: 'Sistema integral de gestión de propiedades para hoteles y resorts. Gestiona reservas, limpieza, facturación y experiencias de huéspedes en una plataforma unificada.',
        fullDescription: 'Nuestro Sistema de Reservas Hoteleras actúa como el sistema nervioso central para negocios de hostelería. Desde el momento en que un huésped reserva en línea hasta su salida y comentarios posteriores a la estancia, nuestra plataforma maneja cada punto de contacto.\n\nDiseñado para la escalabilidad, soporta desde hoteles boutique individuales hasta grandes cadenas internacionales. El sistema se integra perfectamente con las principales OTAs (Agencias de Viajes en Línea), pasarelas de pago y sistemas de tarjetas llave, asegurando que tus operaciones funcionen sin problemas y sin errores de entrada manual de datos.',
        category: 'Hospitalidad',
        features: [
          'Gestión de reservas en tiempo real',
          'Integración de gestor de canales',
          'Portal de huéspedes y check-in móvil',
          'Aplicación de Gestión de Limpieza',
          'Integración de Punto de Venta (POS)',
          'Motor de Precios Dinámicos',
          'CRM de Huéspedes y Programa de Lealtad',
          'Soporte Multimoneda y Multilenguaje'
        ],
        image: hotelManagementSystem,
        rating: 5,
        testimonials: [
          { name: "Sarah Jenkins", role: "GM, Seaside Resorts", text: "Los ingresos aumentaron un 25% en el primer trimestre de uso del motor de reservas de True North." },
          { name: "Michael Chen", role: "Director, Urban Stays", text: "La eficiencia operativa que ganamos es inigualable. La limpieza finalmente está sincronizada con la recepción." }
        ]
      },
      {
        id: 'drivers-saas',
        name: "SaaS para Conductores",
        tagline: 'La Plataforma Definitiva de Gestión de Flotas y Conductores',
        description: 'Plataforma avanzada de gestión de flotas y coordinación de conductores. Optimiza rutas, rastrea el rendimiento y gestiona pagos para empresas de logística y transporte.',
        fullDescription: 'Gestionar una flota distribuida de conductores es complejo. Drivers SaaS simplifica esto proporcionando una aplicación móvil dedicada para conductores y un potente centro de mando para despachadores.\n\nNos centramos en la retención de conductores a través de informes de ganancias transparentes y métricas de rendimiento gamificadas. Para el negocio, ofrecemos conocimientos profundos sobre la eficiencia de las rutas, el consumo de combustible y los tiempos de entrega, ayudando a las empresas de logística a exprimir cada bit de eficiencia de sus operaciones.',
        category: 'Logística',
        features: [
          'Rastreo GPS en tiempo real',
          'Optimización Inteligente de Rutas',
          'Prueba Digital de Entrega',
          'Billetera de Conductor y Pagos Instantáneos',
          'Alertas de Mantenimiento de Vehículos',
          'Programación de Turnos y Cumplimiento',
          'Chat en la App y Soporte',
          'Panel de Análisis de Rendimiento'
        ],
        image: driverImg,
        rating: 4.8,
        testimonials: [
          { name: "David Rodriguez", role: "Gerente de Ops, FastLogistics", text: "Nuestros tiempos de entrega bajaron un 15% gracias a las características de optimización de rutas." },
          { name: "Elena Volkov", role: "CEO, CityCouriers", text: "A los conductores les encanta la app. Es limpia, rápida y les pagan más rápido. La retención está en su punto más alto." }
        ]
      },
      {
        id: 'kds-system',
        name: 'Sistema de Pantalla de Cocina (KDS)',
        tagline: 'Cocinas Sin Caos para Restaurantes de Alto Volumen',
        description: 'Gestión digital de pedidos que reemplaza los tickets de papel.',
        fullDescription: 'La cocina es el corazón de cualquier restaurante, pero a menudo es el más caótico. Nuestro KDS pone orden en el caos digitalizando los flujos de pedidos. Los pedidos del POS, aplicaciones de pedidos en línea y quioscos aparecen instantáneamente en las pantallas de la cocina.\n\nCon características como recuentos de "todo el día", tickets codificados por colores para largos tiempos de espera y enrutamiento de estaciones (enviando bebidas al bar, filetes a la parrilla), tu equipo de cocina puede concentrarse en cocinar en lugar de descifrar la escritura a mano.',
        category: 'Tecnología Alimentaria',
        features: [
          'Gestión de Tiempos de Espera',
          'Alertas de Prioridad Codificadas por Colores',
          'Enrutamiento Específico por Estación',
          'Recuperar Pedidos Eliminados',
          'Modo Expo para Empaquetado',
          'Integración de Visor de Recetas',
          'Análisis de Tiempo Promedio de Cocción',
          'Agnóstico de Hardware (funciona en tabletas/pantallas)'
        ],
        image: kdfImg,
        rating: 4.9,
        testimonials: [
          { name: "Chef Gordon", role: "Chef Principal, Bistro 42", text: "No más tickets perdidos. La pantalla de expo es un salvavidas durante la hora pico del viernes por la noche." },
          { name: "Lisa Wong", role: "Propietaria, Noodle Bar", text: "La integración con UberEats y DoorDash directamente al KDS nos ahorró el trabajo de dos miembros del personal." }
        ]
      },
      {
        id: 'real-estate-crm',
        name: 'Software Inmobiliario',
        tagline: 'Cierra Más Tratos con Gestión Inteligente de Propiedades',
        description: 'Un CRM todo en uno y solución de gestión de propiedades para agencias inmobiliarias. Gestiona listados, clientes potenciales, visitas y contratos de manera eficiente.',
        fullDescription: 'En bienes raíces, el tiempo lo es todo. Nuestro Software Inmobiliario asegura que nunca pierdas un cliente potencial. Captura automáticamente consultas de portales como Zillow y Realtor.com y las asigna a los agentes al instante.\n\nMás allá de los clientes potenciales, gestiona todo tu inventario de propiedades con galerías de alta resolución, recorridos virtuales y generación automatizada de folletos. El módulo de gestión de contratos maneja firmas electrónicas y cumplimiento, haciendo que el proceso de cierre sea fluido y sin papel.',
        category: 'Bienes Raíces',
        features: [
          'Asignación Automatizada de Clientes Potenciales',
          'Sindicación de Portales de Propiedades',
          'Alojamiento de Recorridos Virtuales',
          'Integración de Firma Electrónica',
          'Seguimiento de Comisiones',
          'Portal de Clientes para Visitas',
          'App de Registro de Puertas Abiertas',
          'Informes de Análisis de Mercado'
        ],
        image: realEstateImg,
        rating: 4.7,
        testimonials: [
          { name: "James Sterling", role: "Corredor, Prime Estates", text: "The automation is increíble. Se siente como tener un asistente personal para cada agente." },
          { name: "Maria Garcia", role: "Agente, Sunny Homes", text: "A mis clientes les encanta el portal donde pueden ver comentarios sobre las visitas a sus propiedades al instante." }
        ]
      },
      {
        id: 'custom-services',
        name: 'Servicios de Software Personalizado',
        tagline: 'Tu Visión, Diseñada a la Perfección',
        description: 'Desarrollo de software a medida para desafíos únicos.',
        fullDescription: 'A veces el software comercial no es suficiente. Ahí es donde brilla True North Tech. Nos asociamos con clientes nacionales e internacionales para construir soluciones de software personalizadas.\n\nDesde la modernización de sistemas heredados hasta la construcción de productos SaaS completamente nuevos desde cero, nuestro equipo sigue metodologías ágiles para entregar valor rápidamente. Manejamos todo el ciclo de vida: descubrimiento, diseño, desarrollo, pruebas, implementación y mantenimiento continuo.',
        category: 'Servicios',
        features: [
          'Desarrollo de Apps Web y Móviles',
          'Infraestructura en la Nube (AWS/Azure)',
          'Desarrollo e Integración de API',
          'Diseño UI/UX',
          'DevOps y Tuberías CI/CD',
          'QA y Pruebas Automatizadas',
          'Arquitectura de Bases de Datos',
          'Auditorías de Seguridad'
        ],
        image: customSoftwareServices,
        rating: 5,
        testimonials: [
          { name: "Robert Fox", role: "CTO, Fintech Startup", text: "True North Tech actuó como nuestro equipo de ingeniería interno. La calidad del código es de clase mundial." },
          { name: "Amanda Low", role: "VP Ops, Logistics Co", text: "Entendieron nuestra compleja lógica de negocio más rápido que cualquier otro proveedor con el que hemos trabajado." }
        ]
      },
            {
        id: 'funeral-management',
        name: 'Sistema de Gestión Funeraria',
        tagline: 'Moderniza la Administración de Funerarias con Empatía y Eficiencia',
        description:
          'Plataforma integral para funerarias. Gestiona servicios, registros de clientes, pagos, inventario y coordinación de ceremonias en un solo sistema.',
        fullDescription:
          'Los servicios funerarios requieren sensibilidad y excelencia operativa. Nuestro Sistema de Gestión Funeraria está diseñado para ayudar a las funerarias a administrar cada etapa del proceso con profesionalismo, claridad y cuidado.\n\nDesde el registro inicial de las familias y la planificación de ceremonias hasta el control de pagos, coordinación del personal y documentación memorial, esta plataforma permite que los directores funerarios se enfoquen en lo más importante: acompañar a las familias en momentos difíciles.\n\nConstruido con escalabilidad y seguridad en mente, el sistema soporta múltiples sedes, integra memoriales digitales y ofrece reportes completos para cumplimiento y control financiero.',
        category: 'Servicios Funerarios',
        features: [
          'Gestión de Registros de Familias y Clientes',
          'Programación de Servicios y Planificación de Ceremonias',
          'Integración con Memoriales Digitales',
          'Control de Inventario y Ataúdes',
          'Facturación, Pagos y Cobros',
          'Asignación de Personal y Gestión de Tareas',
          'Documentación Legal y Reportes de Cumplimiento',
          'Soporte Multi-Sede para Redes Funerarias'
        ],
        image: funeralManagementImg,
        rating: 4.9,
        testimonials: [
          {
            name: "María Fernández",
            role: "Directora, Funeraria Paz Eterna",
            text: "Este sistema mejoró completamente nuestra organización. Todo es más claro, respetuoso y eficiente."
          },
          {
            name: "Carlos Ramírez",
            role: "Gerente Operativo, Memorial Group",
            text: "El soporte para múltiples sedes y los reportes nos ayudaron a crecer sin perder control."
          }
        ]
      }
    ]
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return readStoredLanguage() || "es";
  });

  useEffect(() => {
    setCookie(LANGUAGE_COOKIE, language, { days: 365, sameSite: "Lax" });
    try {
      localStorage.setItem("language", language);
    } catch (error) {
      // Ignore storage errors (private mode, blocked storage, etc.)
    }
  }, [language]);

  useEffect(() => {
    const stored = readStoredLanguage();
    if (stored) return;

    let cancelled = false;

    const detectLanguage = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) throw new Error("Geo lookup failed");
        const data = await response.json();
        const countryCode = (data?.country_code || "").toUpperCase();
        const detected = SPANISH_COUNTRY_CODES.has(countryCode) ? "es" : "en";
        if (!cancelled) setLanguage(detected);
      } catch (error) {
        // Keep current language if detection fails
      }
    };

    detectLanguage();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
