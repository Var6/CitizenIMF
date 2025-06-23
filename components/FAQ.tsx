"use client"
import { useState } from 'react'
import { motion } from "framer-motion"

type CategoryKey = 'general' | 'health' | 'motor' | 'life' | 'investment' | 'claims';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<CategoryKey, FAQItem[]> = {
  general: [
      {
        question: "What is insurance and why do I need it?",
        answer: "Insurance is a financial protection tool that helps you safeguard against unexpected events. It provides financial support during emergencies like accidents, illness, or damage to your property. Having insurance ensures you don't have to bear the entire financial burden alone."
      },
      {
        question: "How does Citizen IMF help me choose the right insurance?",
        answer: "Our certified advisors analyze your specific needs, budget, and lifestyle to recommend the most suitable insurance plans. We compare policies from 25+ insurance companies to find the best coverage at competitive prices for you."
      },
      {
        question: "Is it safe to buy insurance online through Citizen IMF?",
        answer: "Absolutely! We use bank-level security encryption for all transactions. We are a registered insurance broker with all necessary licenses. Your personal and financial information is completely secure with us."
      },
      {
        question: "What documents do I need to buy insurance?",
        answer: "Basic documents include: Identity proof (Aadhaar/PAN), Address proof, Age proof, Income proof (for life insurance), and medical reports (if required). Our team will guide you on specific requirements for each policy type."
      },
      {
        question: "Can I cancel my policy after purchase?",
        answer: "Yes, most insurance policies have a 'free look period' of 15-30 days during which you can cancel and get a full refund. After this period, cancellation terms vary by policy type and insurance company."
      }
    ],
    health: [
      {
        question: "What does health insurance cover?",
        answer: "Health insurance covers hospitalization expenses, pre and post-hospitalization costs, daycare procedures, ambulance charges, and critical illness treatment. Coverage varies by plan - our advisors will explain specific benefits of each policy."
      },
      {
        question: "Can I buy health insurance for my family?",
        answer: "Yes! We offer family floater plans that cover your entire family under one policy. This is often more cost-effective than individual policies for each family member."
      },
      {
        question: "What is the waiting period in health insurance?",
        answer: "Initial waiting period is typically 30 days for most illnesses. Pre-existing diseases have a waiting period of 2-4 years. Specific diseases like hernia, cataract may have 1-2 years waiting period."
      },
      {
        question: "Can I get cashless treatment?",
        answer: "Yes! Most of our health insurance plans offer cashless treatment at network hospitals. You just need to show your insurance card and get treatment without paying upfront."
      },
      {
        question: "What if I have pre-existing diseases?",
        answer: "You can still get health insurance with pre-existing conditions. After the waiting period (usually 2-4 years), these conditions will be covered. Some plans offer reduced waiting periods."
      }
    ],
    motor: [
      {
        question: "Is car insurance mandatory in India?",
        answer: "Yes, third-party car insurance is mandatory by law in India. Driving without valid insurance can result in fines up to ₹2,000 and/or 3 months imprisonment for first offense."
      },
      {
        question: "What's the difference between third-party and comprehensive insurance?",
        answer: "Third-party covers damages to others' property/injury. Comprehensive covers your own vehicle damage plus third-party liability. We recommend comprehensive for complete protection."
      },
      {
        question: "How is car insurance premium calculated?",
        answer: "Premium depends on car's IDV (market value), engine capacity, age, location (RTO), driver's age, claim history, and add-on covers chosen. Our calculator gives instant premium estimates."
      },
      {
        question: "What is IDV in car insurance?",
        answer: "IDV (Insured Declared Value) is your car's current market value. It's the maximum amount you'll receive if your car is stolen or totally damaged. Higher IDV means higher premium but better coverage."
      },
      {
        question: "Can I transfer my car insurance to a new owner?",
        answer: "Yes, car insurance can be transferred to the new owner when you sell your vehicle. The transfer must be completed within 14 days of vehicle sale as per motor insurance regulations."
      }
    ],
    life: [
      {
        question: "What is term insurance and why do I need it?",
        answer: "Term insurance provides pure life cover at affordable premiums. If you pass away during the policy term, your family receives the sum assured. It's essential to protect your family's financial future and replace your income."
      },
      {
        question: "How much life insurance coverage do I need?",
        answer: "A general rule is 10-15 times your annual income. Consider your family's expenses, debts, children's education costs, and future financial goals. Our advisors can help calculate the right coverage for you."
      },
      {
        question: "Can I increase my life insurance coverage later?",
        answer: "Yes, many policies offer the option to increase coverage on life events like marriage, childbirth, or income increase. Some policies also offer automatic coverage increase options."
      },
      {
        question: "What happens if I miss premium payments?",
        answer: "Most life insurance policies have a grace period of 30 days for yearly premiums and 15 days for monthly premiums. If you don't pay within the grace period, the policy may lapse but can often be revived."
      },
      {
        question: "Are life insurance premiums tax deductible?",
        answer: "Yes, life insurance premiums qualify for tax deduction up to ₹1.5 lakh under Section 80C of Income Tax Act. Death benefits are also tax-free under Section 10(10D)."
      }
    ],
    investment: [
      {
        question: "What are ULIPs and how do they work?",
        answer: "ULIPs (Unit Linked Insurance Plans) combine life insurance with investment. Part of your premium goes towards insurance coverage and the rest is invested in equity/debt funds based on your choice."
      },
      {
        question: "What is the difference between mutual funds and insurance investment plans?",
        answer: "Mutual funds are pure investment products while insurance investment plans (like ULIPs) provide both life cover and investment. Insurance plans have lock-in periods but offer tax benefits and life protection."
      },
      {
        question: "How much should I invest monthly?",
        answer: "A good rule is to invest 20-30% of your income. Start with what you can afford and gradually increase. Our financial advisors can help create a personalized investment plan based on your goals and income."
      },
      {
        question: "What is the lock-in period for investment plans?",
        answer: "Most insurance investment plans have a 5-year lock-in period. ULIPs have 5 years, while traditional plans may have longer terms. This ensures disciplined long-term wealth creation."
      },
      {
        question: "Can I withdraw money from my investment plan?",
        answer: "Partial withdrawals are allowed in most plans after the lock-in period. However, early withdrawals may have penalties and can affect your long-term wealth creation goals."
      }
    ],
    claims: [
      {
        question: "How do I file an insurance claim?",
        answer: "Contact us immediately after the incident. We'll guide you through the entire process - from documentation to settlement. You can call our 24/7 helpline or use our mobile app to initiate claims."
      },
      {
        question: "What documents are required for claim settlement?",
        answer: "Documents vary by claim type but generally include: Policy copy, claim form, medical reports (health claims), police FIR (motor claims), death certificate (life claims), and bills/receipts. We'll provide a complete checklist."
      },
      {
        question: "How long does claim settlement take?",
        answer: "Health insurance claims are typically settled within 7-30 days. Motor claims take 7-15 days for own damage and 30-45 days for third-party claims. Life insurance claims are settled within 30 days of receiving all documents."
      },
      {
        question: "What if my claim is rejected?",
        answer: "If your claim is rejected, we'll help you understand the reasons and explore options for appeal. You can also approach the Insurance Ombudsman for dispute resolution. We support you throughout the process."
      },
      {
        question: "Do I need to pay anything during cashless treatment?",
        answer: "In cashless treatment, the insurance company directly settles with the hospital. You only pay for non-covered expenses, deductibles (if any), or amounts exceeding your sum insured."
      }
    ]
  }

  // Define the available categories for filter buttons
  const categories = [
    { id: 'general' as CategoryKey, name: 'General', icon: '❓', color: 'from-blue-500 to-purple-500' },
    { id: 'health' as CategoryKey, name: 'Health', icon: '🩺', color: 'from-green-500 to-blue-500' },
    { id: 'motor' as CategoryKey, name: 'Motor', icon: '🚗', color: 'from-yellow-500 to-orange-500' },
    { id: 'life' as CategoryKey, name: 'Life', icon: '🌱', color: 'from-purple-500 to-pink-500' },
    { id: 'investment' as CategoryKey, name: 'Investment', icon: '💰', color: 'from-green-600 to-blue-600' },
    { id: 'claims' as CategoryKey, name: 'Claims', icon: '📄', color: 'from-orange-500 to-red-500' },
  ];

  // State for active category and open FAQ
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('general');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
export default function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400/10 to-orange-400/10 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant answers to common questions about insurance, investments, and our services
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setOpenFAQ(null)
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Content */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.find(cat => cat.id === activeCategory)?.name} FAQs
          </motion.h3>

          <div className="space-y-4">
            {faqData[activeCategory]?.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-4 focus:ring-blue-500/20 rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h4>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl text-blue-100 mb-6">
              Our expert advisors are here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>📞</span>
                  <span>Call +91 9031007097</span>
                </span>
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>💬</span>
                  <span>Live Chat</span>
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}