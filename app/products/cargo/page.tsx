'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'
import { sendEmail } from '@/lib/email';

type PlanType = 'basic' | 'standard' | 'comprehensive' | 'premium';

export default function MarineCargoInsurancePage() {
  const [formData, setFormData] = useState({
    cargoType: '',
    shipmentValue: '',
    originPort: '',
    destinationPort: '',
    shipmentMode: '',
    companyName: '',
    contactPerson: '',
    mobile: '',
    email: ''
  })
  const [activeTab, setActiveTab] = useState<PlanType>('comprehensive')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const planTypes = [
    {
      id: 'basic',
      name: 'Basic Coverage',
      icon: '⚓',
      description: 'Essential protection',
      startingPrice: '0.15% of cargo value*',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'standard',
      name: 'Standard Coverage',
      icon: '🚢',
      description: 'Comprehensive protection',
      startingPrice: '0.25% of cargo value*',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'comprehensive',
      name: 'All Risks Coverage',
      icon: '🌊',
      description: 'Maximum protection',
      startingPrice: '0.35% of cargo value*',
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 'premium',
      name: 'Premium Plus',
      icon: '⭐',
      description: 'Ultimate coverage',
      startingPrice: '0.45% of cargo value*',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const benefits = [
    {
      icon: '🛡️',
      title: 'All Perils Coverage',
      description: 'Protection against physical loss or damage from any external cause during transit',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: 'Worldwide protection for sea, air, rail, and road transportation across all routes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '⚡',
      title: 'Quick Claims Settlement',
      description: 'Fast and efficient claims processing with dedicated marine insurance experts',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '📋',
      title: 'Flexible Terms',
      description: 'Customizable coverage terms and conditions to match your specific cargo requirements',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💰',
      title: 'Competitive Rates',
      description: 'Industry-leading premium rates with transparent pricing and no hidden charges',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🏆',
      title: 'Expert Support',
      description: '24/7 marine insurance specialists and claims assistance worldwide',
      color: 'from-indigo-500 to-purple-500'
    }
  ]


  const coverageFeatures = {
    basic: [
      'Named perils coverage (fire, explosion, collision)',
      'General average and salvage charges',
      'Jettison and washing overboard',
      'Basic theft and pilferage protection',
      'Standard war risks coverage',
      'Certificate of insurance for customs'
    ],
    standard: [
      'All basic coverage plus extended perils',
      'Fresh water damage and contamination',
      'Hook damage and breakage coverage',
      'Delay in delivery compensation',
      'Enhanced theft and pilferage protection',
      'Sue and labor charges included'
    ],
    comprehensive: [
      'All risks coverage for any external cause',
      'Full replacement value protection',
      'Warehouse to warehouse coverage',
      'Transit delays and storage charges',
      'Currency fluctuation protection',
      'Professional indemnity coverage'
    ],
    premium: [
      'Maximum all-risks coverage available',
      'Pre and post-shipment storage',
      'Inland transit comprehensive coverage',
      'Consequential loss protection',
      'Currency and freight coverage',
      'Premium claims handling service'
    ]
  }

  const steps = [
    {
      step: '01',
      title: 'Cargo Details',
      description: 'Provide cargo type, value, and shipment route information',
      icon: '📦'
    },
    {
      step: '02',
      title: 'Get Quotes',
      description: 'Receive instant quotes from top marine insurers',
      icon: '💼'
    },
    {
      step: '03',
      title: 'Select & Pay',
      description: 'Choose your coverage and complete secure payment',
      icon: '💳'
    },
    {
      step: '04',
      title: 'Certificate',
      description: 'Download marine insurance certificate instantly',
      icon: '📜'
    }
  ]

  const cargoTypes = [
    'Electronics & Technology',
    'Textiles & Garments',
    'Machinery & Equipment',
    'Automotive Parts',
    'Pharmaceuticals',
    'Food & Beverages',
    'Chemicals',
    'Raw Materials',
    'Consumer Goods',
    'Other'
  ]

  const shipmentModes = [
    'Sea Freight (FCL)',
    'Sea Freight (LCL)',
    'Air Freight',
    'Multi-modal',
    'Road Transport',
    'Rail Transport'
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
      name: formData.contactPerson,
      type: window.location.href, // 🔥 send current page URL
      mobile: formData.mobile,
      city: formData.companyName,
    })

    alert("✅ Thank you! We will send you personal accident insurance quotes shortly.")
  } catch (error) {
    console.error("Email error:", error)
    alert("❌ Failed to send enquiry. Please try again.")
  }
}

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-cyan-600 to-teal-600 text-white relative z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(29,78,216,0.1), rgba(8,145,178,0.1), rgba(13,148,136,0.1))",
              "linear-gradient(90deg, rgba(8,145,178,0.1), rgba(13,148,136,0.1), rgba(29,78,216,0.1))",
              "linear-gradient(135deg, rgba(13,148,136,0.1), rgba(29,78,216,0.1), rgba(8,145,178,0.1))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Marine Cargo
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Insurance</span>
              </h1>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                Protect your cargo shipments worldwide with comprehensive marine insurance starting from 0.15% of cargo value. Global coverage for sea, air, and land transportation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button 
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Instant Quote
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Brochure
                </motion.button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🌍</span>
                  <span>Global Coverage</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  <span>Quick Claims</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  <span>Expert Support</span>
                </div>
              </div>
            </motion.div>

            {/* Quote Form */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get Marine Cargo Insurance Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cargo Type</label>
                    <select
                      value={formData.cargoType}
                      onChange={(e) => handleInputChange('cargoType', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select cargo type</option>
                      {cargoTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Shipment Value (USD)</label>
                    <input
                      type="number"
                      value={formData.shipmentValue}
                      onChange={(e) => handleInputChange('shipmentValue', e.target.value)}
                      placeholder="Enter cargo value"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Origin Port/City</label>
                    <input
                      type="text"
                      value={formData.originPort}
                      onChange={(e) => handleInputChange('originPort', e.target.value)}
                      placeholder="From where"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination Port/City</label>
                    <input
                      type="text"
                      value={formData.destinationPort}
                      onChange={(e) => handleInputChange('destinationPort', e.target.value)}
                      placeholder="To where"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shipment Mode</label>
                  <select
                    value={formData.shipmentMode}
                    onChange={(e) => handleInputChange('shipmentMode', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select transport mode</option>
                    {shipmentModes.map(mode => (
                      <option key={mode} value={mode}>{mode}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Enter company name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                    <input
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder="Enter contact name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text mb-6">
              Marine Insurance Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect marine cargo insurance plan for your shipment requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {planTypes.map((plan, index) => (
              <motion.div
                key={plan.id}
                onClick={() => setActiveTab(plan.id as PlanType)}
                className={`cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group ${
                  activeTab === plan.id ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {plan.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className={`text-lg font-bold text-transparent bg-gradient-to-r ${plan.color} bg-clip-text`}>
                    Starting {plan.startingPrice}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Plan Details */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {planTypes.find(p => p.id === activeTab)?.name} Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coverageFeatures[activeTab]?.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

  

    

      {/* How It Works */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Get Marine Cargo Insurance</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to protect your cargo shipments</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
                
                <div className="text-2xl font-bold text-blue-600 mb-2">{step.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 transform -translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-cyan-600 to-teal-600 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #1d4ed8, #0891b2, #0d9488)",
              "linear-gradient(90deg, #0891b2, #0d9488, #1d4ed8)",
              "linear-gradient(135deg, #0d9488, #1d4ed8, #0891b2)",
              "linear-gradient(180deg, #1d4ed8, #0891b2, #0d9488)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h3 
            className="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Secure Your Cargo Today
          </motion.h3>
          
          <motion.p 
            className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses worldwide who trust us for their marine cargo insurance needs. Get comprehensive coverage and peace of mind for your international shipments.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Marine Quote
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Speak to Expert
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: "🌍", title: "Global", desc: "Worldwide Coverage" },
              { icon: "⚡", title: "24/7", desc: "Expert Support" },
              { icon: "💯", title: "98.5%", desc: "Claim Settlement" },
              { icon: "🏆", title: "50+ Years", desc: "Marine Expertise" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-2xl font-bold text-yellow-200 mb-2">{item.title}</h4>
                <p className="text-cyan-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Marine Cargo Insurance FAQs</h2>
            <p className="text-xl text-gray-600">Get answers to common marine insurance questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What is marine cargo insurance?",
                a: "Marine cargo insurance provides protection for goods during transportation by sea, air, rail, or road against physical loss or damage from external causes. It covers the cargo from warehouse to warehouse during the entire transit."
              },
              {
                q: "What does marine cargo insurance cover?",
                a: "Coverage typically includes physical loss or damage due to perils of the sea, fire, explosion, theft, pilferage, non-delivery, general average, salvage charges, and sue and labor expenses. The extent depends on the type of policy chosen."
              },
              {
                q: "How is marine cargo insurance premium calculated?",
                a: "Premium is calculated as a percentage of the cargo value (CIF + 10%). Rates vary based on cargo type, route, mode of transport, packaging, and coverage type. Typical rates range from 0.15% to 0.5% of cargo value."
              },
              {
                q: "What is the difference between FPA, WA, and All Risks coverage?",
                a: "FPA (Free from Particular Average) covers total loss only. WA (With Average) covers partial losses above a certain percentage. All Risks provides the broadest coverage for any physical loss or damage from external causes."
              },
              {
                q: "Is marine insurance mandatory for exports/imports?",
                a: "While not legally mandatory, marine insurance is essential for international trade. Many buyers require it, and banks often mandate it for LC transactions. It protects against significant financial losses during transit."
              },
              {
                q: "How quickly are marine insurance claims settled?",
                a: "Claims are typically settled within 15-30 days after submission of complete documents. Emergency cases and total loss claims may be expedited. Our marine specialists ensure smooth and fast claim processing."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/faq/marine-cargo-insurance" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Marine Insurance FAQs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}