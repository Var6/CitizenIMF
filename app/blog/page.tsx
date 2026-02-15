import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import {
  BlogHeader,
  FeaturedArticle,
  ArticleGrid,
  NewsletterCTA,
} from "./client";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title:
      "Health Insurance Blog Patna - Expert Tips & Guides | Citizen IMF",
    description:
      "Read expert guides on health insurance in Patna. Learn about mediclaim, family insurance, policy benefits, claim process, tax benefits, and insurance tips for Bihar.",
    path: "/blog",
    keywords: [
      "health insurance blog",
      "insurance guide Patna",
      "mediclaim tips",
      "health insurance tips",
      "insurance blog India",
      "Patna insurance news",
    ],
    image: "/blog.png",
  });
}

export default function BlogPage() {
  const schemaData = {
    breadcrumbSchema: generateBreadcrumbSchema([
      { name: "Home", url: "https://citizenimf.com" },
      { name: "Blog", url: "https://citizenimf.com/blog" },
    ]),
  };

  const blogArticles = [
    {
      id: 1,
      title: "5 Reasons Why Health Insurance is Critical for Patna Families",
      excerpt:
        "Healthcare costs are rising. Here are 5 compelling reasons why every Patna family should have health insurance...",
      category: "Health Insurance",
      date: "Feb 12, 2025",
      readTime: "5 min",
      image: "💡",
    },
    {
      id: 2,
      title: "Complete Guide to Mediclaim vs Regular Health Insurance",
      excerpt:
        "Confused between mediclaim and health insurance? Learn the key differences and choose what's best for you.",
      category: "Mediclaim",
      date: "Feb 10, 2025",
      readTime: "8 min",
      image: "📊",
    },
    {
      id: 3,
      title: "Family Insurance in Patna: Save 40% vs Individual Policies",
      excerpt:
        "How family floater policies help Patna families save money while maintaining comprehensive coverage.",
      category: "Family Insurance",
      date: "Feb 8, 2025",
      readTime: "6 min",
      image: "👨‍👩‍👧‍👦",
    },
    {
      id: 4,
      title: "Tax Benefits of Health Insurance: Section 80D Explained",
      excerpt:
        "Save up to ₹50,000 annually with health insurance tax deductions. Complete guide for Bihar residents.",
      category: "Tax Planning",
      date: "Feb 5, 2025",
      readTime: "7 min",
      image: "📋",
    },
    {
      id: 5,
      title: "How to File Health Insurance Claims: Step-by-Step Guide",
      excerpt:
        "Simplify the health insurance claim process with our comprehensive guide for Patna policyholders.",
      category: "Claims",
      date: "Feb 1, 2025",
      readTime: "9 min",
      image: "📝",
    },
    {
      id: 6,
      title: "Best Network Hospitals in Patna for Cashless Treatment",
      excerpt:
        "Discover the top 50 network hospitals in Patna where you get cashless mediclaim treatment.",
      category: "Network Hospitals",
      date: "Jan 28, 2025",
      readTime: "6 min",
      image: "🏥",
    },
  ];

  const categories = [
    { name: "All Articles", count: 24 },
    { name: "Health Insurance", count: 8 },
    { name: "Mediclaim", count: 6 },
    { name: "Family Insurance", count: 5 },
    { name: "Claims", count: 3 },
    { name: "Tax Planning", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData.breadcrumbSchema),
        }}
      />

      {/* Header */}
      <BlogHeader />

      {/* Categories */}
      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full transition ${
                  idx === 0
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name}
                <span className="ml-2 text-sm opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <FeaturedArticle />

      {/* Article Grid */}
      <ArticleGrid blogArticles={blogArticles} />

      {/* Newsletter CTA */}
      <NewsletterCTA />

      {/* Related Links */}
      <section className="py-12 px-6 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Explore Insurance Products
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/products/health-insurance-patna"
              className="text-indigo-600 hover:underline flex items-center gap-2"
            >
              → Health Insurance in Patna
            </Link>
            <Link
              href="/products/mediclaim-policy-patna"
              className="text-indigo-600 hover:underline flex items-center gap-2"
            >
              → Mediclaim Policy Patna
            </Link>
            <Link
              href="/products/family-insurance-patna"
              className="text-indigo-600 hover:underline flex items-center gap-2"
            >
              → Family Insurance Patna
            </Link>
            <Link
              href="/contact"
              className="text-indigo-600 hover:underline flex items-center gap-2"
            >
              → Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
