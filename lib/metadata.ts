import { Metadata } from "next";

/**
 * SEO Metadata utilities for dynamic page generation
 * Optimized for Patna-based health insurance keywords
 */

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  locale?: string;
  author?: string;
}

const BASE_URL = "https://citizenimf.com";
const DEFAULT_IMAGE = "/logo.png";

/**
 * Generate consistent metadata for any page
 */
export function generatePageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  keywords = [],
  type = "website",
  locale = "en_IN",
  author = "Citizen IMF",
}: PageMetadataParams): Metadata {
  const fullUrl = `${BASE_URL}${path}`;

  const defaultKeywords = [
    "health insurance",
    "insurance Patna",
    "mediclaim",
    "family insurance",
    "affordable health insurance",
    "insurance advisor Bihar",
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      absolute: title,
    },
    description,
    keywords: allKeywords,
    alternates: {
      canonical: fullUrl,
      languages: {
        "en-IN": `${fullUrl}?lang=en`,
        "hi-IN": `${fullUrl}?lang=hi`,
      },
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: type as "website" | "article",
      siteName: "Citizen IMF",
      locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@citizenimf",
      site: "@citizenimf",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    appLinks: {
      ios: {
        app_store_id: "123456789",
        app_name: "Citizen IMF",
        url: `https://citizenimf.com${path}`,
      },
      android: {
        package: "com.citizenimf",
        app_name: "Citizen IMF",
        url: `https://citizenimf.com${path}`,
      },
    },
    other: {
      canonical: fullUrl,
      "geo.placename": "Patna, Bihar, India",
      "geo.region": "IN-BR",
      "ICBM": "25.5941, 85.1376",
      "twitter:url": fullUrl,
      "twitter:label1": "Written by",
      "twitter:data1": author,
    },
  };
}

/**
 * Keywords for Patna-based health insurance searches
 */
export const PatnaInsuranceKeywords = {
  healthInsurance: [
    "health insurance in Patna",
    "health insurance Patna Bihar",
    "best health insurance Patna",
    "affordable health insurance Patna",
    "group health insurance Patna",
    "senior citizen health insurance Patna",
    "family health insurance Patna",
    "individual health insurance Patna",
  ],
  mediclaim: [
    "mediclaim policy Patna",
    "mediclaim Patna Bihar",
    "mediclaim insurance Patna",
    "mediclaim policy Patna cost",
    "mediclaim coverage Patna",
    "best mediclaim policy Patna",
    "cashless mediclaim Patna",
  ],
  familyInsurance: [
    "family insurance Patna",
    "family health insurance Patna",
    "family mediclaim Patna",
    "family insurance plan Patna",
    "family coverage Patna",
    "family floater insurance Patna",
    "affordable family insurance Patna",
  ],
  localVariations: [
    "insurance near me Patna",
    "insurance agent Patna",
    "insurance broker Patna",
    "health insurance quotes Patna",
    "insurance comparison Patna",
    "insurance premium Patna",
    "policy renewal Patna",
    "claim process Patna",
  ],
};

/**
 * City-specific metadata enrichment
 */
export const PatnaMetadata = {
  location: "Patna, Bihar, India",
  coordinates: { latitude: 25.5941, longitude: 85.1376 },
  region: "Bihar",
  country: "India",
  timezone: "IST",
  population: "1.7 million",
  description:
    "Capital city of Bihar with growing demand for affordable health insurance services",
};

/**
 * Generate FAQ metadata for Patna-specific questions
 */
export function generatePatnaFAQMetadata() {
  return {
    faqs: [
      {
        question: "What is the best health insurance plan in Patna?",
        answer:
          "The best health insurance plan depends on your age, family size, and medical needs. Citizen IMF specializes in providing affordable plans tailored for Patna residents with comprehensive coverage.",
      },
      {
        question: "How much does health insurance cost in Patna?",
        answer:
          "Health insurance premiums in Patna range from ₹500 to ₹50,000+ per year depending on coverage amount, age, and family size. Citizen IMF offers competitive quotes.",
      },
      {
        question: "What is mediclaim insurance in Patna?",
        answer:
          "Mediclaim is cashless health insurance that covers hospitalization expenses. In Patna, many insurers offer mediclaim with network hospitals available.",
      },
      {
        question: "Is family insurance worth it in Patna?",
        answer:
          "Yes, family insurance provides coverage for all family members with a single policy. It's more cost-effective than individual policies for families in Patna.",
      },
      {
        question:
          "How to renew health insurance policy in Patna with Citizen IMF?",
        answer:
          "You can renew your policy online, via phone, or visit our office. We make the renewal process quick and hassle-free in Patna.",
      },
    ],
  };
}

/**
 * Structured data for breadcrumb navigation
 */
export function getBreadcrumbs(currentPage: string) {
  const breadcrumbMap: Record<string, Array<{ name: string; url: string }>> = {
    "health-insurance-patna": [
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      { name: "Health Insurance in Patna", url: "/products/health-insurance-patna" },
    ],
    "mediclaim-policy-patna": [
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      { name: "Mediclaim Policy Patna", url: "/products/mediclaim-policy-patna" },
    ],
    "family-insurance-patna": [
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      { name: "Family Insurance Patna", url: "/products/family-insurance-patna" },
    ],
    blog: [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
    ],
  };

  return breadcrumbMap[currentPage] || [{ name: "Home", url: "/" }];
}
