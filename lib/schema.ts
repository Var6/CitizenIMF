// lib/schema.ts

/**
 * Generate LocalBusiness schema for Patna-based insurance company
 * Optimized for local SEO and AI search engines
 */
export function generateLocalBusinessSchema(overrides?: Record<string, any>) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://citizenimf.com",
    name: "Citizen IMF",
    description:
      "Affordable health insurance and financial advisory services in Patna",
    url: "https://citizenimf.com",
    sameAs: [
      "https://www.facebook.com/citizenimf",
      "https://www.twitter.com/citizenimf",
      "https://www.linkedin.com/company/citizenimf",
    ],
    logo: {
      "@type": "ImageObject",
      url: "https://citizenimf.com/logo.png",
      width: 300,
      height: 300,
    },
    image: "https://citizenimf.com/logo.png",
    priceRange: "₹500-₹50000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Patna, Bihar",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.5941,
      longitude: 85.1376,
    },
    areaServed: {
      "@type": "City",
      name: "Patna",
      state: "Bihar",
      country: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-XXXXXXXXXX",
      availableLanguage: ["en", "hi"],
    },
    serviceArea: {
      "@type": "City",
      name: "Patna",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Health Insurance in Patna",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mediclaim Policy Patna",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Family Insurance Patna",
        },
      },
    ],
    ...overrides,
  };
}

/**
 * Generate Organization schema with enriched data
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Citizen IMF",
    url: "https://citizenimf.com",
    logo: "https://citizenimf.com/logo.png",
    description:
      "Insurance and Marketing Advisory Firm specializing in affordable health insurance solutions in Patna",
    foundingDate: "2020",
    foundingLocation: "Patna, Bihar, India",
    sameAs: [
      "https://www.facebook.com/citizenimf",
      "https://www.twitter.com/citizenimf",
      "https://www.linkedin.com/company/citizenimf",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-XXXXXXXXXX",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Patna, Bihar",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800001",
      addressCountry: "IN",
    },
  };
}

/**
 * Generate Product schema for insurance products
 */
export function generateProductSchema({
  name,
  description,
  url,
  image,
  brand = "Citizen IMF",
  category = "Insurance",
  offers = [],
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  brand?: string;
  category?: string;
  offers?: any[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    category,
    offers:
      offers.length > 0
        ? offers
        : [
            {
              "@type": "Offer",
              url,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };
}

/**
 * Generate FAQPage schema with Patna-focused questions
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BlogPosting schema for blog articles
 */
export function generateBlogPostingSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = "Citizen IMF",
  url,
  content,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  url: string;
  content: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://citizenimf.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Citizen IMF",
      logo: {
        "@type": "ImageObject",
        url: "https://citizenimf.com/logo.png",
        width: 300,
        height: 300,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleBody: content,
  };
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
}

/**
 * Generate ServiceArea schema highlighting Patna coverage
 */
export function generateServiceAreaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Health Insurance Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Citizen IMF",
      url: "https://citizenimf.com",
    },
    areaServed: {
      "@type": "City",
      name: "Patna",
      state: "Bihar",
      country: "India",
    },
    availableLanguage: ["en", "hi"],
  };
}
