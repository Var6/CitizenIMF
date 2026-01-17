'use client'

import { useState, useEffect, useRef } from 'react'

export default function ClaimsBlogNewsletter() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [activeTab, setActiveTab] = useState('claims')
  const sectionRef = useRef(null)

  const claimSteps = [
    {
      step: 1,
      title: "Report Your Claim",
      description: "Submit your claim online or call our 24/7 helpline",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      )
    },
    {
      step: 2,
      title: "Document Review",
      description: "Our experts review your documents within 24 hours",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      )
    },
    {
      step: 3,
      title: "Quick Approval",
      description: "Get approved and receive your money within 48 hours",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    }
  ]

  const blogPosts = [
    {
      title: "Understanding Your Financial Rights as a Citizen",
      excerpt: "Learn about your fundamental financial rights and how to protect them in today's economy.",
      date: "June 20, 2025",
      readTime: "5 min read",
      category: "Financial Education",
      image: "/blog/blog1.jpg"
    },
    {
      title: "Top 10 Investment Strategies for 2025",
      excerpt: "Discover the most effective investment strategies that are working in the current market conditions.",
      date: "June 18, 2025",
      readTime: "8 min read",
      category: "Investment",
      image: "/blog/blog2.jpg"
    },
    {
      title: "How to Build Emergency Fund in 6 Months",
      excerpt: "Step-by-step guide to building a solid emergency fund that will protect you from financial uncertainties.",
      date: "June 15, 2025",
      readTime: "6 min read",
      category: "Savings",
      image: "/blog/blog3.jpg"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setEmail('')
    alert('Thank you for subscribing to our newsletter!')
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div 
          className={`flex justify-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('claims')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'claims'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Claims Process
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'blog'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Latest Blog
            </button>
            <button
              onClick={() => setActiveTab('newsletter')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'newsletter'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Newsletter
            </button>
          </div>
        </div>

        {/* Claims Process Section */}
        {activeTab === 'claims' && (
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Claims Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Filing a claim has never been easier. Follow our streamlined 3-step process for quick resolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {claimSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-600 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="text-blue-600 mb-6 mt-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

           
          </div>
        )}

        {/* Blog Section */}
        {activeTab === 'blog' && (
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Insights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with our latest articles on financial planning, investment strategies, and market trends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-500">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4 bg-white/90 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105">
                View All Articles
              </button>
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        {activeTab === 'newsletter' && (
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-orange-500 via-yellow-500 to-green-500 rounded-3xl p-12 text-black">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Stay Updated with Our Newsletter
                </h2>
                <p className="text-xl mb-8 text-orange-600">
                  Get the latest financial insights, investment tips, and exclusive offers delivered to your inbox weekly.
                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">50K+</div>
                    <div className="text-orange-600">Subscribers</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">Weekly</div>
                    <div className="text-orange-600">Updates</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-orange-600">Free Content</div>
                  </div>
                </div>

                <p className="text-sm text-orange-200 mt-6">
                  * We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}