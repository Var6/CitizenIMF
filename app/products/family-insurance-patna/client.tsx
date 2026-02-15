"use client";

import { motion } from "framer-motion";

export function FamilyInsurancePlans() {
  const plans = [
    {
      title: "Starter Family Plan",
      coverage: "₹5 Lakh",
      premium: "₹1500-2500/yr",
      members: "Up to 4 members",
      features: [
        "Hospitalization coverage",
        "Day-care surgeries",
        "Pre/post-hospitalization",
        "5 network hospitals in Patna",
      ],
    },
    {
      title: "Premium Family Plan",
      coverage: "₹10 Lakh",
      premium: "₹2500-4000/yr",
      members: "Up to 5 members",
      features: [
        "Everything in Starter",
        "Maternity coverage",
        "10,000+ network hospitals",
        "Trans-India coverage",
      ],
      highlight: true,
    },
    {
      title: "Super Family Plan",
      coverage: "₹25 Lakh",
      premium: "₹4000-7000/yr",
      members: "Entire family",
      features: [
        "Everything in Premium",
        "Organ transplant",
        "Ambulance benefit",
        "24/7 concierge service",
      ],
    },
  ];
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Family Insurance Plans Available in Patna
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`p-8 rounded-lg shadow-lg ${
                plan.highlight
                  ? "bg-green-600 text-white ring-2 ring-green-400 transform scale-105"
                  : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <div className="mb-6">
                <p className="text-sm opacity-75 mb-2">Sum Insured</p>
                <p className="text-3xl font-bold mb-4">{plan.coverage}</p>
                <p className="text-lg font-semibold mb-2">{plan.premium}</p>
                <p className="text-sm opacity-75">{plan.members}</p>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2">
                    <span className="font-bold text-lg">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function FamilyInsuranceSteps() {
  const steps = [
    {
      step: "1",
      title: "Assess Needs",
      description: "Consider age of family members and existing health",
    },
    {
      step: "2",
      title: "Calculate Coverage",
      description: "Factor in hospitalization costs, 5-10 lakh minimum",
    },
    {
      step: "3",
      title: "Compare Plans",
      description: "Get quotes from multiple insurers in Patna",
    },
    {
      step: "4",
      title: "Buy & Enroll",
      description: "Complete enrollment process. Start protection immediately",
    },
  ];
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        How to Choose Right Family Insurance Plan in Patna?
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              {item.step}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FamilyInsuranceComparison() {
  const rows = [
    ["Cost", "₹1500-5000/year for family", "₹500-2000/person/year"],
    ["Coverage", "Shared pool for all family", "Separate for each person"],
    ["Management", "One policy to manage", "Multiple policies"],
    ["Flexibility", "Shared coverage pool", "No sharing"],
    ["Renewal", "Single renewal", "Multiple renewals"],
    ["Best for", "Families wanting affordability", "People needing high coverage"],
  ];
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Family Floater vs Individual Policies
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-4 text-left">Aspect</th>
                <th className="p-4 text-left">Family Floater</th>
                <th className="p-4 text-left">Individual Policies</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 font-semibold">{row[0]}</td>
                  <td className="p-4">{row[1]}</td>
                  <td className="p-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


export function FamilyInsuranceHeroSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Family Insurance Patna
        </h1>
        <p className="text-lg md:text-xl opacity-95 mb-6">
          Secure your family's health with a single affordable policy
        </p>
        <p className="text-sm opacity-90 mb-8">
          10,000+ Network Hospitals | Quick Quotes | 24/7 Assistance
        </p>
      </motion.div>
    </section>
  );
}

export function FamilyInsuranceFeatures() {
  const features = [
    {
      title: "One Policy, All Covered",
      description: "Cover your spouse, kids, and parents under one plan. No need for multiple policies.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Save 40% on Premiums",
      description: "Family floater plans are cheaper than buying individual policies for each member.",
      icon: "💸",
    },
    {
      title: "Cashless Hospitals",
      description: "Access 10,000+ network hospitals for cashless treatment across India.",
      icon: "🏥",
    },
    {
      title: "Tax Benefits",
      description: "Get up to ₹50,000 tax deduction under Section 80D for family policies.",
      icon: "📋",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for claims and queries.",
      icon: "📞",
    },
    {
      title: "Easy Claims",
      description: "Simple claim process. We help you file and settle claims quickly.",
      icon: "📝",
    },
  ];
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
        Why Choose Family Insurance?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-pink-600"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function FamilyInsuranceCTA() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Get a Family Insurance Quote
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Compare plans from top insurers. Protect your loved ones today.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-pink-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Get Free Quote
        </a>
      </div>
    </section>
  );
}
