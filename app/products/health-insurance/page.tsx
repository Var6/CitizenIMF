'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

type PlanType = 'individual' | 'family' | 'senior' | 'critical';

export default function HealthInsurancePage() {
  const [formData, setFormData] = useState({
    age: '',
    members: '1',
    sumInsured: '5',
    city: '',
    name: '',
    mobile: ''
  })
  const [activeTab, setActiveTab] = useState<PlanType>('individual')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const planTypes = [
    {
      id: 'individual',
      name: 'Individual Plans',
      icon: '👤',
      description: 'Perfect for single person coverage',
      startingPrice: '₹150/month*',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'family',
      name: 'Family Floater',
      icon: '👨‍👩‍👧‍👦',
      description: 'Complete family protection',
      startingPrice: '₹350/month*',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'senior',
      name: 'Senior Citizen',
      icon: '👴',
      description: 'Specialized for 60+ age',
      startingPrice: '₹800/month*',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'critical',
      name: 'Critical Illness',
      icon: '🏥',
      description: 'Coverage for serious diseases',
      startingPrice: '₹200/month*',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    {
      icon: '🏥',
      title: 'Cashless Treatment',
      description: 'Get treatment at 10,000+ network hospitals without paying upfront',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💰',
      title: 'Tax Benefits',
      description: 'Save up to ₹46,800 in taxes under Section 80D',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🚑',
      title: 'Emergency Coverage',
      description: 'Ambulance charges and emergency medical expenses covered',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '👨‍⚕️',
      title: 'Pre & Post Hospitalization',
      description: '30-60 days coverage before and after hospitalization',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🔄',
      title: 'No Claim Bonus',
      description: 'Increase your sum insured by up to 100% for claim-free years',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '⚡',
      title: 'Instant Policy',
      description: 'Get your policy issued within 5 minutes online',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const companies = [
    { name: 'HDFC ERGO', rating: 4.5, claimRatio: '95.1%', logo: '/companies/hdfc-ergo.png' },
    { name: 'ICICI Lombard', rating: 4.3, claimRatio: '92.8%', logo: '/companies/icici-lombard.png' },
    { name: 'Niva Bupa', rating: 4.4, claimRatio: '91.2%', logo: '/companies/niva-bupa.png' },
    { name: 'Care Health', rating: 4.2, claimRatio: '89.5%', logo: '/companies/care-health.png' },
    { name: 'Star Health', rating: 4.1, claimRatio: '88.9%', logo: '/companies/star-health.png' },
    { name: 'Bajaj Allianz', rating: 4.0, claimRatio: '87.2%', logo: '/companies/bajaj-allianz.png' }
  ]

  const coverageFeatures = {
    individual: [
      'Individual coverage up to ₹1 Crore',
      'Cashless treatment at network hospitals',
      'Pre & post hospitalization coverage',
      'Day care procedures covered',
      'Annual health check-up',
      'No waiting period for accidents'
    ],
    family: [
      'Entire family covered under one policy',
      'Shared sum insured for all members',
      'Newborn baby covered from day 1',
      'Maternity and child care benefits',
      'Family discount on premium',
      'Coverage for parents and in-laws'
    ],
    senior: [
      'No upper age limit for renewals',
      'Pre-existing disease coverage',
      'Reduced waiting periods',
      'Special OPD benefits',
      'Home healthcare services',
      'Wellness and preventive care'
    ],
    critical: [
      'Lump sum payout on diagnosis',
      'Coverage for 30+ critical illnesses',
      'No restriction on fund usage',
      'Multiple claim benefit',
      'Partial payment for early stages',
      'Income replacement benefit'
    ]
  }

  const steps = [
    {
      step: '01',
      title: 'Fill Details',
      description: 'Enter your age, family details, and coverage requirements',
      icon: '📝'
    },
    {
      step: '02',
      title: 'Compare Plans',
      description: 'Get quotes from top insurers and compare benefits',
      icon: '🔍'
    },
    {
      step: '03',
      title: 'Choose & Pay',
      description: 'Select the best plan and make secure online payment',
      icon: '💳'
    },
    {
      step: '04',
      title: 'Get Policy',
      description: 'Receive your policy document instantly via email',
      icon: '📧'
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
    console.log('Health insurance form submitted:', formData)
    alert('Thank you! We\'ll send you health insurance quotes shortly.')
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
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
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
          className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
      <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white relative z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(34,197,94,0.1), rgba(59,130,246,0.1), rgba(168,85,247,0.1))",
              "linear-gradient(90deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(34,197,94,0.1))",
              "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(34,197,94,0.1), rgba(59,130,246,0.1))"
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
                Health Insurance That 
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Actually Cares</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Get comprehensive health coverage starting from ₹150/month. Protect your family with cashless treatment at 10,000+ hospitals across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button 
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Quote
                </motion.button>
                <motion.button 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Compare Plans
                </motion.button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  <span>5 Min Policy</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🏥</span>
                  <span>10,000+ Hospitals</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">💰</span>
                  <span>Save Taxes</span>
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
                Get Instant Health Insurance Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <select
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Age</option>
                      {Array.from({ length: 60 }, (_, i) => i + 18).map(age => (
                        <option key={age} value={age}>{age} years</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Family Members</label>
                    <select
                      value={formData.members}
                      onChange={(e) => handleInputChange('members', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="1">Self</option>
                      <option value="2">Self + Spouse</option>
                      <option value="3">Self + Spouse + 1 Child</option>
                      <option value="4">Self + Spouse + 2 Children</option>
                      <option value="5">Self + Parents</option>
                      <option value="6">Entire Family</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sum Insured</label>
                    <select
                      value={formData.sumInsured}
                      onChange={(e) => handleInputChange('sumInsured', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="3">₹3 Lakh</option>
                      <option value="5">₹5 Lakh</option>
                      <option value="10">₹10 Lakh</option>
                      <option value="15">₹15 Lakh</option>
                      <option value="25">₹25 Lakh</option>
                      <option value="50">₹50 Lakh</option>
                      <option value="100">₹1 Crore</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Enter your city"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
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
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text mb-6">
              Choose Your Health Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect health insurance plan that fits your needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {planTypes.map((plan, index) => (
              <motion.div
                key={plan.id}
                onClick={() => setActiveTab(plan.id as PlanType)}
                className={`cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group ${
                  activeTab === plan.id ? 'ring-2 ring-green-500 transform scale-105' : ''
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
                  className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
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
              Why Choose Our <span className="text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">Health Insurance?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get comprehensive health protection with industry-leading benefits and features
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Top Insurance Partners</h2>
            <p className="text-xl text-gray-600">Choose from India's most trusted health insurance companies</p>
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
                  <span className="font-bold text-green-600">{company.claimRatio}</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Buy Health Insurance</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to get your health insurance</p>
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
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white text-3xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
                
                <div className="text-2xl font-bold text-green-600 mb-2">{step.step}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-blue-300 transform -translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #16a34a, #2563eb, #9333ea)",
              "linear-gradient(90deg, #2563eb, #9333ea, #16a34a)",
              "linear-gradient(135deg, #9333ea, #16a34a, #2563eb)",
              "linear-gradient(180deg, #16a34a, #2563eb, #9333ea)"
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
            Ready to Protect Your Health?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-green-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join over 100,000+ satisfied customers who trust Citizen IMF for their health insurance needs. Get instant quotes and buy online in just 5 minutes.
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
              Get Free Health Quote
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Expert
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
              { icon: "⚡", title: "5 Min", desc: "Policy Issuance" },
              { icon: "🏥", title: "10,000+", desc: "Network Hospitals" },
              { icon: "💰", title: "₹46,800", desc: "Tax Savings" },
              { icon: "📞", title: "24/7", desc: "Customer Support" }
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
                <p className="text-green-100 text-sm">{item.desc}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Health Insurance FAQs</h2>
            <p className="text-xl text-gray-600">Get answers to common health insurance questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What is the waiting period in health insurance?",
                a: "Most health plans have a 30-day waiting period for illnesses, 1-2 years for specific diseases, and 2-4 years for pre-existing conditions. Accidents are covered from day 1."
              },
              {
                q: "Can I get cashless treatment at any hospital?",
                a: "Cashless treatment is available only at network hospitals of your insurance company. We have tie-ups with 10,000+ hospitals across India for hassle-free treatment."
              },
              {
                q: "How much health insurance coverage do I need?",
                a: "We recommend minimum ₹5 lakh for individuals and ₹10 lakh for families. In metros, consider ₹10-25 lakh due to higher medical costs. Our advisors can help determine the right amount."
              },
              {
                q: "Are pre-existing diseases covered?",
                a: "Yes, pre-existing diseases are covered after the waiting period (usually 2-4 years). Some insurers offer reduced waiting periods or immediate coverage for certain conditions."
              },
              {
                q: "Can I buy health insurance online?",
                a: "Absolutely! You can compare plans, get quotes, and buy health insurance online through our platform. The entire process takes just 5 minutes and your policy is issued instantly."
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
              href="/faq" 
              className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View All Health Insurance FAQs
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