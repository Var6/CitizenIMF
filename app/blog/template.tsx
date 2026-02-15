"use client";

import { motion } from "motion/react";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBlogPostingSchema, generateBreadcrumbSchema } from "@/lib/schema";
import Link from "next/link";

/**
 * BLOG POST TEMPLATE
 * Replace [TITLE], [SLUG], [DATE], [CONTENT] with actual content
 * This template includes:
 * - SEO metadata
 * - Schema markup (BlogPosting + BreadcrumbList)
 * - Breadcrumb navigation
 * - Internal linking
 * - Related articles
 */

const POST_DATA = {
  title: "[ARTICLE_TITLE]",
  slug: "[article-slug]",
  description:
    "[Meta description - 155-160 characters describing the article]",
  author: "Citizen IMF",
  date: "[YYYY-MM-DD]",
  dateModified: "[YYYY-MM-DD]",
  category: "[Category]",
  readTime: "[X min]",
  image: "/blog-image.png",
  keywords: ["keyword1", "keyword2", "keyword3"],
};

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: `${POST_DATA.title} | Citizen IMF Blog`,
    description: POST_DATA.description,
    path: `/blog/${POST_DATA.slug}`,
    keywords: POST_DATA.keywords,
    image: POST_DATA.image,
    type: "article",
    author: POST_DATA.author,
  });
}

export default function BlogPostPage() {
  const schemaData = {
    blogPostingSchema: generateBlogPostingSchema({
      title: POST_DATA.title,
      description: POST_DATA.description,
      image: POST_DATA.image,
      datePublished: POST_DATA.date,
      dateModified: POST_DATA.dateModified,
      author: POST_DATA.author,
      url: `https://citizenimf.com/blog/${POST_DATA.slug}`,
      content: "[Full article content goes here]",
    }),
    breadcrumbSchema: generateBreadcrumbSchema([
      { name: "Home", url: "https://citizenimf.com" },
      { name: "Blog", url: "https://citizenimf.com/blog" },
      {
        name: POST_DATA.title,
        url: `https://citizenimf.com/blog/${POST_DATA.slug}`,
      },
    ]),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData.blogPostingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData.breadcrumbSchema),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-white py-4 px-6 border-b">
        <div className="max-w-4xl mx-auto text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">→</span>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Blog
          </Link>
          <span className="mx-2 text-gray-400">→</span>
          <span className="text-gray-600">{POST_DATA.title}</span>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto py-16 px-6">
        {/* Meta Info */}
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded mb-4">
            {POST_DATA.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {POST_DATA.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{POST_DATA.description}</p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span>✍️</span>
              <span>By {POST_DATA.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{new Date(POST_DATA.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🕐</span>
              <span>{POST_DATA.readTime} read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg flex items-center justify-center">
          <img
            src={POST_DATA.image}
            alt={POST_DATA.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Table of Contents */}
        <div className="mb-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-lg font-bold mb-4">Quick Table of Contents</h3>
          <ul className="space-y-2">
            <li>
              <a href="#section-1" className="text-blue-600 hover:underline">
                1. Introduction
              </a>
            </li>
            <li>
              <a href="#section-2" className="text-blue-600 hover:underline">
                2. Key Points
              </a>
            </li>
            <li>
              <a href="#section-3" className="text-blue-600 hover:underline">
                3. How to Implement
              </a>
            </li>
            <li>
              <a href="#section-4" className="text-blue-600 hover:underline">
                4. FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose max-w-none mb-12">
          <section id="section-1" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              [Replace with article introduction paragraph]
            </p>
          </section>

          <section id="section-2" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Key Points</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              [Replace with main article content]
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">▪</span>
                <span className="text-gray-700">[Key point 1]</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">▪</span>
                <span className="text-gray-700">[Key point 2]</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">▪</span>
                <span className="text-gray-700">[Key point 3]</span>
              </li>
            </ul>
          </section>

          <section id="section-3" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">How to Implement</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              [Step-by-step implementation guide]
            </p>
          </section>

          <section id="section-4" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  Q: [Question 1]?
                </h4>
                <p className="text-gray-700">[Answer to question 1]</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  Q: [Question 2]?
                </h4>
                <p className="text-gray-700">[Answer to question 2]</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              [Conclusion paragraph summarizing key takeaways]
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="my-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Insured?</h3>
          <p className="mb-6 opacity-90">
            Get a free quote for health insurance in Patna
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Author Bio */}
        <div className="mb-12 p-6 bg-gray-100 rounded-lg">
          <div className="flex gap-4">
            <div className="text-5xl">👤</div>
            <div>
              <h4 className="text-lg font-bold mb-2">{POST_DATA.author}</h4>
              <p className="text-gray-700">
                Insurance and financial advisory expert with 10+ years of
                experience helping families in Patna and Bihar find the best
                insurance solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mb-12 py-6 border-y border-gray-300">
          <h4 className="font-bold mb-4">Share This Article</h4>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Facebook
            </button>
            <button className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition">
              Twitter
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
              Pinterest
            </button>
            <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
              LinkedIn
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((idx) => (
              <Link
                key={idx}
                href="#"
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-40 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-4xl group-hover:scale-110 transition">
                  📄
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition mb-2">
                    Related Article Title {idx}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Brief description of the related article...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
