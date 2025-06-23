'use client'

import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

export default function JoinUsPage() {
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    phone: string;
    position: string;
    experience: string;
    resume: File | null;
    coverLetter: string;
    motivation: string;
  }>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: '',
    motivation: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const benefits = [
    {
      title: "Empowerment and Growth",
      description: "We invest in our employees' personal and professional development through training programs, mentorship, and continuous learning opportunities. Your growth is our priority!",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Innovative Environment",
      description: "Join a forward-thinking team that embraces innovation and creativity. We encourage new ideas and solutions to better serve our clients and adapt to the ever-evolving insurance landscape.",
      icon: "💡",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Commitment to Community",
      description: "At Citizen Savings & Credit IMF Pvt. we believe in giving back. Our community involvement initiatives provide opportunities for you to contribute positively and make a difference in the lives of others.",
      icon: "🤝",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Competitive Benefits",
      description: "We offer a comprehensive benefits package that includes health insurance, retirement plans, paid time off, and more, ensuring that you and your family are well taken care of.",
      icon: "💰",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards, ensuring transparency and trust in everything we do.",
      icon: "🛡️"
    },
    {
      title: "Customer-Centric",
      description: "Our clients are at the heart of our business. We strive to understand their needs and deliver personalized solutions.",
      icon: "❤️"
    },
    {
      title: "Teamwork",
      description: "Collaboration and communication are key to our success. We work together to achieve our goals and support one another.",
      icon: "👥"
    },
    {
      title: "Excellence",
      description: "We are committed to continuous improvement, setting high standards for ourselves and our services.",
      icon: "⭐"
    }
  ]

  const positions = [
    "Financial Advisor",
    "Insurance Agent",
    "Customer Service Representative",
    "Sales Executive",
    "Marketing Specialist",
    "Operations Manager",
    "IT Support",
    "Human Resources",
    "Accountant",
    "Business Development",
    "Other"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFormData(prev => ({
      ...prev,
      resume: file ?? null
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your application! We will review it and get back to you soon.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      coverLetter: '',
      motivation: ''
    })
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
            <span className="text-gray-700 font-semibold">Join Us</span>
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
              Join Us
            </motion.h1>
            
            <motion.h2 
              className="text-3xl lg:text-5xl font-semibold text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build Your Future Today!
            </motion.h2>
            
            <motion.p 
              className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Citizen Savings & Credit IMF Pvt. Ltd. we believe that our people are our greatest asset. We are committed to fostering a diverse, inclusive, and collaborative work environment where every team member can thrive. If you're passionate about making a difference and want to be part of a team dedicated to providing exceptional insurance solutions, you've come to the right place!
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

      {/* Why Work With Us Section */}
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
              Why Work With Us?
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* Our Values Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text mb-6">
              Our Values
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text mb-6">
              Join Our Team
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are looking for individuals who are eager to learn, grow, and contribute to a dynamic team. Whether you're an experienced professional or just starting your career, there's a place for you at Citizen Savings & Credit IMF Pvt.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
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
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
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

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position of Interest *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  >
                    <option value="">Select a position</option>
                    {positions.map((position, index) => (
                      <option key={index} value={position}>{position}</option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="e.g., 3 years, Fresh graduate, etc."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell us about yourself and why you want to join our team..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What motivates you to work with us? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                  placeholder="Share your motivation for joining our team..."
                />
              </motion.div>

              <motion.div 
                className="text-center pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
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
                      Submitting Application...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-yellow-500 to-green-500 text-white relative z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #f97316, #eab308, #22c55e)",
              "linear-gradient(90deg, #eab308, #22c55e, #f97316)",
              "linear-gradient(135deg, #22c55e, #f97316, #eab308)",
              "linear-gradient(180deg, #f97316, #eab308, #22c55e)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h3 
            className="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-orange-100 max-w-3xl mx-auto mb-8 leading-relaxed italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            "Join us today and be part of a team that values your contributions and empowers you to succeed!"
          </motion.p>
          
          <motion.p 
            className="text-lg text-orange-200 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Together, we can make a difference in the insurance industry and the lives of our clients. We can't wait to meet you!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-white text-orange-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors inline-block"
              >
                Contact HR
              </Link>
            </motion.div>
          </motion.div>

          {/* Additional Info Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: "🌟", title: "Career Growth", desc: "Multiple advancement opportunities" },
              { icon: "🤝", title: "Team Spirit", desc: "Collaborative work environment" },
              { icon: "💼", title: "Work-Life Balance", desc: "Flexible working arrangements" }
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
                <h4 className="text-lg font-bold text-yellow-200 mb-2">{item.title}</h4>
                <p className="text-orange-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}