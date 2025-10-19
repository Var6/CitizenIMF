'use client'

import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const products = [
    // Motor Insurance
    {
      id: 1,
      title: "Two Wheeler Insurance",
      description: "Comprehensive protection for your bike or scooter. Get coverage against accidents, theft, and third-party liability. Enjoy hassle-free claims and 24/7 roadside assistance for your two-wheeler.",
      category: "motor",
      subcategory: "two-wheeler",
      icon: "🏍️",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500",
      href: "/products/two-wheeler"
    },
    {
      id: 2,
      title: "Four Wheeler Insurance",
      description: "Complete car insurance coverage with comprehensive and third-party options. Protect your vehicle against accidents, theft, natural disasters, and enjoy cashless repairs at network garages.",
      category: "motor",
      subcategory: "four-wheeler",
      icon: "🚗",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500",
      href: "/products/four-wheeler"
    },
    {
      id: 3,
      title: "Commercial Motor Insurance",
      description: "Specialized insurance for commercial vehicles including trucks, buses, and fleet vehicles. Get comprehensive coverage for your business vehicles with competitive premiums.",
      category: "motor",
      subcategory: "commercial-motor",
      icon: "🚛",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500",
      href: "/products/commercial"
    },

    // Health & Life Insurance
    {
      id: 4,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family. Access to network hospitals, cashless treatment, and protection against rising medical costs. Choose from individual and family floater plans.",
      category: "health-life",
      subcategory: "health",
      icon: "🏥",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500",
      href: "/products/health"
    },
    {
      id: 5,
      title: "Personal Accident Insurance",
      description: "Financial protection against accidental injuries, disability, or death. Get lump sum payouts and coverage for medical expenses resulting from accidents. Affordable premiums with comprehensive benefits.",
      category: "health-life",
      subcategory: "personal-accident",
      icon: "⛑️",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-500",
      href: "/products/personal-accident"
    },
    {
      id: 6,
      title: "Life Insurance",
      description: "Secure your family's financial future with our life insurance plans. Choose from term plans, endowment policies, and ULIPs. Ensure your loved ones are protected even when you're not around.",
      category: "health-life",
      subcategory: "life",
      icon: "💝",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500",
      href: "/products/life"
    },

    // Business Insurance
    {
      id: 7,
      title: "Shop Insurance",
      description: "Protect your business premises, stock, and equipment against fire, theft, and other risks. Comprehensive coverage for retail shops, offices, and small businesses with flexible policy options.",
      category: "business",
      subcategory: "shop",
      icon: "🏪",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500",
      href: "/products/shop"
    },
    {
      id: 8,
      title: "Marine Cargo Insurance",
      description: "Comprehensive coverage for goods in transit by sea, air, or land. Protect your cargo against damage, loss, or theft during transportation. Essential for import-export businesses.",
      category: "business",
      subcategory: "marine-cargo",
      icon: "🚢",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500",
      href: "/products/marine-cargo"
    },
    {
      id: 9,
      title: "Keyman Insurance",
      description: "Protect your business against the loss of key employees. Financial security for your company in case of death or disability of crucial team members. Maintain business continuity and stability.",
      category: "business",
      subcategory: "keyman",
      icon: "👨‍💼",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500",
      href: "/products/keyman"
    },
    {
      id: 10,
      title: "Professional Indemnity Insurance",
      description: "Protection for professionals against claims of negligence, errors, or omissions in their services. Essential for consultants, doctors, lawyers, and other service professionals.",
      category: "business",
      subcategory: "professional-indemnity",
      icon: "⚖️",
      color: "from-slate-500 to-gray-600",
      bgColor: "bg-slate-500",
      href: "/products/professional-indemnity"
    },

    // Personal Insurance
    {
      id: 11,
      title: "Home Insurance",
      description: "Comprehensive protection for your home and belongings against fire, theft, natural disasters, and other risks. Coverage for structure, contents, and personal liability with affordable premiums.",
      category: "personal",
      subcategory: "home",
      icon: "🏠",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500",
      href: "/products/home"
    },
    {
      id: 12,
      title: "Travel Insurance",
      description: "Travel worry-free with comprehensive coverage for domestic and international trips. Protection against trip cancellations, medical emergencies, lost baggage, and flight delays.",
      category: "personal",
      subcategory: "travel",
      icon: "✈️",
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-sky-500",
      href: "/products/travel"
    },

    // Investment Products
    {
      id: 13,
      title: "Mutual Funds",
      description: "Diversified investment opportunities with professional fund management. Choose from equity, debt, and hybrid funds to build wealth over time. Start your investment journey with systematic investment plans.",
      category: "investment",
      subcategory: "mutual-funds",
      icon: "📈",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500",
      href: "/products/mutual-funds"
    },
    {
      id: 14,
      title: "Guaranteed Return Plans",
      description: "Secure investment options with guaranteed returns. Perfect for conservative investors seeking stable growth with capital protection. Ideal for achieving specific financial goals with certainty.",
      category: "investment",
      subcategory: "guaranteed-returns",
      icon: "🛡️",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-500",
      href: "/products/guaranteed-returns"
    },
    {
      id: 15,
      title: "Pension Plans",
      description: "Plan for a comfortable retirement with our pension and annuity products. Systematic wealth creation during working years and regular income post-retirement. Secure your golden years today.",
      category: "investment",
      subcategory: "pension",
      icon: "👴",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500",
      href: "/products/pension"
    },
    {
      id: 16,
      title: "Child Plans",
      description: "Secure your child's future with dedicated education and marriage plans. Systematic savings with insurance coverage to ensure your child's dreams are protected against uncertainties.",
      category: "investment",
      subcategory: "child-plans",
      icon: "👶",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-500",
      href: "/products/child-plans"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', icon: '🎯' },
    { id: 'motor', name: 'Motor Insurance', icon: '🚗' },
    { id: 'health-life', name: 'Health & Life', icon: '🏥' },
    { id: 'business', name: 'Business Insurance', icon: '🏢' },
    { id: 'personal', name: 'Personal Insurance', icon: '🏠' },
    { id: 'investment', name: 'Investment', icon: '💰' }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Breadcrumb */}
      <motion.div 
        className="bg-white/10 backdrop-blur-sm py-4 relative z-10 border-b border-white/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white font-semibold">Products</span>
          </nav>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="py-20 text-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-6xl lg:text-8xl font-black mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text">
                Products
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-3xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Complete Insurance & Investment Solutions
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From motor and health insurance to investment plans and business protection, we offer comprehensive solutions tailored to your needs. Discover the right protection and growth opportunities for you and your family.
            </motion.p>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 bg-white/5 backdrop-blur-sm relative z-10 border-y border-white/10">
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
                className="w-full px-6 py-4 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:ring-4 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300 shadow-lg"
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
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {filteredProducts.map((product, index) => (
              <Link href={product.href} key={product.id}>


              <motion.div
                key={product.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 overflow-hidden border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                layout
                >
                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${product.color} p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="bg-slate-900/90 backdrop-blur-lg rounded-3xl h-full w-full" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 ${product.bgColor} rounded-2xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                    {product.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                   
                      <motion.button 
                        className={`w-full bg-gradient-to-r ${product.color} text-white px-4 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all text-sm`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                 
                    <motion.button 
                      className="w-full border border-white/30 text-gray-300 px-4 py-2.5 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      >
                      Get Quote
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </Link>
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
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white relative z-10 overflow-hidden">        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h3 
            className="text-4xl lg:text-6xl font-black mb-6 text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Protected?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl mx-auto mb-8"
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
              className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors"
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