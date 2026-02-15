import { Metadata } from "next";
import { generatePageMetadata, PatnaInsuranceKeywords } from "@/lib/metadata";
import {
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import Link from "next/link";
import {
  MediclaimHeroSection,
  MediclaimBenefits,
  MediclaimCTA,
} from "./client";

// Generate metadata
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title:
      "Mediclaim Policy Patna - Cashless Health Insurance Plans | Citizen IMF",
    description:
      "Best mediclaim policies in Patna with cashless hospital benefits. Coverage from ₹3-25 lakhs. Compare plans, get quotes instantly. Expert guidance from Citizen IMF.",
    path: "/products/mediclaim-policy-patna",
    keywords: PatnaInsuranceKeywords.mediclaim,
    image: "/mediclaim.png",
  });
}

export default function MediclaimPolicyPatnaPage() {
  const schemaData = {
    productSchema: generateProductSchema({
      name: "Mediclaim Policy Patna",
      description:
        "Comprehensive mediclaim policies with cashless benefits at top hospitals in Patna",
      url: "https://citizenimf.com/products/mediclaim-policy-patna",
      image: "/mediclaim.png",
    }),
    faqSchema: generateFAQSchema([
      {
        question: "What is mediclaim insurance in Patna?",
        answer:
          "Mediclaim is health insurance that covers hospitalization expenses. With mediclaim policy, you get cashless treatment at network hospitals without paying upfront.",
      },
      {
        question: "What does mediclaim policy cover in Patna?",
        answer:
          "Mediclaim covers hospitalization, pre-hospitalization (30 days), post-hospitalization (60 days), day-care surgeries, maternity, organ transplant, and more. Different plans have different coverage limits.",
      },
      {
        question: "How is mediclaim premium calculated in Patna?",
        answer:
          "Premiums are based on age, sum insured, health status, and plan type. Individual policies are usually higher per person but family floaters offer better value for families in Patna.",
      },
      {
        question: "What is cashless mediclaim in Patna?",
        answer:
          "With cashless mediclaim, insurers pay hospitals directly. You don't need to pay upfront and then claim reimbursement. Just show your ID card at network hospitals in Patna.",
      },
      {
        question: "Best mediclaim policy for family in Patna?",
        answer:
          "Family floater mediclaim plans are best for families because they offer shared coverage at lower overall cost. Coverage from ₹5-25 lakh covers the entire family.",
      },
      {
        question: "How to file mediclaim claim in Patna?",
        answer:
          "Inform insurers during hospitalization. Give required documents (prescription, bill, discharge summary). Claim is processed in 30-45 days. Citizen IMF assists with the entire process.",
      },
    ]),
    breadcrumbSchema: generateBreadcrumbSchema([
      { name: "Home", url: "https://citizenimf.com" },
      { name: "Products", url: "https://citizenimf.com/products" },
      {
        name: "Mediclaim Policy Patna",
        url: "https://citizenimf.com/products/mediclaim-policy-patna",
      },
    ]),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
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
      <MediclaimHeroSection />

      {/* What is Mediclaim */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          What is Mediclaim Policy?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Key Benefits
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Cashless treatment at 10,000+ hospitals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Coverage from ₹3 lakhs to ₹25+ lakhs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>No need to pay upfront bills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Direct hospital billing by insurer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Pre and post-hospitalization coverage</span>
              </li>
            </ul>
          </div>
          <div className="bg-pink-50 p-8 rounded-lg border-l-4 border-pink-600">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              What's Covered?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">▪</span>
                <span>Hospitalization (indoor admission)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">▪</span>
                <span>Day-care surgeries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">▪</span>
                <span>Maternity and childbirth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">▪</span>
                <span>Organ transplant coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">▪</span>
                <span>Critical illness riders</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Cashless? */}
      <MediclaimBenefits />

      {/* Comparison Table */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Mediclaim Plans Available in Patna
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="border p-4 text-left">Plan Type</th>
                <th className="border p-4 text-left">Coverage</th>
                <th className="border p-4 text-left">Annual Premium</th>
                <th className="border p-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  plan: "Basic Mediclaim",
                  coverage: "₹3 Lakh",
                  premium: "₹500-1000",
                  best: "Young individuals",
                },
                {
                  plan: "Standard Mediclaim",
                  coverage: "₹5 Lakh",
                  premium: "₹1000-2000",
                  best: "Professionals",
                },
                {
                  plan: "Premium Mediclaim",
                  coverage: "₹10 Lakh",
                  premium: "₹2000-5000",
                  best: "Families",
                },
                {
                  plan: "Super Premium",
                  coverage: "₹25+ Lakh",
                  premium: "₹5000-10000",
                  best: "High-income families",
                },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border p-4">{row.plan}</td>
                  <td className="border p-4 font-semibold">{row.coverage}</td>
                  <td className="border p-4">{row.premium}/year</td>
                  <td className="border p-4">{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <MediclaimCTA />

      {/* Related Links */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            More Health Insurance Options
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/products/health-insurance-patna"
              className="text-purple-600 hover:underline flex items-center gap-2"
            >
              → Health Insurance in Patna
            </Link>
            <Link
              href="/products/family-insurance-patna"
              className="text-purple-600 hover:underline flex items-center gap-2"
            >
              → Family Insurance Patna
            </Link>
            <Link
              href="/products/health"
              className="text-purple-600 hover:underline flex items-center gap-2"
            >
              → General Health Plans
            </Link>
            <Link
              href="/blog"
              className="text-purple-600 hover:underline flex items-center gap-2"
            >
              → Insurance Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
