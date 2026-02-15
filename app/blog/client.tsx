"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function BlogHeader() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Health Insurance Blog
        </h1>
        <p className="text-lg md:text-xl opacity-95">
          Expert Tips, Guides & News on Insurance in Patna
        </p>
      </motion.div>
    </section>
  );
}

export function FeaturedArticle() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-12"
      >
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
              Featured Article
            </span>
            <h2 className="text-3xl font-bold my-4">
              Ultimate Guide to Health Insurance in Patna 2025
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Everything you need to know about choosing, comparing, and buying
              health insurance in Patna. From mediclaim to family policies to
              senior citizen coverage.
            </p>
            <Link
              href="#"
              className="inline-block bg-white text-indigo-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition"
            >
              Read Article →
            </Link>
          </div>
          <div className="text-6xl text-center">📚</div>
        </div>
      </motion.div>
    </section>
  );
}

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export function ArticleGrid({ blogArticles }: { blogArticles: BlogArticle[] }) {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogArticles.map((article, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="h-40 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-6xl group-hover:scale-110 transition">
              {article.image}
            </div>
            <div className="p-6">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                {article.category}
              </span>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function NewsletterCTA() {
  return (
    <section className="py-16 px-6 bg-indigo-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Stay Updated with Insurance News
        </h2>
        <p className="text-gray-600 mb-6">
          Get weekly tips, guides, and updates on health insurance in Patna sent
          to your inbox.
        </p>
        <form className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-0"
          />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
