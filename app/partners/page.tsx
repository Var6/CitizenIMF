'use client'

import { useState, useEffect } from 'react'
import { motion } from "motion/react"
import Link from 'next/link'
import Image from 'next/image'

export default function PartnersPage() {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

 const partners = [
  { id: 1, name: 'bajaj', logo: '/partners/bajaj.jpg', category: 'general', established: '2001' },
  { id: 2, name: 'care', logo: '/partners/care.jpg', category: 'health', established: '2012' },
  { id: 3, name: 'icic', logo: '/partners/icic.jpg', category: 'general', established: '2001' },
  { id: 4, name: 'lic', logo: '/partners/lic.jpg', category: 'life', established: '1956' },
  { id: 5, name: 'max-life', logo: '/partners/max-life.jpg', category: 'life', established: '2000' },
  { id: 6, name: 'national', logo: '/partners/national.jpg', category: 'general', established: '1906' },
  { id: 7, name: 'niva', logo: '/partners/niva.jpg', category: 'health', established: '2008' },
  { id: 8, name: 'pnb', logo: '/partners/pnb.jpg', category: 'life', established: '2001' },
  { id: 9, name: 'tata', logo: '/partners/tata.jpg', category: 'general', established: '2001' },
];

  const categories = [
    { id: 'all', name: 'All Partners', icon: '🤝', color: 'from-blue-500 to-purple-500' },
    { id: 'life', name: 'Life Insurance', icon: '💝', color: 'from-green-500 to-emerald-500' },
    { id: 'general', name: 'General Insurance', icon: '🛡️', color: 'from-orange-500 to-red-500' },
    { id: 'mutual', name: 'Mutual Funds', icon: '📈', color: 'from-purple-500 to-pink-500' },
  ]

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
      description: "At Citizen Savings & Credit IMF Pvt. Ltd. we believe in giving back. Our community involvement initiatives provide opportunities for you to contribute positively and make a difference in the lives of others.",
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

  const filteredPartners = partners.filter(partner => 
    selectedCategory === 'all' || partner.category === selectedCategory
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prev) => (prev + 1) % partners.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [partners.length])

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
            <span className="text-gray-700 font-semibold">Our Partners</span>
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
              Our Partners
            </motion.h1>
            
            <motion.h2 
              className="text-3xl lg:text-5xl font-semibold text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Trustworthy Partner in Protection Solutions.
            </motion.h2>
            
            <motion.p 
              className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Citizen Savings & Credit IMF Pvt. we believe that our people are our greatest asset. We are committed to fostering a diverse, inclusive, and collaborative work environment where every team member can thrive. If you're passionate about making a difference and want to be part of a team dedicated to providing exceptional insurance solutions, you've come to the right place!
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

      {/* Partner Categories Filter */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
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
        </div>
      </section>

      {/* Partners Grid */}
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
              Our Trusted Partners
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry-leading companies to provide you with the best financial and insurance solutions.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            layout
          >
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                layout
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10 text-center">
                  <div className="relative h-20 flex items-center justify-center mb-4">
                    <div className="w-24 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                      <span className="text-gray-400 text-xs block align-middle items-center">
                        <Image src={partner.logo} alt={partner.name} width={120} height={60} className="object-contain transition-all duration-300 transform group-hover:scale-110" />
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {partner.name}
                  </h4>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    Since {partner.established}
                  </p>

                  <motion.div 
                    className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
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
            <h3 className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text mb-6">
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

      {/* Join Our Team CTA */}
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
            Join Our Team
          </motion.h3>
          
          <motion.p 
            className="text-xl text-orange-100 max-w-4xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We are looking for individuals who are eager to learn, grow, and contribute to a dynamic team. Whether you're an experienced professional or just starting your career, there's a place for you at Citizen Savings & Credit IMF Pvt.
          </motion.p>
          
          <motion.p 
            className="text-lg text-orange-200 mb-6 italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            "Join us today and be part of a team that values your contributions and empowers you to succeed!"
          </motion.p>
          
          <motion.p 
            className="text-lg text-orange-200 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Together, we can make a difference in the insurance industry and the lives of our clients. We can't wait to meet you!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/join-us" 
                className="bg-white text-orange-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-block"
              >
                Join Our Team
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors inline-block"
              >
                Become a Partner
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}