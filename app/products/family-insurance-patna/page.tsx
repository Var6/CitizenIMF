// @ts-nocheck
import {
  FamilyInsuranceHeroSection,
  FamilyInsuranceFeatures,
  FamilyInsuranceCTA,
  FamilyInsurancePlans,
  FamilyInsuranceSteps,
  FamilyInsuranceComparison,
} from "./client";
import { Metadata } from "next";
import { generatePageMetadata, PatnaInsuranceKeywords } from "@/lib/metadata";
import {
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import Link from "next/link";


// Generate metadata
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Family Insurance Patna",
    description: "Comprehensive family insurance plans covering all family members with single policy",
    keywords: PatnaInsuranceKeywords.familyInsurance,
    path: "/products/family-insurance-patna",
    image: "/family-insurance.png",
  });
}

export default function FamilyInsurancePatnaPage() {
  const schemaData = {
    productSchema: generateProductSchema({
      name: "Family Insurance Patna",
      description:
        "Comprehensive family insurance plans covering all family members with single policy",
      url: "https://citizenimf.com/products/family-insurance-patna",
      image: "/family-insurance.png",
    }),
    faqSchema: generateFAQSchema([
      {
        question: "Is family insurance cheaper than individual policies in Patna?",
        answer:
          "Yes! Family floater plans are 30-40% cheaper than buying individual policies. One policy covers all family members (typically up to 5) at lower cost.",
      },
      {
        question:
          "What is family floater health insurance in Patna?",
        answer:
          "Family floater policy provides shared coverage for the entire family. Everyone gets the same sum insured (₹5-25 lakh) from one pool. If one person uses it, it reduces for others.",
      },
      {
        question: "How many family members can be covered in Patna?",
        answer:
          "Typically 4-6 members: you, spouse, and up to 4 children (usually under 25-30 years). Senior parents can be added with separate premium.",
      },
      {
        question: "What is the claim process for family insurance in Patna?",
        answer:
          "Contact Citizen IMF or your insurer. Submit required documents. Claims are processed in 30-45 days. We assist you throughout the process.",
      },
      {
        question: "Are pre-existing diseases covered?",
        answer:
          "Yes, after a waiting period (typically 1-2 years). Some plans offer immediate coverage with higher premium.",
      },
      {
        question: "Can I add parents to my family insurance?",
        answer:
          "Yes, most plans allow adding parents with additional premium. Separate senior citizen plans are also available.",
      },
    ]),
    breadcrumbSchema: generateBreadcrumbSchema([
      { name: "Home", url: "https://citizenimf.com" },
      { name: "Products", url: "https://citizenimf.com/products" },
      {
        name: "Family Insurance Patna",
        url: "https://citizenimf.com/products/family-insurance-patna",
      },
    ]),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData.productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData.faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData.breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <FamilyInsuranceHeroSection />

      {/* Features Section */}
      <FamilyInsuranceFeatures />

      {/* CTA Section */}
      <FamilyInsuranceCTA />


      {/* Family Plans */}
      <FamilyInsurancePlans />

      {/* How to Choose */}
      <FamilyInsuranceSteps />

      {/* Comparison */}
      <FamilyInsuranceComparison />

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        {/* ...client CTA component if needed... */}
      </section>

      {/* Related Links */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Explore More Insurance Options
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/products/health-insurance-patna"
              className="text-green-600 hover:underline flex items-center gap-2"
            >
              → Health Insurance in Patna
            </Link>
            <Link
              href="/products/mediclaim-policy-patna"
              className="text-green-600 hover:underline flex items-center gap-2"
            >
              → Mediclaim Policy Patna
            </Link>
            <Link
              href="/products/health"
              className="text-green-600 hover:underline flex items-center gap-2"
            >
              → Individual Health Plans
            </Link>
            <Link
              href="/contact"
              className="text-green-600 hover:underline flex items-center gap-2"
            >
              → Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
