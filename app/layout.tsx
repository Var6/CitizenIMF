import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/next";
import TopRibbon from "@/components/ui/Topribbion";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
} from "@/lib/schema";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata - Optimized for Patna and local search
export const metadata: Metadata = {
  metadataBase: new URL("https://citizenimf.com"),
  title: {
    default:
      "Citizen IMF | Affordable Health Insurance in Patna, Bihar | Best Mediclaim Plans",
    template: "%s | Citizen IMF - Health Insurance Patna",
  },
  description:
    "Citizen IMF is your trusted health insurance advisor in Patna. Get affordable mediclaim policies, family health insurance, and group coverage with 24/7 claim support. Best health insurance plans in Bihar.",
  keywords: [
    "health insurance Patna",
    "health insurance in Patna",
    "mediclaim policy Patna",
    "family insurance Patna",
    "affordable health insurance Patna",
    "best health insurance Patna",
    "health insurance Patna Bihar",
    "insurance advisor Patna",
    "insurance broker Patna",
    "cashless mediclaim Patna",
    "group health insurance Patna",
    "individual mediclaim Patna",
    "health insurance plans Patna",
    "policy renewal Patna",
    "insurance claim Patna",
    "Citizen IMF",
    "financial planning Patna",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title:
      "Citizen IMF | Affordable Health Insurance Plans in Patna & Bihar",
    description:
      "Get best health insurance plans in Patna with Citizen IMF. Affordable mediclaim, family insurance, and personalized coverage options. 24/7 customer support.",
    url: "https://citizenimf.com",
    siteName: "Citizen IMF",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Citizen IMF - Health Insurance Patna",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Health Insurance in Patna | Citizen IMF - Mediclaim & Family Plans",
    description:
      "Affordable health insurance, mediclaim policies, and family coverage in Patna. Get quotes in minutes with expert guidance from Citizen IMF.",
    images: ["/logo.png"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-code",
  },
  category: "Finance and Insurance",
  manifest: "/manifest.json",
  other: {
    "geo.placename": "Patna, Bihar, India",
    "geo.region": "IN-BR",
    "ICBM": "25.5941, 85.1376",
    "DC.title": "Health Insurance in Patna",
    "DC.creator": "Citizen IMF",
    "DC.subject": "Health Insurance, Mediclaim, Patna",
    "DC.description":
      "Affordable health insurance and mediclaim services in Patna",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Preconnect fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://citizenimf.com" />

        {/* Alternative language versions */}
        <link
          rel="alternate"
          hrefLang="en-IN"
          href="https://citizenimf.com"
        />
        <link
          rel="alternate"
          hrefLang="hi-IN"
          href="https://citizenimf.com?lang=hi"
        />

        {/* Theme color */}
        <meta name="theme-color" content="#0891b2" />
        <meta name="msapplication-TileColor" content="#0891b2" />

        {/* Geo-targeting */}
        <meta name="geo.placename" content="Patna, Bihar, India" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="ICBM" content="25.5941, 85.1376" />

        {/* Additional meta tags for search and AI */}
        <meta
          name="article:publisher"
          content="https://www.facebook.com/citizenimf"
        />
        <meta name="format-detection" content="telephone=no" />

        {/* LocalBusiness Schema - Primary schema for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />

        {/* WebSite schema for site search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Citizen IMF",
              url: "https://citizenimf.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://citizenimf.com/search?q={search_term_string}",
                },
                query_input: "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TopRibbon/>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
