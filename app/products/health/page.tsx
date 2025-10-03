'use client'

import { useState } from 'react'
import { motion } from "motion/react"
import { sendEmail } from '@/lib/email'


export default function HealthInsurancePage() {
  const [formData, setFormData] = useState({
    age: '',
    members: '1',
    sumInsured: '5',
    city: '',
    name: '',
    mobile: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    try {
      await sendEmail({
        name: formData.name,
        type: window.location.href,
        mobile: formData.mobile,
        city: formData.city,
      })

      alert("✅ Thank you! We will send you health insurance quotes shortly.")
    } catch (error) {
      console.error("Email error:", error)
      alert("❌ Failed to send enquiry. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-extrabold mb-6"
        >
          Protect Your Health with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">
            Affordable Insurance Plans
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg max-w-2xl mx-auto text-blue-100"
        >
          Compare, choose and save money on your health insurance policy in just a few clicks. 💙⚡
        </motion.p>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Get Instant Quotes
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Fill out your details and receive the best health insurance options tailored for you. 🚀
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Age & Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Your Age</option>
                <option value="18-25">18-25 years</option>
                <option value="26-35">26-35 years</option>
                <option value="36-45">36-45 years</option>
                <option value="46-55">46-55 years</option>
                <option value="56-65">56-65 years</option>
                <option value="65+">65+ years</option>
              </select>

              <select
                value={formData.members}
                onChange={(e) => handleInputChange('members', e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="1">Self</option>
                <option value="2">Self + Spouse</option>
                <option value="3">Self + 1 Child</option>
                <option value="4">Self + Spouse + 1 Child</option>
                <option value="5">Self + Spouse + 2 Children</option>
                <option value="6">Self + Parents</option>
              </select>
            </div>

            {/* Sum Insured */}
            <select
              value={formData.sumInsured}
              onChange={(e) => handleInputChange('sumInsured', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sum Insured</option>
              <option value="3">₹3 Lakhs</option>
              <option value="5">₹5 Lakhs</option>
              <option value="10">₹10 Lakhs</option>
              <option value="15">₹15 Lakhs</option>
              <option value="25">₹25 Lakhs</option>
              <option value="50">₹50 Lakhs</option>
              <option value="100">₹1 Crore</option>
            </select>

            {/* City, Name, Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Your City"
                className="px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Full Name"
                className="px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
                placeholder="Mobile Number"
                className="px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all"
            >
              Get Free Quotes Now
            </motion.button>

            <p className="text-center text-sm text-gray-500">
              🔒 Secure • ⚡ Instant • 💯 Free Quotes
            </p>
          </form>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Health Insurance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: 'Affordable Premiums', desc: 'Compare and choose the most budget-friendly plan.' },
              { icon: '⚡', title: 'Instant Quotes', desc: 'Get personalized quotes in seconds without hassle.' },
              { icon: '🏥', title: 'Cashless Hospitals', desc: 'Access thousands of top hospitals across India.' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
