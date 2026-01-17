import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/next";
import TopRibbon from "@/components/ui/Topribbion";

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

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://citizenimf.com"),
  title: {
    default: "Citizen IMF | Health Insurance & Investment Plans in India",
    template: "%s | Citizen IMF",
  },
  description:
    "Citizen IMF provides comprehensive health insurance, life coverage, motor insurance, and smart investment plans across India. Get personalized quotes and expert financial advice to secure your future.",
  keywords: [
    "health insurance India",
    "investment plans",
    "life insurance",
    "motor insurance",
    "two wheeler insurance",
    "four wheeler insurance",
    "Citizen IMF",
    "financial planning",
    "insurance advisor",
    "mutual funds",
    "pension plans",
    "child plans",
    "business insurance",
    "travel insurance",
    "personal accident insurance",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Citizen IMF | Health Insurance & Investment Plans in India",
    description:
      "Secure your future with Citizen IMF. Comprehensive insurance solutions and investment plans tailored for Indian families and businesses.",
    url: "https://citizenimf.com",
    siteName: "Citizen IMF",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Citizen IMF - Insurance and Investment Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citizen IMF | Insurance & Investment Solutions",
    description:
      "Comprehensive insurance and investment plans for Indian families and businesses.",
    images: ["/logo.png"],
    creator: "@citizenimf",
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
    google: "your-google-verification-code", // replace with real Search Console code
  },
  category: "Finance and Insurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://citizenimf.com" />

        {/* Theme color */}
        <meta name="theme-color" content="#0891b2" />
        <meta name="msapplication-TileColor" content="#0891b2" />

        {/* Preconnect fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured data (Organization schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Citizen IMF",
              url: "https://citizenimf.com",
              logo: "https://citizenimf.com/logo.png",
              description:
                "Comprehensive insurance and investment solutions for Indian families and businesses",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://facebook.com/citizenimf",
                "https://twitter.com/citizenimf",
                "https://linkedin.com/company/citizenimf",
              ],
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
