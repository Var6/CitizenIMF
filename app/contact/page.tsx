'use client'

import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone Number",
      value: "+91 9031007097",
      description: "Call us anytime for immediate assistance",
      color: "from-blue-500 to-cyan-500",
      href: "tel:+919031007097"
    },
    {
      icon: "📧",
      title: "Email Address",
      value: "hello@citizenimf.com",
      description: "Send us your queries and we'll respond quickly",
      color: "from-green-500 to-emerald-500",
      href: "mailto:citizenimf@gmail.com"
    },
    {
      icon: "📍",
      title: "Office Address",
      value: "C/o Shanti Devi(Besides Irrigation Office), By Pass Road, Anisabad, Patna -2",
      description: "Visit us at our office for in-person consultation",
      color: "from-orange-500 to-red-500",
      href: "https://maps.google.com"
    }
  ]

  const serviceTypes = [
    "Life Insurance",
    "Health Insurance",
    "Vehicle Insurance",
    "Mutual Funds",
    "Pension Plans",
    "Child Plans",
    "Term Plans",
    "Travel Insurance",
    "Business Insurance",
    "General Inquiry",
    "Partnership Inquiry",
    "Career Opportunity"
  ]

  const businessHours = [
    { day: "Wednesday - Monday", time: "10:00 AM - 6:00 PM" },
    { day: "Tusday", time: "Closed" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for contacting us! We will get back to you within 24 hours.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: ''
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
            <span className="text-gray-700 font-semibold">Contact</span>
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
              Contact
            </motion.h1>
            
            
            
            <motion.p 
              className="text-2xl text-blue-100 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're here to listen and support.
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

      {/* Contact Information Cards */}
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
              Get In Touch
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to us through any of the following channels. We're always ready to help you with your insurance and financial needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {info.icon}
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {info.title}
                  </h4>
                  
                  <motion.a
                    href={info.href}
                    className={`text-lg font-semibold text-transparent bg-gradient-to-r ${info.color} bg-clip-text hover:opacity-80 transition-opacity block mb-3`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {info.value}
                  </motion.a>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info.description}
                  </p>
                  
                  <motion.div 
                    className={`w-20 h-1 bg-gradient-to-r ${info.color} rounded-full mx-auto mt-6`}
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

      {/* Contact Form and Business Hours */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
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
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
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
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
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
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
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
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      placeholder="Enter the subject"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </motion.div>

                  <motion.div 
                    className="text-center pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
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
                          Sending Message...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Business Hours & Additional Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Business Hours */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6 text-yellow-300">Business Hours</h4>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-between items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-yellow-200">{schedule.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <motion.div 
                className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-2xl font-bold mb-4 text-yellow-300">Need Immediate Help?</h4>
                <p className="text-green-100 mb-6">
                  For urgent matters, call us directly or send a WhatsApp message for quick response.
                </p>
                <div className="space-y-3">
                  <motion.a
                    href="tel:+919031007097"
                    className="flex items-center bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-2xl mr-3">📞</span>
                    <span className="font-semibold">Call Now</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919031007097"
                    className="flex items-center bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-2xl mr-3">💬</span>
                    <span className="font-semibold">WhatsApp</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div 
                className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-2xl font-bold mb-4 text-yellow-300">Visit Our Office</h4>
                <p className="text-orange-100 mb-4 text-sm">
                  Come meet us in person for detailed consultation and personalized service.
                </p>
                <motion.a
                  href="https://www.google.com/maps/place/Citizen+Bachat+Evam+sakh+Sahkari+Samiti+Limited/@25.5831537,85.0957444,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-2xl mr-3">🗺️</span>
                  <span className="font-semibold">Get Directions</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text mb-6">
              Frequently Asked Questions
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 2-4 hours during business hours, and within 24 hours on weekends."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes, we provide free initial consultations to understand your needs and recommend the best solutions for you."
              },
              {
                question: "What documents do I need for insurance applications?",
                answer: "Required documents vary by product, but generally include ID proof, address proof, income proof, and medical reports if applicable."
              },
              {
                question: "Can I modify my policy after purchase?",
                answer: "Yes, most policies allow modifications. Our team will guide you through the process and explain any implications."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}