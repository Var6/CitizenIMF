'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

type PlanType = 'basic' | 'comprehensive' | 'family' | 'premium';

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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
      description: 'Lump sum payout to family in case of accidental death with coverage up to ₹1 crore',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🦽',
      title: 'Disability Coverage',
      description: 'Financial support for permanent or temporary disability due to accidents',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🏥',
      title: 'Medical Expenses',
      description: 'Coverage for accident-related hospitalization and medical treatment costs',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🚑',
      title: 'Emergency Transport',
      description: 'Ambulance charges and emergency transportation costs covered',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📄',
      title: 'Easy Claims',
      description: 'Simple claim process with 7-day settlement for valid claims',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '⚡',
      title: 'Instant Policy',
      description: 'Get your accident policy issued within 5 minutes online',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const companies = [
    { name: 'LIC', rating: 4.6, claimRatio: '98.2%', logo: '/companies/lic.png' },
    { name: 'MaxLife', rating: 4.4, claimRatio: '96.8%', logo: '/companies/maxlife.png' },
    { name: 'Axis MaxLife', rating: 4.3, claimRatio: '95.2%', logo: '/companies/axis-maxlife.png' },
    { name: 'PNB MetLife', rating: 4.2, claimRatio: '94.5%', logo: '/companies/pnb-metlife.png' },
    { name: 'Niva Bupa', rating: 4.4, claimRatio: '93.8%', logo: '/companies/niva-bupa.png' },
    { name: 'Care Health', rating: 4.1, claimRatio: '92.1%', logo: '/companies/care-health.png' }
  ]

  const coverageFeatures = {
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
      'Coverage for entire family',
      'Individual sum insured for each member',
      'Child education benefit',
      'Family income benefit',
      'Coverage for domestic accidents',
      'Special rates for family plans'
    ],
    premium: [
      'Maximum coverage up to ₹1 Crore',
      'Global accident coverage',
      'Adventure sports coverage',
      'Funeral expense benefit',
      'Legal liability coverage',
      'Premium customer service'
    ]
  }

  const steps = [
    {
      step: '01',
      title: 'Enter Details',
      description: 'Provide your age, occupation, and coverage requirements',
      icon: '📝'
    },
    {
      step: '02',
      title: 'Compare Plans',
      description: 'Get quotes from top insurers and compare coverage',
      icon: '🔍'
    },
    {
      step: '03',
      title: 'Select & Pay',
      description: 'Choose the best plan and make secure payment',
      icon: '💳'
    },
    {
      step: '04',
      title: 'Get Policy',
      description: 'Receive instant policy document via email',
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
    console.log('Accident insurance form submitted:', formData)
    alert('Thank you! We\'ll send you personal accident insurance quotes shortly.')
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
      {/* Hero Section with Form */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative z-10 overflow-hidden">
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="">Select Age</option>
                      {Array.from({ length: 60 }, (_, i) => i + 18).map(age => (
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="2">₹2 Lakh</option>
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
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

      {/* Rest of your sections (Plan Types, Benefits, Companies, How It Works, CTA, FAQ) remain unchanged */}
    </div>
  )
}
