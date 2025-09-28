'use client'

import { useState } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

interface FormData {
  policyNumber: string;
  fullName: string;
  email: string;
  phone: string;
  policyType: string;
  currentPremium: string;
  coverageAmount: string;
  renewalDate: string;
  additionalCoverage: string;
  nomineeDetails: string;
  specialRequests: string;
}

interface SearchResults {
  policyNumber: string;
  holderName: string;
  policyType: string;
  premium: string;
  coverageAmount: string;
  expiryDate: string;
  status: string;
}

export default function RenewPage() {
  const [formData, setFormData] = useState<FormData>({
    policyNumber: '',
    fullName: '',
    email: '',
    phone: '',
    policyType: '',
    currentPremium: '',
    coverageAmount: '',
    renewalDate: '',
    additionalCoverage: '',
    nomineeDetails: '',
    specialRequests: ''
  })

  const [step, setStep] = useState<number>(1)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null)

  const renewalBenefits = [
    {
      title: "Seamless Process",
      description: "Quick and easy renewal with minimal documentation. Continue your coverage without interruption and maintain your policy benefits.",
      icon: "🔄",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "No Medical Re-examination",
      description: "For most policies, renewal doesn't require fresh medical tests. Your existing coverage continues with the same terms and conditions.",
      icon: "🏥",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Loyalty Benefits",
      description: "Long-term policyholders enjoy special discounts, bonus coverage, and enhanced benefits as a reward for their continued trust.",
      icon: "🎁",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Flexible Payment Options",
      description: "Choose from multiple payment modes - annual, semi-annual, quarterly, or monthly. Online payment available for instant processing.",
      icon: "💳",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const renewalSteps = [
    {
      step: 1,
      title: "Policy Search",
      description: "Enter your policy details to retrieve information",
      icon: "🔍"
    },
    {
      step: 2,
      title: "Review Details",
      description: "Verify and update your policy information",
      icon: "📋"
    },
    {
      step: 3,
      title: "Payment",
      description: "Complete your renewal payment securely",
      icon: "💰"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePolicySearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate policy search
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock search results
    setSearchResults({
      policyNumber: formData.policyNumber,
      holderName: "John Doe",
      policyType: "Health Insurance",
      premium: "₹12,000",
      coverageAmount: "₹5,00,000",
      expiryDate: "2024-12-15",
      status: "Active"
    })
    
    setStep(2)
    setIsSubmitting(false)
  }

  const handleRenewal = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate renewal process
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    alert('Renewal request submitted successfully! You will receive confirmation via email and SMS within 24 hours.')
    
    // Reset form
    setFormData({
      policyNumber: '',
      fullName: '',
      email: '',
      phone: '',
      policyType: '',
      currentPremium: '',
      coverageAmount: '',
      renewalDate: '',
      additionalCoverage: '',
      nomineeDetails: '',
      specialRequests: ''
    })
    setSearchResults(null)
    setStep(1)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"
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
          className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-3xl"
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
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-orange-400/15 to-yellow-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Breadcrumb */}
      <motion.div 
        className="bg-gradient-to-r from-gray-100 via-blue-50 to-green-50 py-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700 font-semibold">Renew Policy</span>
          </nav>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 via-green-600 to-orange-500 text-white relative z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(34,197,94,0.1), rgba(249,115,22,0.1))",
              "linear-gradient(90deg, rgba(168,85,247,0.1), rgba(34,197,94,0.1), rgba(249,115,22,0.1), rgba(59,130,246,0.1))",
              "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(249,115,22,0.1), rgba(59,130,246,0.1), rgba(168,85,247,0.1))",
              "linear-gradient(180deg, rgba(249,115,22,0.1), rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(34,197,94,0.1))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Renew Policy
            </motion.h1>
            
            <motion.h2 
              className="text-3xl lg:text-5xl font-semibold text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Continue Your Protection Journey
            </motion.h2>
            
            <motion.p 
              className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Renewing your insurance policy is simple and hassle-free with Citizen Savings & Credit IMF Pvt. Ltd. Keep your coverage active and enjoy continued peace of mind with our streamlined renewal process.
            </motion.p>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-400/20 rounded-full blur-sm"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Progress Steps */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8">
            {renewalSteps.map((stepInfo, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center ${step >= stepInfo.step ? 'text-blue-600' : 'text-gray-400'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2 ${
                  step >= stepInfo.step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > stepInfo.step ? '✓' : stepInfo.icon}
                </div>
                <div className="text-center">
                  <div className="font-semibold">{stepInfo.title}</div>
                  <div className="text-sm hidden md:block">{stepInfo.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Renewal Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text mb-6">
              Why Renew With Us?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of staying with Citizen IMF for your insurance renewal needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renewalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
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
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <motion.div 
                    className={`w-20 h-1 bg-gradient-to-r ${benefit.color} rounded-full mt-6`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Renewal Form Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text mb-6">
              {step === 1 ? "Find Your Policy" : step === 2 ? "Review & Update" : "Complete Renewal"}
            </h3>
          </motion.div>

          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {step === 1 && (
              <form onSubmit={handlePolicySearch} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Policy Number *
                  </label>
                  <input
                    type="text"
                    name="policyNumber"
                    value={formData.policyNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    placeholder="Enter your policy number"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="text-center pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all shadow-lg ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Searching...
                      </span>
                    ) : (
                      'Find My Policy'
                    )}
                  </motion.button>
                </motion.div>
              </form>
            )}

            {step === 2 && searchResults && (
              <div className="space-y-8">
                {/* Policy Information Display */}
                <motion.div 
                  className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border-l-4 border-blue-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Current Policy Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Policy Number:</span>
                      <p className="text-lg font-semibold text-blue-600">{searchResults.policyNumber}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Policy Holder:</span>
                      <p className="text-lg font-semibold text-gray-900">{searchResults.holderName}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Policy Type:</span>
                      <p className="text-lg font-semibold text-gray-900">{searchResults.policyType}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Current Premium:</span>
                      <p className="text-lg font-semibold text-green-600">{searchResults.premium}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Coverage Amount:</span>
                      <p className="text-lg font-semibold text-gray-900">{searchResults.coverageAmount}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600">Expiry Date:</span>
                      <p className="text-lg font-semibold text-red-600">{searchResults.expiryDate}</p>
                    </div>
                  </div>
                </motion.div>

                <form onSubmit={handleRenewal} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        placeholder="Enter your email address"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Renewal Date
                      </label>
                      <input
                        type="date"
                        name="renewalDate"
                        value={formData.renewalDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Coverage Requirements
                    </label>
                    <textarea
                      name="additionalCoverage"
                      value={formData.additionalCoverage}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                      placeholder="Any additional coverage you would like to add..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Update Nominee Details (if required)
                    </label>
                    <textarea
                      name="nomineeDetails"
                      value={formData.nomineeDetails}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                      placeholder="Update nominee information if needed..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Comments
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                      placeholder="Any special requests or comments..."
                    />
                  </motion.div>

                  <div className="flex gap-4 pt-6">
                    <motion.button
                      type="button"
                      onClick={() => {setStep(1); setSearchResults(null)}}
                      className="flex-1 bg-gray-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-600 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Back
                    </motion.button>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Renewal...
                        </span>
                      ) : (
                        'Proceed to Renewal'
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-6">
              Important Renewal Information
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⏰",
                title: "Grace Period",
                description: "Most policies have a 30-day grace period after expiry. Renew within this time to avoid policy lapse.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "📋",
                title: "Required Documents",
                description: "Keep your policy documents, ID proof, and previous premium receipts ready for quick processing.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "🔔",
                title: "Renewal Reminders",
                description: "We send renewal reminders 45 days before expiry via SMS and email. Update your contact details.",
                color: "from-orange-500 to-red-500"
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h4>
                <p className="text-gray-600 text-sm">{info.description}</p>
                <div className={`w-16 h-1 bg-gradient-to-r ${info.color} rounded-full mx-auto mt-4`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white relative z-10 overflow-hidden">
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
            className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Need Help with Renewal?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our dedicated renewal support team is here to assist you with any questions or concerns about your policy renewal process.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+919031007097"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">📞</span>
              Call Support: +91 9031007097
            </motion.a>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
              >
                <span className="mr-2">📧</span>
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Renewal Statistics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { number: "24hrs", label: "Average Processing Time", icon: "⚡" },
              { number: "98%", label: "Customer Satisfaction", icon: "😊" },
              { number: "10K+", label: "Policies Renewed", icon: "📋" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}