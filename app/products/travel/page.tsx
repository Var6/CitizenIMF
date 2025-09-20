"use client"
import { sendEmail } from '@/lib/email';
import { useState } from 'react'

const ChevronDown = (props:any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function TravelInsurance() {
  const [formData, setFormData] = useState({
    destination: '',
    travelType: '',
    duration: '',
    travelers: '',
    age: '',
    mobile: ''
  })
  const [openFaq, setOpenFaq] = useState(0)

  const destinations = [
    { name: 'Asia', icon: '🏯', desc: 'Thailand, Japan, Singapore' },
    { name: 'Europe', icon: '🏰', desc: 'UK, France, Germany' },
    { name: 'Americas', icon: '🗽', desc: 'USA, Canada, Brazil' },
    { name: 'Australia', icon: '🦘', desc: 'Australia, New Zealand' },
    { name: 'Middle East', icon: '🕌', desc: 'UAE, Qatar, Saudi' },
    { name: 'Domestic', icon: '🇮🇳', desc: 'Within India' }
  ]

  const coveragePlans = [
    {
      id: 'basic',
      name: 'Essential Cover',
      icon: '✈️',
      price: '₹149/day*',
      features: ['Medical emergency up to $25K', 'Trip cancellation cover', 'Baggage loss protection', 'Emergency evacuation']
    },
    {
      id: 'comprehensive',
      name: 'Premium Protection',
      icon: '🌍',
      price: '₹299/day*',
      features: ['Medical coverage up to $100K', 'Trip cancellation & delay', 'Adventure sports cover', 'Personal liability', 'COVID-19 protection', '24/7 global assistance']
    }
  ]

  const faqs = [
    {
      question: "What does travel insurance cover?",
      answer: "Travel insurance covers medical emergencies, trip cancellations, baggage loss, flight delays, and emergency evacuation while traveling abroad or domestically."
    },
    {
      question: "Is travel insurance mandatory?",
      answer: "While not always mandatory, many countries require travel insurance for visa approval. It's essential protection against unexpected travel risks."
    },
    {
      question: "Can I buy insurance after booking my trip?",
      answer: "Yes, you can purchase travel insurance anytime before your trip starts. However, buying early provides better coverage for trip cancellation benefits."
    }
  ]

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     try {
    await sendEmail({
      name: formData.destination,
      type: window.location.href, // 🔥 send current page URL
      mobile: formData.mobile,
      city: formData.destination,
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
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Travel
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Insurance</span>
              </h1>
              <p className="text-lg text-blue-100 mb-6">
                Explore the world worry-free with comprehensive travel protection. Medical coverage, trip protection, and emergency assistance worldwide.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Get Travel Quote</h3>
              
              <div className="space-y-3">
                <select
                  value={formData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Destination</option>
                  <option value="domestic">Domestic (Within India)</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="americas">Americas (USA/Canada)</option>
                  <option value="australia">Australia/NZ</option>
                  <option value="middle-east">Middle East</option>
                  <option value="worldwide">Worldwide</option>
                </select>

                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={formData.travelType}
                    onChange={(e) => handleInputChange('travelType', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Trip Type</option>
                    <option value="leisure">Leisure/Holiday</option>
                    <option value="business">Business Travel</option>
                    <option value="study">Student Travel</option>
                    <option value="adventure">Adventure/Sports</option>
                  </select>

                  <select
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Trip Duration</option>
                    <option value="1-7">1-7 Days</option>
                    <option value="8-15">8-15 Days</option>
                    <option value="16-30">16-30 Days</option>
                    <option value="31-90">1-3 Months</option>
                    <option value="90+">3+ Months</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <select
                    value={formData.travelers}
                    onChange={(e) => handleInputChange('travelers', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Travelers</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3-5 People</option>
                    <option value="6+">6+ People</option>
                  </select>

                  <select
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Age Group</option>
                    <option value="18-30">18-30 Years</option>
                    <option value="31-50">31-50 Years</option>
                    <option value="51-65">51-65 Years</option>
                    <option value="65+">65+ Years</option>
                  </select>

                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    placeholder="Mobile"
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  onClick={()=>handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Get Travel Quotes
                </button>
                <p className="text-center text-sm text-gray-500">
                  🌍 Global Coverage • ⚡ Instant Policy • 💯 Trusted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Popular Travel Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-all group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{destination.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{destination.name}</h3>
                <p className="text-xs text-gray-500">{destination.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-12">
            Choose Your Travel Protection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coveragePlans.map((plan, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Travel Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏥', title: 'Medical Coverage', desc: 'Emergency medical treatment worldwide' },
              { icon: '🧳', title: 'Baggage Protection', desc: 'Lost, stolen or delayed baggage cover' },
              { icon: '⏰', title: 'Trip Delays', desc: 'Compensation for flight delays & cancellations' },
              { icon: '📱', title: 'Mobile Claims', desc: 'Quick claim processing via mobile app' }
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Travel Insurance FAQs</h2>
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