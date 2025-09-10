'use client'
import { useState } from 'react'

const ChevronDown = (props:any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function ShopInsurance() {
  const [formData, setFormData] = useState({
    businessType: '',
    shopSize: '',
    location: '',
    ownerName: '',
    mobile: ''
  })
  const [openFaq, setOpenFaq] = useState(0)

  const businessTypes = [
    { name: 'Retail Store', icon: '🛍️', desc: 'General merchandise' },
    { name: 'Restaurant', icon: '🍽️', desc: 'Food & beverage' },
    { name: 'Electronics', icon: '📱', desc: 'Electronic goods' },
    { name: 'Pharmacy', icon: '💊', desc: 'Medical store' },
    { name: 'Clothing', icon: '👕', desc: 'Fashion & apparel' },
    { name: 'Grocery', icon: '🛒', desc: 'Food & essentials' }
  ]

  const coverageTypes = [
    {
      id: 'basic',
      name: 'Fire & Theft',
      icon: '🔥',
      price: '₹2,500/year*',
      features: ['Fire damage coverage', 'Theft protection', 'Basic public liability', 'Emergency support']
    },
    {
      id: 'comprehensive',
      name: 'Complete Protection',
      icon: '🏪',
      price: '₹8,500/year*',
      features: ['All perils coverage', 'Stock & inventory', 'Business interruption', 'Equipment protection', 'Cyber liability', '24/7 claim support']
    }
  ]

  const faqs = [
    {
      question: "What does shop insurance cover?",
      answer: "Shop insurance covers your business premises, stock, equipment, and provides liability protection against customer injuries or property damage claims."
    },
    {
      question: "Is shop insurance mandatory?",
      answer: "While not legally mandatory, shop insurance is essential to protect your business investment and comply with lease requirements from most landlords."
    },
    {
      question: "How is the premium calculated?",
      answer: "Premium depends on your business type, shop area, location, stock value, and coverage amount. High-risk businesses may have higher premiums."
    }
  ]

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log('Shop insurance form submitted:', formData)
    alert('Thank you! We\'ll send you competitive shop insurance quotes within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br h-screen from-orange-600 via-red-600 to-pink-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Shop & Commercial
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Insurance</span>
              </h1>
              <p className="text-lg text-orange-100 mb-6">
                Protect your business with comprehensive coverage for shops, stores, and commercial establishments. Starting from just ₹2,500/year.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Get Instant Quote</h3>
              
              <div className="space-y-3">
                <select
                  value={formData.businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select Business Type</option>
                  <option value="retail">Retail Store</option>
                  <option value="restaurant">Restaurant/Cafe</option>
                  <option value="electronics">Electronics Shop</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="clothing">Clothing Store</option>
                  <option value="grocery">Grocery Store</option>
                  <option value="other">Other</option>
                </select>

                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={formData.shopSize}
                    onChange={(e) => handleInputChange('shopSize', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">Shop Size</option>
                    <option value="<500">Under 500 sq ft</option>
                    <option value="500-1000">500-1000 sq ft</option>
                    <option value="1000-2000">1000-2000 sq ft</option>
                    <option value="2000+">Above 2000 sq ft</option>
                  </select>

                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City/Location"
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    placeholder="Owner Name"
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-orange-500"
                    required
                  />

                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    placeholder="Mobile Number"
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Get Free Quotes Now
                </button>
                <p className="text-center text-sm text-gray-500">
                  🔒 Secure • ⚡ Instant • 💯 Free Quotes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">We Cover All Business Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-all group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{business.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{business.name}</h3>
                <p className="text-xs text-gray-500">{business.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text mb-12">
            Choose Your Protection Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coverageTypes.map((plan, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
                    {plan.price}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Shop Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💼', title: 'Business Protection', desc: 'Complete coverage for your shop and inventory' },
              { icon: '⚡', title: 'Quick Claims', desc: 'Fast claim processing and settlement' },
              { icon: '💰', title: 'Affordable Rates', desc: 'Competitive premiums for all business sizes' },
              { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock customer assistance' }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex justify-between items-center text-left p-6 font-semibold text-gray-800"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}