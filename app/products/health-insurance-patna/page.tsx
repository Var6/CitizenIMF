import {
  HealthInsuranceHeroSection,
  HealthInsuranceFeatures,
  HealthInsuranceCTA,
} from "./client";
import { Metadata } from "next";
import { generatePageMetadata, PatnaInsuranceKeywords } from "@/lib/metadata";
import {
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import Link from "next/link";

// Generate metadata - called at server level
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title:
      "Health Insurance in Patna - Best Mediclaim Plans | Citizen IMF",
    description:
      "Get affordable health insurance in Patna with comprehensive coverage. Mediclaim plans, family policies, senior citizen coverage. Quick quotes, easy claims. Expert guidance from Citizen IMF.",
    path: "/products/health-insurance-patna",
    keywords: PatnaInsuranceKeywords.healthInsurance,
    image: "/health-insurance.png",
  });
}

  const schemaData = {
    productSchema: generateProductSchema({
      name: "Health Insurance in Patna",
      description:
        "Comprehensive and affordable health insurance plans tailored for Patna residents",
      url: "https://citizenimf.com/products/health-insurance-patna",
      image: "/health-insurance.png",
    }),
    faqSchema: generateFAQSchema([
      {
        question: "What is the best health insurance plan available in Patna?",
        answer:
          "The best plan depends on your needs. Citizen IMF offers individual, family, and senior citizen plans with coverage from ₹3 lakhs to ₹25+ lakhs. We compare plans from all major insurers to find the best fit for Patna residents.",
      },
      {
        question: "How much does health insurance cost in Patna?",
        answer:
          "Premiums in Patna start from ₹500/year for basic plans and go up to ₹50,000+/year depending on coverage, age, and family size. Individual plans are typically cheaper but family floaters offer better value.",
      },
      {
        question: "Is health insurance tax-free in Patna?",
        answer:
          "Yes! Under Section 80D of Income Tax, health insurance premiums are tax-deductible up to ₹25,000/year for individual and ₹50,000/year for family (including senior parents).",
      },
      {
        question: "What are cashless benefits in health insurance?",
        answer:
          "Cashless benefits mean you don't pay upfront at network hospitals. The insurer directly settles bills with the hospital. Citizen IMF partners with 10,000+ network hospitals across Patna and Bihar.",
      },
      {
        question: "Can I get health insurance with pre-existing conditions?",
        answer:
          "Yes! Many insurers cover pre-existing conditions after 6-12 months waiting period. Some plans offer immediate coverage with higher premiums. Citizen IMF helps find plans suitable for your health condition.",
      },
      {
        question: "What is the claim process in Patna?",
        answer:
          "Simply call the insurer or contact Citizen IMF with your policy details. Submit medical bills and documents. Most claims are processed within 30-45 days. We guide you through the entire process.",
      },
    ]),
    breadcrumbSchema: generateBreadcrumbSchema([
      { name: "Home", url: "https://citizenimf.com" },
      { name: "Products", url: "https://citizenimf.com/products" },
      {
        name: "Health Insurance Patna",
        url: "https://citizenimf.com/products/health-insurance-patna",
      },
    ]),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
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
      <HealthInsuranceHeroSection />

      {/* Benefits Section */}
      <HealthInsuranceFeatures />

      {/* Plans Overview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* ...plan cards, use client component for motion if needed... */}
        </div>
      </section>

      {/* CTA Section */}
      <HealthInsuranceCTA />

      {/* Related Links */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Related Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/products/mediclaim-policy-patna"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              → Mediclaim Policy Patna
            </Link>
            <Link
              href="/products/family-insurance-patna"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              → Family Insurance Patna
            </Link>
            <Link
              href="/products/health"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              → General Health Insurance
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              → Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Premium:</span>{" "}
                    {plan.premium}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Best For:</span>{" "}
                    {plan.best_for}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Get Your Free Health Insurance Quote Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Compare plans from all top insurers. Get quotes in 2 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get Free Quote
          </Link>
        </motion.div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Related Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/products/mediclaim-policy-patna"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              → Mediclaim Policy Patna
            </Link>
            <Link
              href="/products/family-insurance-patna"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              → Family Insurance Patna
            </Link>
            <Link
              href="/products/health"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              → General Health Insurance
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:underline flex items-center gap-2"
            >
              → Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
