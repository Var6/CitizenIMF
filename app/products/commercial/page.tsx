'use client'

import { useState, SVGProps } from 'react'
import { motion } from "framer-motion"

type PlanType = 'basic' | 'comprehensive' | 'fleet';

// Arrow component for FAQ
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function CommercialVehicleInsurance() {
  const [formData, setFormData] = useState({
    vehicleType: '',
    vehicleAge: '',
    gvw: '',
    usage: '',
    location: '',
    ownerName: '',
    mobile: ''
  })
  const [activeTab, setActiveTab] = useState<PlanType>('basic')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const planTypes = [
    {
      id: 'basic',
      name: 'Third Party Cover',
      icon: '🛡️',
      description: 'Mandatory legal protection',
      startingPrice: '₹3,500/year*',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive',
      icon: '🚛',
      description: 'Complete vehicle protection',
      startingPrice: '₹15,000/year*',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'fleet',
      name: 'Fleet Insurance',
      icon: '🏢',
      description: 'Multi-vehicle coverage',
      startingPrice: '₹45,000/year*',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const benefits = [
    {
      icon: '⚖️',
      title: 'Legal Compliance',
      description: 'Meet mandatory insurance requirements and avoid penalties.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🔧',
      title: 'Repair Coverage',
      description: 'Complete vehicle damage repair and replacement coverage.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🚑',
      title: 'Emergency Support',
      description: '24/7 roadside assistance and towing services.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '💼',
      title: 'Business Protection',
      description: 'Protect your business assets and income from claims.',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const coverageFeatures: Record<PlanType, string[]> = {
    basic: [
      'Third party liability up to ₹7.5 Lakhs',
      'Personal accident cover for driver',
      'Legal compliance certificate',
      'Nationwide validity',
      'Online policy issuance',
      'Easy renewal process'
    ],
    comprehensive: [
      'Own damage coverage up to IDV',
      'Third party liability protection',
      'Fire, theft, natural calamity cover',
      'Personal accident for driver/cleaner',
      'Zero depreciation add-on available',
      '24/7 roadside assistance'
    ],
    fleet: [
      'Coverage for multiple vehicles',
      'Bulk discount pricing',
      'Centralized policy management',
      'Dedicated fleet manager',
      'Priority claim settlement',
      'Custom coverage options'
    ]
  }

  const vehicleTypes = [
    { name: 'Truck', icon: '🚛', desc: 'Heavy goods vehicles' },
    { name: 'Tractor', icon: '🚜', desc: 'Agricultural tractors' },
    { name: 'Bus', icon: '🚌', desc: 'Passenger buses' },
    { name: 'Taxi', icon: '🚕', desc: 'Commercial taxis' },
    { name: 'Tempo', icon: '🚐', desc: 'Light commercial vehicles' },
    { name: 'JCB', icon: '🏗️', desc: 'Construction equipment' }
  ]

  const faqs = [
    {
      question: "What is commercial vehicle insurance?",
      answer: "Commercial vehicle insurance provides financial protection for vehicles used for business purposes like goods transportation, passenger services, or construction work. It covers third-party liabilities and vehicle damages."
    },
    {
      question: "Is commercial vehicle insurance mandatory?",
      answer: "Yes, third-party liability insurance is mandatory for all commercial vehicles in India under the Motor Vehicles Act. Driving without valid insurance can result in penalties and legal action."
    },
    {
      question: "What's the difference between commercial and private car insurance?",
      answer: "Commercial vehicle insurance covers vehicles used for business purposes with higher liability limits and specific coverage for commercial risks. Private car insurance is for personal use vehicles with different premium structures."
    },
    {
      question: "Can I insure multiple vehicles under one policy?",
      answer: "Yes, fleet insurance allows you to cover multiple commercial vehicles under a single policy with bulk discounts and centralized management benefits."
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = () => {
    console.log('Commercial vehicle insurance form submitted:', formData)
    alert('Thank you! We\'ll send you commercial vehicle insurance quotes shortly.')
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Commercial Vehicle
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Insurance</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Protect your business vehicles with comprehensive insurance coverage. Get quotes for trucks, tractors, buses, and all commercial vehicles starting from ₹3,500/year.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get Instant Vehicle Quote
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="">Select Vehicle Type</option>
                      <option value="truck">Truck</option>
                      <option value="tractor">Tractor</option>
                      <option value="bus">Bus</option>
                      <option value="taxi">Taxi</option>
                      <option value="tempo">Tempo</option>
                      <option value="jcb">JCB/Construction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Age</label>
                    <select
                      value={formData.vehicleAge}
                      onChange={(e) => handleInputChange('vehicleAge', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="">Select Age</option>
                      <option value="new">Brand New</option>
                      <option value="0-1">0-1 Years</option>
                      <option value="1-3">1-3 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5-10">5-10 Years</option>
                      <option value="10+">10+ Years</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">GVW (Gross Vehicle Weight)</label>
                    <select
                      value={formData.gvw}
                      onChange={(e) => handleInputChange('gvw', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="">Select GVW</option>
                      <option value="<3.5">Less than 3.5 Tons</option>
                      <option value="3.5-7.5">3.5 - 7.5 Tons</option>
                      <option value="7.5-12">7.5 - 12 Tons</option>
                      <option value="12-16">12 - 16 Tons</option>
                      <option value="16+">Above 16 Tons</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Usage Type</label>
                    <select
                      value={formData.usage}
                      onChange={(e) => handleInputChange('usage', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="">Select Usage</option>
                      <option value="goods">Goods Transport</option>
                      <option value="passenger">Passenger Transport</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="construction">Construction</option>
                      <option value="other">Other Commercial</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Registration Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Enter city/state"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Owner Name</label>
                    <input
                      type="text"
                      value={formData.ownerName}
                      onChange={(e) => handleInputChange('ownerName', e.target.value)}
                      placeholder="Vehicle owner name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                </div>

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

                <motion.button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Vehicle Quotes
                </motion.button>
                <p className="text-center text-sm text-gray-500">
                  🔒 Secure • ⚡ Instant • 💯 Free Service
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">We Cover All Commercial Vehicles</h2>
            <p className="text-lg text-gray-600">Comprehensive insurance for every type of commercial vehicle</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{vehicle.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{vehicle.name}</h3>
                <p className="text-xs text-gray-500">{vehicle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-6">
              Choose Your Coverage Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the right protection level for your commercial vehicle business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {planTypes.map((plan, index) => (
              <motion.div
                key={plan.id}
                onClick={() => setActiveTab(plan.id as PlanType)}
                className={`cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border-2 ${
                  activeTab === plan.id ? 'border-blue-500 transform scale-105' : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className={`text-lg font-bold text-transparent bg-gradient-to-r ${plan.color} bg-clip-text`}>
                    Starting {plan.startingPrice}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-gray-50 rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            key={activeTab}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              {planTypes.find(p => p.id === activeTab)?.name} Features
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Our Vehicle Insurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection with business-focused benefits and support.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-5xl mb-5 inline-block p-4 rounded-full bg-gradient-to-br ${benefit.color} text-white transition-transform duration-300 group-hover:scale-110`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common queries about commercial vehicle insurance.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl shadow-sm overflow-hidden"
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