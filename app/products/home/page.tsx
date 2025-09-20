'use client'
import { sendEmail } from '@/lib/email';
import { useState } from 'react'

const ChevronDown = (props:any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function HomeInsurance() {
  const [formData, setFormData] = useState({
    propertyType: '',
    propertyValue: '',
    area: '',
    location: '',
    ownerName: '',
    mobile: ''
  })
  const [openFaq, setOpenFaq] = useState(0)

  const propertyTypes = [
    { name: 'Apartment', icon: '🏢', desc: 'Flat in building' },
    { name: 'Villa', icon: '🏠', desc: 'Independent house' },
    { name: 'Bungalow', icon: '🏡', desc: 'Large independent home' },
    { name: 'Studio', icon: '🏨', desc: 'Single room unit' },
    { name: 'Duplex', icon: '🏘️', desc: 'Two-floor apartment' },
    { name: 'Penthouse', icon: '🌆', desc: 'Top floor luxury' }
  ]

  const coveragePlans = [
    {
      id: 'basic',
      name: 'Essential Cover',
      icon: '🏠',
      price: '₹3,500/year*',
      features: ['Fire & explosion coverage', 'Natural disaster protection', 'Theft & burglary cover', 'Temporary accommodation']
    },
    {
      id: 'comprehensive',
      name: 'Complete Protection',
      icon: '🛡️',
      price: '₹8,900/year*',
      features: ['Structure & contents cover', 'Personal belongings protection', 'Liability coverage', 'Home appliance insurance', 'Loss of rent coverage', '24/7 emergency assistance']
    }
  ]

  const faqs = [
    {
      question: "What does home insurance cover?",
      answer: "Home insurance covers your property structure, personal belongings, and provides liability protection against damages from fire, theft, natural disasters, and accidental damages."
    },
    {
      question: "Is home insurance mandatory in India?",
      answer: "While not legally mandatory, home insurance is highly recommended and often required by banks if you have a home loan. It protects your biggest investment."
    },
    {
      question: "What factors affect my home insurance premium?",
      answer: "Premium depends on property value, location, age of property, security measures, previous claims, and coverage amount selected."
    }
  ]

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     try {
    await sendEmail({
      name: formData.ownerName,
      type: window.location.href, // 🔥 send current page URL
      mobile: formData.mobile,
      city: formData.location,
    })

    alert("✅ Thank you! We will send you personal accident insurance quotes shortly.")
  } catch (error) {
    console.error("Email error:", error)
    alert("❌ Failed to send enquiry. Please try again.")
  }
}

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Home
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Insurance</span>
              </h1>
              <p className="text-lg text-amber-100 mb-6">
                Protect your dream home with comprehensive coverage. Safeguard your property, belongings, and family from unexpected damages starting at ₹3,500/year.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Get Home Quote</h3>
              
              <div className="space-y-3">
                <select
                  value={formData.propertyType}
                  onChange={(e) => handleInputChange('propertyType', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Select Property Type</option>
                  <option value="apartment">Apartment/Flat</option>
                  <option value="villa">Independent House/Villa</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="studio">Studio Apartment</option>
                  <option value="duplex">Duplex</option>
                  <option value="penthouse">Penthouse</option>
                </select>

                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={formData.propertyValue}
                    onChange={(e) => handleInputChange('propertyValue', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="">Property Value</option>
                    <option value="10-25">₹10-25 Lakhs</option>
                    <option value="25-50">₹25-50 Lakhs</option>
                    <option value="50-100">₹50 Lakhs-1 Crore</option>
                    <option value="100-200">₹1-2 Crores</option>
                    <option value="200+">₹2+ Crores</option>
                  </select>

                  <select
                    value={formData.area}
                    onChange={(e) => handleInputChange('area', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-500"
                    required
                  >
                    <option value="">Carpet Area</option>
                    <option value="<500">Under 500 sq ft</option>
                    <option value="500-1000">500-1000 sq ft</option>
                    <option value="1000-1500">1000-1500 sq ft</option>
                    <option value="1500-2500">1500-2500 sq ft</option>
                    <option value="2500+">2500+ sq ft</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City/Location"
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-500"
                    required
                  />

                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    placeholder="Owner Name"
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-amber-500"
                  required
                />

                <button
                  onClick={()=>handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Get Home Insurance Quotes
                </button>
                <p className="text-center text-sm text-gray-500">
                  🏠 Property Protection • 💰 Affordable Rates • 🔐 Secure Coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">We Cover All Property Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {propertyTypes.map((property, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-all group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{property.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{property.name}</h3>
                <p className="text-xs text-gray-500">{property.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text mb-12">
            Choose Your Home Protection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coveragePlans.map((plan, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Home Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔥', title: 'Fire Protection', desc: 'Complete coverage against fire damages' },
              { icon: '🌪️', title: 'Natural Disasters', desc: 'Protection from floods, earthquakes, storms' },
              { icon: '🚨', title: 'Theft Coverage', desc: 'Safeguard against burglary and theft' },
              { icon: '🏨', title: 'Alternative Stay', desc: 'Temporary accommodation during repairs' }
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Home Insurance FAQs</h2>
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