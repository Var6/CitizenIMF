"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function MediclaimHeroSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mediclaim Policy in Patna
        </h1>
        <p className="text-lg md:text-xl opacity-95 mb-6">
          Cashless Health Insurance with Direct Hospital Settlement
        </p>
        <p className="text-sm opacity-90 mb-8">
          10,000+ Network Hospitals | Instant Approvals | 24/7 Assistance |
          Trusted by 50,000+ Patna Residents
        </p>
      </motion.div>
    </section>
  );
}

export function MediclaimBenefits() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Why Choose Cashless Mediclaim?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "No Upfront Payment",
              description:
                "Don't worry about paying hospital bills. Insurer settles directly with hospital.",
            },
            {
              title: "No Hassle",
              description:
                "No need to arrange funds during emergency. Just produce your ID card.",
            },
            {
              title: "Faster Processing",
              description:
                "Claims are approved and processed quickly. Get reimbursement in days, not months.",
            },
            {
              title: "Network Hospitals",
              description:
                "Treat at 10,000+ network hospitals across Patna and Bihar.",
            },
            {
              title: "24/7 Support",
              description:
                "Round-the-clock customer service. Assistance in policy and claims.",
            },
            {
              title: "Easy Claim Process",
              description:
                "Simple documentation. Citizen IMF helps with paperwork.",
            },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600"
            >
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MediclaimCTA() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Compare & Buy Mediclaim Policy Now
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Get quotes from top insurers. Choose the best plan for your needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Get Free Quote
        </Link>
      </div>
    </section>
  );
}
