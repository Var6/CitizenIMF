'use client'

import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const products = [
    {
      id: 1,
      title: "Mutual Funds",
      description: "Unlock your financial potential with our expertly managed mutual funds. Diversify your investments and enjoy the benefits of professional management. Start building your wealth today for a secure tomorrow!",
      category: "investment",
      icon: "📈",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "Guaranteed Return Plans",
      description: "Secure your financial future with our Guaranteed Return Plans, offering peace of mind and predictable growth. Benefit from consistent returns while safeguarding your investments. Start planning for a worry-free tomorrow today!",
      category: "investment",
      icon: "🛡️",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500"
    },
    {
      id: 3,
      title: "Pension Plans",
      description: "Prepare for a comfortable retirement with our flexible Pension Plans designed to ensure financial stability. Enjoy regular income and peace of mind as you plan for your future. Invest in your golden years today!",
      category: "retirement",
      icon: "👴",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500"
    },
    {
      id: 4,
      title: "Term Plans",
      description: "Protect your loved ones with our affordable Term Plans, providing financial security in uncertain times. Enjoy peace of mind knowing your family is covered for a specified term. Choose a plan that fits your needs and secure their future today!",
      category: "life",
      icon: "💝",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500"
    },
    {
      id: 5,
      title: "Child Plans",
      description: "Invest in your child's future with our comprehensive Child Plans, designed to provide financial security for their education and dreams. Enjoy flexible options that grow alongside your child. Secure their bright tomorrow today!",
      category: "family",
      icon: "👶",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500"
    },
    {
      id: 6,
      title: "All Vehicle Insurance",
      description: "Get complete protection for your vehicle with our All Vehicle Insurance, covering cars, bikes, and more. Enjoy peace of mind on the road with tailored plans that fit your needs. Drive confidently knowing you're fully insured!",
      category: "vehicle",
      icon: "🚗",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500"
    },
    {
      id: 7,
      title: "Personal Health Insurance",
      description: "Protect your health and well-being with our comprehensive Personal Health Insurance plans. Enjoy access to quality medical care and financial support during emergencies. Invest in your health today for a secure tomorrow!",
      category: "health",
      icon: "🏥",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500"
    },
    {
      id: 8,
      title: "Family Health Insurance",
      description: "Ensure your family's health and safety with our Family Health Insurance plans, offering comprehensive coverage for all members. Enjoy peace of mind with access to quality healthcare and financial protection. Safeguard your loved ones' well-being today!",
      category: "health",
      icon: "👨‍👩‍👧‍👦",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500"
    },
    {
      id: 9,
      title: "Critical Illness Plans",
      description: "Prepare for the unexpected with our Critical Illness Plans, designed to provide financial support during challenging times. Receive a lump sum payout upon diagnosis of covered illnesses, ensuring you can focus on recovery. Protect your future and your loved ones today!",
      category: "health",
      icon: "🚑",
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-500"
    },
    {
      id: 10,
      title: "Personal Accident Insurance",
      description: "Protect yourself and your loved ones with Personal Accident Insurance, offering financial support in the event of accidental injury or death. Gain peace of mind knowing you're covered during life's unexpected moments.",
      category: "accident",
      icon: "⛑️",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500"
    },
    {
      id: 11,
      title: "Travel Insurance",
      description: "Travel worry-free with our comprehensive Travel Insurance, designed to protect you against unexpected events. From trip cancellations to medical emergencies, we've got you covered. Explore the world with confidence and peace of mind!",
      category: "travel",
      icon: "✈️",
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-sky-500"
    },
    {
      id: 12,
      title: "MSME/Shop Insurance",
      description: "Safeguard your business with our MSME/Shop Insurance, tailored to protect your assets and operations. Enjoy comprehensive coverage against risks like theft, fire, and liability. Secure your livelihood today and focus on growing your business!",
      category: "business",
      icon: "🏪",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', icon: '🎯' },
    { id: 'investment', name: 'Investment', icon: '💰' },
    { id: 'health', name: 'Health', icon: '🏥' },
    { id: 'life', name: 'Life Insurance', icon: '💝' },
    { id: 'vehicle', name: 'Vehicle', icon: '🚗' },
    { id: 'family', name: 'Family', icon: '👨‍👩‍👧‍👦' },
    { id: 'retirement', name: 'Retirement', icon: '👴' },
    { id: 'travel', name: 'Travel', icon: '✈️' },
    { id: 'business', name: 'Business', icon: '🏪' },
    { id: 'accident', name: 'Accident', icon: '⛑️' }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
          className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl"
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
            <span className="text-gray-700 font-semibold">Products</span>
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
              Products
            </motion.h1>
            
            <motion.h2 
              className="text-3xl lg:text-5xl font-semibold text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're covering all the insurance fields
            </motion.h2>
            
            <motion.p 
              className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We cover all insurance fields to ensure comprehensive protection for you and your assets. From health and auto to home and life, our tailored solutions meet your unique needs. Trust us to safeguard what matters most!
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

      {/* Search and Filter Section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Search Bar */}
            <motion.div 
              className="relative w-full lg:w-96"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700 bg-white shadow-lg"
              />
              <motion.div 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                whileHover={{ scale: 1.1 }}
              >
                🔍
              </motion.div>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                layout
              >
                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Floating Icon */}
                <motion.div 
                  className="relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-20 h-20 ${product.bgColor} rounded-2xl flex items-center justify-center text-3xl text-white mb-6 mx-auto shadow-lg`}>
                    {product.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {product.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.button 
                      className={`bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                    <motion.button 
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-500 hover:text-blue-500 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Quote
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${product.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h3 
            className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Protected?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose from our comprehensive range of insurance and investment products. Get personalized quotes and expert advice from our team.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Expert
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}