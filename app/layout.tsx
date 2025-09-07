import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/Footer";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO + social sharing
export const metadata: Metadata = {
  title: "Citizen IMF | Health Insurance & Investment Plans",
  description:
    "Citizen IMF provides trusted health insurance, life coverage, and smart investment plans to secure your future. Explore affordable policies tailored for you.",
  keywords: [
    "health insurance",
    "investment plans",
    "life insurance",
    "Citizen IMF",
    "financial planning",
    "secure future",
  ],
  icons: {
    icon: "/logo.png", // Place your logo in /public/logo.png
  },
  openGraph: {
    title: "Citizen IMF | Health Insurance & Investment Plans",
    description:
      "Secure your future with Citizen IMF. Health insurance, life coverage, and investment solutions tailored for your needs.",
    url: "https://citizenimf.com",
    siteName: "Citizen IMF",
    images: [
      {
        url: "/logo.png", // Can replace with a banner later
        width: 500,
        height: 500,
        alt: "Citizen IMF Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Title bar logo */}
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
