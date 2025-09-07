'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    insurance: 0,
    team: 0,
    customers: 0,
    success: 0
  })
  const sectionRef = useRef(null)

  const finalValues = {
    insurance: 2600,
    team: 89,
    customers: 2800,
    success: 99
  }

  const values = [
    {
      title: "Integrity",
      description: "We operate with honesty and transparency, ensuring you always know what you're getting.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500"
    },
    {
      title: "Customer Focus",
      description: "Your needs drive our decisions. We listen, understand, and tailor our services to suit you.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.3-1.74-2.39-1.74-.34 0-.68.07-1 .2L15 8.65V12H9V7c0-.55-.45-1-1-1s-1 .45-1 1v5.65l-1.57-1.83c-.32-.13-.66-.2-1-.2-1.09 0-2.05.72-2.39 1.74L0 20h2.5v2h19v-2z"/>
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500"
    },
    {
      title: "Innovation",
      description: "The insurance landscape is always evolving, and so are we. We embrace technology to enhance your experience.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500"
    },
    {
      title: "Community Commitment",
      description: "We believe in giving back. We actively support local initiatives and charities to strengthen the communities we serve.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500"
    }
  ]

  const features = [
    {
      title: "Experienced Team",
      description: "Our knowledgeable agents are here to guide you every step of the way, providing expert advice and personalized service.",
      icon: "👥"
    },
    {
      title: "Competitive Rates",
      description: "We work hard to find the best coverage at prices that fit your budget.",
      icon: "💰"
    },
    {
      title: "Claims Support",
      description: "Our dedicated claims team is here to assist you promptly and fairly when you need it most.",
      icon: "🛡️"
    }
  ]

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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          insurance: Math.floor(finalValues.insurance * progress),
          team: Math.floor(finalValues.team * progress),
          customers: Math.floor(finalValues.customers * progress),
          success: Math.floor(finalValues.success * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(finalValues)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
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
          className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"
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
            <span className="text-gray-700 font-semibold">About Us</span>
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
              About Us
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-blue-100 mb-8 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About company
            </motion.p>
            
            <motion.h2 
              className="text-3xl lg:text-5xl font-semibold text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Trustworthy Partner in Financial Solutions.
            </motion.h2>
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

      {/* Company Introduction */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text">
                  Citizen Savings & Credit IMF Pvt. Ltd.
                </span>
              </h3>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Welcome to Citizen Savings & Credit IMF Pvt. Ltd. where your peace of mind is our priority. Established in 2021, we have dedicated ourselves to providing comprehensive wealth planning solutions tailored to meet the diverse needs of our clients.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                With a commitment to excellence and a passion for service, we are here to protect what matters most to you.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-3xl p-8 text-white shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-3xl font-bold mb-4 text-yellow-300">Products</h4>
                <p className="text-blue-100 mb-4 text-lg">We're covering almost every financial field.</p>
                <p className="text-sm text-blue-200">
                  We cover all financial fields to ensure comprehensive planning for you and your assets.
                </p>
                
                <motion.div 
                  className="mt-6 flex space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {['💼', '📈', '🛡️', '💰'].map((emoji, index) => (
                    <motion.div
                      key={index}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl backdrop-blur-sm"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text mb-6">
              Our Services
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Citizen Savings & Credit is an insurance marketing firm that offers a comprehensive & diverse range of professional services spanning non-life insurances including health insurance, life insurance, pension plans and mutual funds.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10">
                <h4 className="text-3xl font-bold mb-4 text-yellow-300">Mutual Funds</h4>
                <p className="text-green-100 mb-6 text-lg leading-relaxed">
                  Mutual fund is a collection of money from many investors that is used to buy a variety of investments, such as stocks, bonds, and government securities. Investors in a mutual fund are known as unit-holders, and each unit represents a portion of the fund's holdings.
                </p>
                <motion.button 
                  className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Mutual Fund Journey
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                content: "We are committed to offer advice on all types of investments that fit your style, goals, and risk tolerance, developing and adapting investing strategy as needed.",
                icon: "🎯",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Vision",
                content: "To have a positive impact on the lives of our clients by helping them achieve their goals and obtain peace of mind over their finances.",
                icon: "👁️",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Who We Are",
                content: "A group of rich experienced financial advisors based at the capital of Bihar.",
                icon: "👥",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <motion.div 
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
                <motion.div 
                  className={`w-20 h-1 bg-gradient-to-r ${item.color} rounded-full mx-auto mt-6`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
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
                className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                
                <motion.div 
                  className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.icon}
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{value.description}</p>
                
                <motion.div 
                  className={`w-16 h-1 bg-gradient-to-r ${value.color} rounded-full mx-auto mt-4`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white relative z-10 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #2563eb, #9333ea, #059669)",
              "linear-gradient(90deg, #9333ea, #059669, #2563eb)",
              "linear-gradient(135deg, #059669, #2563eb, #9333ea)",
              "linear-gradient(180deg, #2563eb, #9333ea, #059669)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text">
              Why Choose Us?
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white/10 rounded-3xl p-8 backdrop-blur-lg border border-white/20 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="text-6xl mb-4 text-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-2xl font-bold mb-4 text-yellow-300 text-center">{feature.title}</h4>
                <p className="text-blue-100 text-center leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text mb-6">
              Our Achievements
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: counters.insurance, label: "Gave insurance", color: "from-blue-500 to-cyan-500", suffix: "" },
              { value: counters.team, label: "Professional team", color: "from-green-500 to-emerald-500", suffix: "+" },
              { value: counters.customers, label: "Satisfied customers", color: "from-orange-500 to-red-500", suffix: "" },
              { value: counters.success, label: "Our success rate", color: "from-purple-500 to-pink-500", suffix: "%" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <motion.div 
                  className="relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1, type: "spring", bounce: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-5xl font-bold mb-4 text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`}>
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div 
                  className={`absolute top-4 right-4 w-6 h-6 bg-gradient-to-br ${stat.color} rounded-full opacity-20`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Family */}
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
        
        {/* Floating Decorative Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h3 
            className="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join Our Family
          </motion.h3>
          
          <motion.p 
            className="text-xl text-orange-100 max-w-4xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            When you choose Citizen Savings & Credit IMF Pvt. you're not just a policyholder; you're part of our family. We value your trust and are committed to building lasting relationships with our clients. Let us help you navigate the complexities of insurance so you can focus on what truly matters—your life and your business.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/join-us" 
                className="bg-white text-orange-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform shadow-lg inline-block"
              >
                Join Us Today
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors inline-block"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: "🏆", title: "Award Winning", desc: "Industry recognized excellence" },
              { icon: "🔒", title: "100% Secure", desc: "Your data is protected" },
              { icon: "📞", title: "24/7 Support", desc: "We're here when you need us" }
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