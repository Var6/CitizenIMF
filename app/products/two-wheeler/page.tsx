'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

type PlanType = 'thirdparty' | 'comprehensive' | 'standalone' | 'zerodep';

export default function TwoWheelerInsurancePage() {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    bikeModel: '',
    manufacturingYear: '',
    city: '',
    name: '',
    mobile: ''
  })
  const [activeTab, setActiveTab] = useState<PlanType>('comprehensive')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const planTypes = [
    {
      id: 'thirdparty',
      name: 'Third Party',
      icon: '🛡️',
      description: 'Mandatory basic coverage',
      startingPrice: '₹1,500/year*',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive',
      icon: '🔒',
      description: 'Complete bike protection',
      startingPrice: '₹2,500/year*',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'standalone',
      name: 'Standalone OD',
      icon: '⚡',
      description: 'Own damage coverage only',
      startingPrice: '₹1,200/year*',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'zerodep',
      name: 'Zero Depreciation',
      icon: '💎',
      description: 'No depreciation deduction',
      startingPrice: '₹3,500/year*',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    {
      icon: '🏍️',
      title: 'Own Damage Cover',
      description: 'Protection against theft, accidents, natural disasters and fire damage to your bike',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '👥',
      title: 'Third Party Liability',
      description: 'Legal protection against third-party injury, death and property damage claims',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔧',
      title: 'Cashless Repairs',
      description: 'Get your bike repaired at 4000+ authorized garages without upfront payment',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🚑',
      title: 'Roadside Assistance',
      description: '24/7 emergency roadside assistance including towing and breakdown support',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💰',
      title: 'No Claim Bonus',
      description: 'Save up to 50% on premium renewal for every claim-free year',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '📱',
      title: 'Instant Policy',
      description: 'Buy bike insurance online in 2 minutes with instant policy issuance',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const companies = [
    { name: 'HDFC ERGO', rating: 4.5, claimRatio: '96.8%', logo: '/companies/hdfc-ergo.png' },
    { name: 'ICICI Lombard', rating: 4.4, claimRatio: '95.2%', logo: '/companies/icici-lombard.png' },
    { name: 'Bajaj Allianz', rating: 4.3, claimRatio: '94.5%', logo: '/companies/bajaj-allianz.png' },
    { name: 'Reliance General', rating: 4.2, claimRatio: '93.8%', logo: '/companies/reliance-general.png' },
    { name: 'Tata AIG', rating: 4.1, claimRatio: '92.9%', logo: '/companies/tata-aig.png' },
    { name: 'Oriental Insurance', rating: 4.0, claimRatio: '91.5%', logo: '/companies/oriental-insurance.png' }
  ]

  const coverageFeatures = {
    thirdparty: [
      'Third-party liability coverage up to ₹1 Lakh',
      'Death/injury coverage up to ₹15 Lakh',
      'Legal compliance with Motor Vehicle Act',
      'Basic protection against legal claims',
      'Mandatory for all two-wheelers',
      'Most affordable bike insurance option'
    ],
    comprehensive: [
      'Complete own damage + third party coverage',
      'Theft and burglary protection',
      'Natural disaster coverage',
      'Fire and explosion damage',
      'Cashless repairs at network garages',
      'Personal accident cover for owner-driver'
    ],
    standalone: [
      'Own damage coverage without third party',
      'Ideal when you have valid TP policy',
      'Theft and accident damage protection',
      'Natural calamity coverage',
      'Fire and vandalism protection',
      'Lower premium than comprehensive'
    ],
    zerodep: [
      'Zero depreciation on bike parts',
      'No deduction in claim settlement',
      'Full claim amount for new parts',
      'Available for bikes up to 5 years old',
      'Maximum claim settlement value',
      'Premium add-on for comprehensive policy'
    ]
  }

  const steps = [
    {
      step: '01',
      title: 'Enter Bike Details',
      description: 'Provide your bike registration number and basic details',
      icon: '🏍️'
    },
    {
      step: '02',
      title: 'Compare Quotes',
      description: 'Get instant quotes from top insurers and compare',
      icon: '🔍'
    },
    {
      step: '03',
      title: 'Choose & Pay',
      description: 'Select the best plan and complete secure payment',
      icon: '💳'
    },
    {
      step: '04',
      title: 'Get Policy',
      description: 'Download instant policy certificate and documents',
      icon: '📱'
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Two-wheeler insurance form submitted:', formData)
    alert('Thank you! We\'ll send you two-wheeler insurance quotes shortly.')
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
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"
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
          className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
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
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white relative z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(234,88,12,0.1), rgba(220,38,38,0.1), rgba(219,39,119,0.1))",
              "linear-gradient(90deg, rgba(220,38,38,0.1), rgba(219,39,119,0.1), rgba(234,88,12,0.1))",
              "linear-gradient(135deg, rgba(219,39,119,0.1), rgba(234,88,12,0.1), rgba(220,38,38,0.1))"
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
                Two-Wheeler
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Insurance</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Protect your bike with comprehensive insurance starting from ₹1,500/year. Get instant quotes, cashless repairs at 4000+ garages, and 24/7 roadside assistance.
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
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Renew Policy
                </motion.button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  <span>2 Min Policy</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🔧</span>
                  <span>4000+ Garages</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🚨</span>
                  <span>24/7 Roadside Help</span>
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
                Get Instant Two-Wheeler Insurance Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Registration Number</label>
                  <input
                    type="text"
                    value={formData.vehicleNumber}
                    onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
                    placeholder="Enter registration number (e.g. MH12AB1234)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent uppercase"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bike Brand & Model</label>
                    <select
                      value={formData.bikeModel}
                      onChange={(e) => handleInputChange('bikeModel', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select your bike</option>
                      <option value="hero-splendor">Hero Splendor Plus</option>
                      <option value="honda-activa">Honda Activa 6G</option>
                      <option value="bajaj-pulsar">Bajaj Pulsar 150</option>
                      <option value="tvs-jupiter">TVS Jupiter</option>
                      <option value="yamaha-fz">Yamaha FZ-S</option>
                      <option value="royal-enfield">Royal Enfield Classic</option>
                      <option value="ktm-duke">KTM Duke 200</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturing Year</label>
                    <select
                      value={formData.manufacturingYear}
                      onChange={(e) => handleInputChange('manufacturingYear', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select year</option>
                      {Array.from({ length: 20 }, (_, i) => 2024 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter your city"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-6">
              Choose Your Bike Insurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect two-wheeler insurance plan that matches your needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {planTypes.map((plan, index) => (
              <motion.div
                key={plan.id}
                onClick={() => setActiveTab(plan.id as PlanType)}
                className={`cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group ${
                  activeTab === plan.id ? 'ring-2 ring-orange-500 transform scale-105' : ''
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
                  className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">Bike Insurance?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive two-wheeler protection with industry-leading benefits and nationwide service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Companies */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Top Insurance Partners</h2>
            <p className="text-xl text-gray-600">Choose from India's most trusted two-wheeler insurance companies</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">Logo</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-500">
                      <span className="font-bold mr-1">{company.rating}</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{company.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Claim Settlement</span>
                  <span className="font-bold text-orange-600">{company.claimRatio}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Buy Two-Wheeler Insurance</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to get your bike insured</p>
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
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-3xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
                
                <div className="text-2xl font-bold text-orange-600 mb-2">{step.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-red-300 transform -translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #ea580c, #dc2626, #db2777)",
              "linear-gradient(90deg, #dc2626, #db2777, #ea580c)",
              "linear-gradient(135deg, #db2777, #ea580c, #dc2626)",
              "linear-gradient(180deg, #ea580c, #dc2626, #db2777)"
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
            Ready to Protect Your Ride?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-orange-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join over 2 lakh+ satisfied riders who trust Citizen IMF for their two-wheeler insurance needs. Get instant quotes and ride with confidence today.
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
              Get Free Bike Quote
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Renew Existing Policy
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
              { icon: "⚡", title: "2 Min", desc: "Policy Issuance" },
              { icon: "🔧", title: "4000+", desc: "Network Garages" },
              { icon: "🚨", title: "24/7", desc: "Roadside Assistance" },
              { icon: "💯", title: "96.8%", desc: "Claim Settlement" }
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
                <p className="text-orange-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Two-Wheeler Insurance FAQs</h2>
            <p className="text-xl text-gray-600">Get answers to common bike insurance questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Is two-wheeler insurance mandatory in India?",
                a: "Yes, third-party insurance is mandatory for all two-wheelers as per the Motor Vehicle Act, 1988. Riding without valid insurance can result in fines up to ₹2,000 and/or imprisonment up to 3 months."
              },
              {
                q: "What is the difference between third-party and comprehensive insurance?",
                a: "Third-party insurance covers only third-party damages and liabilities. Comprehensive insurance includes third-party coverage plus own damage protection against theft, accidents, natural disasters, and fire."
              },
              {
                q: "Can I buy bike insurance online?",
                a: "Yes, you can easily buy two-wheeler insurance online in just 2 minutes. Our platform offers instant quotes, policy comparison, and immediate policy issuance with all major insurers."
              },
              {
                q: "What documents are required for bike insurance?",
                a: "You need your bike's registration certificate (RC), valid driving license, Aadhaar card, previous policy copy (for renewal), and passport-size photographs for bike insurance."
              },
              {
                q: "What is No Claim Bonus (NCB) in bike insurance?",
                a: "NCB is a discount on your premium for every claim-free year. You can get up to 50% discount on your bike insurance premium. NCB belongs to the policyholder, not the vehicle."
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
              href="/faq/two-wheeler-insurance" 
              className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              View All Two-Wheeler Insurance FAQs
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