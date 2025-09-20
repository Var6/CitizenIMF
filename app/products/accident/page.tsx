'use client'

import { useState, SVGProps } from 'react'
import { motion } from "framer-motion"
import { sendEmail } from '@/lib/email';

type PlanType = 'basic' | 'comprehensive' | 'family' | 'premium';

// A simple arrow component for the FAQ
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);


export default function PersonalAccidentPage() {
  const [formData, setFormData] = useState({
    age: '',
    occupation: '',
    sumInsured: '5',
    city: '',
    name: '',
    mobile: ''
  })
  const [activeTab, setActiveTab] = useState<PlanType>('basic')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const planTypes = [
    {
      id: 'basic',
      name: 'Basic Protection',
      icon: '🛡️',
      description: 'Essential accident coverage',
      startingPrice: '₹399/year*',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive',
      icon: '🔒',
      description: 'Enhanced accident protection',
      startingPrice: '₹899/year*',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'family',
      name: 'Family Cover',
      icon: '👨‍👩‍👧‍👦',
      description: 'Protect your entire family',
      startingPrice: '₹1,599/year*',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'premium',
      name: 'Premium Plus',
      icon: '💎',
      description: 'Maximum accident coverage',
      startingPrice: '₹2,499/year*',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    {
      icon: '💰',
      title: 'Accidental Death Benefit',
      description: 'Lump sum payout to family in case of accidental death with coverage up to ₹1 crore.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🦽',
      title: 'Disability Coverage',
      description: 'Financial support for permanent or temporary disability due to accidents.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🏥',
      title: 'Medical Expenses',
      description: 'Coverage for accident-related hospitalization and medical treatment costs.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🚑',
      title: 'Emergency Transport',
      description: 'Ambulance charges and emergency transportation costs covered.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📄',
      title: 'Easy Claims',
      description: 'Simple claim process with 7-day settlement for valid claims.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '⚡',
      title: 'Instant Policy',
      description: 'Get your accident policy issued within 5 minutes online.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const companies = [
    { name: 'LIC', rating: 4.6, claimRatio: '98.2%', logo: 'https://placehold.co/120x60/d1d5db/374151?text=LIC' },
    { name: 'MaxLife', rating: 4.4, claimRatio: '96.8%', logo: 'https://placehold.co/120x60/d1d5db/374151?text=MaxLife' },
    { name: 'HDFC Life', rating: 4.3, claimRatio: '95.2%', logo: 'https://placehold.co/120x60/d1d5db/374151?text=HDFC+Life' },
    { name: 'PNB MetLife', rating: 4.2, claimRatio: '94.5%', logo: 'https://placehold.co/120x60/d1d5db/374151?text=PNB+MetLife' },
    { name: 'Niva Bupa', rating: 4.4, claimRatio: '93.8%', logo: 'https://placehold.co/120x60/d1d5db/374151?text=Niva+Bupa' },
    { name: 'Care Health', rating: 4.1, claimRatio: '92.1%', logo: 'https://placehold.co/120x60/d1d5db/374151?text=Care+Health' }
  ]

  const coverageFeatures: Record<PlanType, string[]> = {
    basic: [
      'Accidental death coverage up to ₹5 Lakhs',
      'Permanent total disability benefit',
      'Temporary total disability benefit',
      'Accident medical expenses',
      '24/7 customer support',
      'Easy online claim process'
    ],
    comprehensive: [
      'Accidental death coverage up to ₹25 Lakhs',
      'Permanent & temporary disability',
      'Partial disability coverage',
      'Enhanced medical expenses',
      'Ambulance and transport costs',
      'Daily cash allowance during hospitalization'
    ],
    family: [
      'Coverage for entire family (self, spouse, 2 kids)',
      'Individual sum insured for each member',
      'Child education benefit up to ₹5 Lakhs',
      'Family income benefit',
      'Coverage for domestic accidents',
      'Special rates for family plans'
    ],
    premium: [
      'Maximum coverage up to ₹1 Crore',
      'Global accident coverage',
      'Adventure sports coverage (optional)',
      'Funeral expense benefit',
      'Legal liability coverage',
      'Premium customer service & dedicated manager'
    ]
  }

  const steps = [
    {
      step: '01',
      title: 'Enter Details',
      description: 'Provide your age, occupation, and coverage requirements.',
      icon: '📝'
    },
    {
      step: '02',
      title: 'Compare Plans',
      description: 'Get quotes from top insurers and compare coverage.',
      icon: '🔍'
    },
    {
      step: '03',
      title: 'Select & Pay',
      description: 'Choose the best plan and make secure payment online.',
      icon: '💳'
    },
    {
      step: '04',
      title: 'Get Policy',
      description: 'Receive instant policy document via email.',
      icon: '📧'
    }
  ]
  
  const faqs = [
      {
          question: "What is personal accident insurance?",
          answer: "Personal accident insurance is a policy that provides financial compensation in the event of death, disability (permanent or temporary), or injury resulting from an accident. It helps cover medical expenses and loss of income."
      },
      {
          question: "Who should buy a personal accident policy?",
          answer: "Anyone can benefit from a personal accident policy, especially those who are the primary breadwinners for their family, work in high-risk professions, or travel frequently. It provides an extra layer of financial security beyond standard health insurance."
      },
      {
          question: "What is the difference between health and personal accident insurance?",
          answer: "Health insurance covers hospitalization and medical expenses arising from illnesses and accidents. Personal accident insurance specifically covers death or disability due to an accident, often providing a lump-sum payout, which is not typical for health insurance."
      },
      {
          question: "Is personal accident cover included in my motor insurance?",
          answer: "Yes, motor insurance in India includes a mandatory Personal Accident cover of up to ₹15 lakhs for the owner-driver. However, this only covers accidents involving the insured vehicle. A standalone personal accident policy provides much broader 24/7 coverage for any type of accident."
      },
  ]


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     try {
    await sendEmail({
      name: formData.name,
      type: window.location.href, // 🔥 send current page URL
      mobile: formData.mobile,
      city: formData.city,
    })

    alert("✅ Thank you! We will send you personal accident insurance quotes shortly.")
  } catch (error) {
    console.error("Email error:", error)
    alert("❌ Failed to send enquiry. Please try again.")
  }
}
  

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section with Form */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Personal Accident
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Insurance</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Comprehensive protection against life's unexpected accidents. Secure your family's financial future with coverage starting from just ₹399/year.
              </p>
            </motion.div>

            {/* Quote Form with better UX */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get Instant Accident Insurance Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Age */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <select
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="">Select Age</option>
                      {Array.from({ length: 48 }, (_, i) => i + 18).map(age => (
                        <option key={age} value={age}>{age} years</option>
                      ))}
                    </select>
                  </div>
                  {/* Occupation */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                    <select
                      value={formData.occupation}
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="">Select Occupation</option>
                      <option value="office-worker">Office Worker</option>
                      <option value="businessman">Businessman</option>
                      <option value="doctor">Doctor</option>
                      <option value="teacher">Teacher</option>
                      <option value="engineer">Engineer</option>
                      <option value="driver">Driver</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Sum Insured */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sum Insured</label>
                    <select
                      value={formData.sumInsured}
                      onChange={(e) => handleInputChange('sumInsured', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="5">₹5 Lakh</option>
                      <option value="10">₹10 Lakh</option>
                      <option value="25">₹25 Lakh</option>
                      <option value="50">₹50 Lakh</option>
                      <option value="100">₹1 Crore</option>
                    </select>
                  </div>
                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Enter your city"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Quotes Now
                </motion.button>
                <p className="text-center text-sm text-gray-500">
                  🔒 100% Secure • ⚡ Instant Quotes • 💯 Free Service
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plan Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-6">
                    Choose Your Personal Accident Plan
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We offer a range of plans to provide the right level of protection for you and your loved ones.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {planTypes.map((plan, index) => (
                    <motion.div
                        key={plan.id}
                        onClick={() => setActiveTab(plan.id as PlanType)}
                        className={`cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group ${
                            activeTab === plan.id ? 'ring-4 ring-blue-500 transform scale-105' : 'ring-1 ring-gray-200'
                        }`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <motion.div 
                            className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />
                        <div className="relative z-10 text-center">
                            <motion.div 
                                className="text-5xl mb-4"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {plan.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-gray-600 text-sm mb-4 h-10">{plan.description}</p>
                            <div className={`text-lg font-bold text-transparent bg-gradient-to-r ${plan.color} bg-clip-text`}>
                                Starting {plan.startingPrice}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                key={activeTab} // re-animate on tab change
            >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    {planTypes.find(p => p.id === activeTab)?.name} Coverage
                </h3>
                <ul className="space-y-4">
                    {coverageFeatures[activeTab].map((feature, index) => (
                        <motion.li 
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span className="text-green-500 mr-3 mt-1">✓</span>
                            <span className="text-gray-700">{feature}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Key Benefits of Our Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy comprehensive coverage and peace of mind with these powerful features.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-5xl mb-5 inline-block p-4 rounded-full bg-gradient-to-br ${benefit.color} text-white transition-transform duration-300 group-hover:scale-110`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get Your Policy in 4 Easy Steps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our process is simple, transparent, and designed to get you covered in minutes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="text-6xl bg-blue-100 text-blue-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-5 font-bold">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Companies Section */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Compare Quotes from Top Insurers</h2>
                    <p className="text-lg text-gray-500">We partner with India's most trusted insurance companies.</p>
                </motion.div>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            className="grayscale hover:grayscale-0 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img src={company.logo} alt={company.name} className="h-12"/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Have questions? We've got answers.
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-6 font-semibold text-gray-800"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

