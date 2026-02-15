"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function HealthInsuranceHeroSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Health Insurance in Patna
        </h1>
        <p className="text-lg md:text-xl opacity-95 mb-6">
          Affordable & Comprehensive Coverage for Your Family
        </p>
        <p className="text-sm opacity-90 mb-8">
          Compare 15+ Plans | Coverage from ₹1-50 Lakhs | Instant Approvals | Save Up to 40% on Premiums
        </p>
      </motion.div>
    </section>
  );
}

export function HealthInsuranceFeatures() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Why Choose Health Insurance From Citizen IMF?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Best Pricing",
              description: "Get the lowest premium for the coverage you need. Our agents compare all plans.",
            },
            {
              title: "Expert Guidance",
              description: "Confused about which plan to choose? Our insurance experts will help you decide.",
            },
            {
              title: "Easy Claims",
              description: "Simple claim process. We assist you in filing and settling claims quickly.",
            },
            {
              title: "Network Hospitals",
              description: "Cashless treatment at 10,000+ network hospitals across Patna and India.",
            },
            {
              title: "Quick Processing",
              description: "Policy approved in 24 hours. Start coverage immediately after approval.",
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock customer service in Hindi and English. Call or WhatsApp anytime.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HealthInsuranceCTA() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Get Your Health Insurance Quote in 2 Minutes
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Compare plans from top insurers. Get the best deal with expert assistance.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Get Free Quote
        </Link>
      </div>
    </section>
  );
}
