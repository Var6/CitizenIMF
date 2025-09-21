'use client'
import { sendEmail } from '@/lib/email';
import { useState } from 'react'

const ChevronDown = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Shield = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L3 7v4.09c0 5.06 3.41 9.76 8 10.91 4.59-1.15 8-5.85 8-10.91V7l-9-5z"/>
  </svg>
);

const Star = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

export default function KeymanInsurance() {
  const [formData, setFormData] = useState({
    companyName: '',
    keymanName: '',
    designation: '',
    annualIncome: '',
    coverageAmount: '',
    mobile: ''
  })
  const [openFaq, setOpenFaq] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const plans = [
    {
      id: 'basic',
      name: 'Essential Protection',
      icon: '🏢',
      price: '₹12,500/year',
      originalPrice: '₹15,000',
      popular: false,
      features: [
        'Life cover for key employee',
        'Accidental death benefit',
        'Terminal illness coverage',
        'Basic claim support',
        'Tax benefits under 80C'
      ]
    },
    {
      id: 'premium',
      name: 'Comprehensive Protection',
      icon: '👑',
      price: '₹25,900/year',
      originalPrice: '₹32,000',
      popular: true,
      features: [
        'High sum assured up to ₹5 Cr',
        'Critical illness rider',
        'Loan protection for business',
        'Premium waiver benefit',
        'Tax benefits',
        '24/7 priority claim support',
        'Business continuity fund'
      ]
    }
  ]

  const benefits = [
    {
      icon: '🛡️',
      title: 'Business Continuity',
      desc: 'Ensures smooth operations and financial stability after loss of key employee',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📈',
      title: 'Investor Confidence',
      desc: 'Maintains stakeholder trust and secures future funding opportunities',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '💼',
      title: 'Debt Protection',
      desc: 'Helps repay business loans, liabilities and operational expenses',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💰',
      title: 'Tax Benefits',
      desc: 'Premium payments and claim proceeds offer significant tax advantages',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const faqs = [
    {
      question: "What is Keyman Insurance and why do I need it?",
      answer: "Keyman Insurance is a specialized life insurance policy that protects your business from financial loss due to the death or disability of key employees. It's essential for businesses that depend heavily on specific individuals whose expertise, leadership, or client relationships are crucial to operations."
    },
    {
      question: "Who qualifies as a Keyman in my organization?",
      answer: "A keyman can be a founder, CEO, director, top salesperson, technical expert, or any employee whose absence would significantly impact business revenue, operations, or growth. Typically, this includes individuals who generate substantial revenue or possess irreplaceable skills."
    },
    {
      question: "What are the key benefits and tax implications?",
      answer: "Benefits include business loan protection, operational continuity, investor confidence, and recruitment/training funds. Tax-wise, premiums are deductible as business expenses, and claim proceeds are generally tax-free, making it a smart financial strategy."
    },
    {
      question: "How much coverage should I choose?",
      answer: "Coverage typically ranges from 5-10 times the key person's annual salary, considering their revenue contribution, replacement costs, loan obligations, and business impact. Our experts can help determine the optimal amount based on your specific business needs."
    }
  ]

  const handleInputChange = (field: any, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    if (!formData.companyName || !formData.keymanName || !formData.mobile) {
      alert('Please fill in all required fields')
      return
    }
    
    setIsLoading(true)
    
    // Add timeout delay
    setTimeout(async () => {
      try {
        await sendEmail({
          name: formData.keymanName,
          type: window.location.href, // send current page URL
          mobile: formData.mobile,
          city: formData.companyName,
        })
        
        alert("✅ Thank you! We will send you keyman insurance quotes shortly.")
      } catch (error) {
        console.error("Email error:", error)
        alert("❌ Failed to send enquiry. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 text-blue-300">
              <Shield />
              <span className="text-sm font-semibold tracking-wider uppercase">Business Protection</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Keyman
              <span className="block text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text animate-pulse">
                Insurance
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Protect your business from the unexpected. Secure your company's future with comprehensive keyman insurance that ensures continuity, confidence, and peace of mind.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i}  />
                ))}
                <span className="text-sm text-slate-300 ml-2">4.9/5 Customer Rating</span>
              </div>
              <div className="text-sm text-slate-300">
                <span className="font-bold text-cyan-300">50,000+</span> Businesses Protected
              </div>
            </div>
          </div>

          {/* Enhanced Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Get Instant Quote</h3>
                <p className="text-gray-600">Compare plans from top insurers</p>
              </div>

              <div className="space-y-5">
                <div className="relative group">
                  <input 
                    type="text" 
                    value={formData.companyName} 
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Company Name" 
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-900 font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 group-hover:border-gray-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    value={formData.keymanName} 
                    onChange={(e) => handleInputChange('keymanName', e.target.value)}
                    placeholder="Keyman Name" 
                    className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-900 font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                  <input 
                    type="text" 
                    value={formData.designation} 
                    onChange={(e) => handleInputChange('designation', e.target.value)}
                    placeholder="Designation" 
                    className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-900 font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="number" 
                    value={formData.annualIncome} 
                    onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                    placeholder="Annual Income" 
                    className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-900 font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                  <select 
                    value={formData.coverageAmount} 
                    onChange={(e) => handleInputChange('coverageAmount', e.target.value)}
                    className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-900 font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="">Coverage Amount</option>
                    <option value="50L">₹50 Lakhs</option>
                    <option value="1C">₹1 Crore</option>
                    <option value="2C">₹2 Crores</option>
                    <option value="5C">₹5 Crores</option>
                  </select>
                </div>

                <input 
                  type="tel" 
                  value={formData.mobile} 
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="Mobile Number" 
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-900 font-medium transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <button 
                  onClick={handleSubmit} 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10">Get Keyman Insurance Quotes</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  🔒 Your information is secure and will not be shared
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text mb-6">
              Choose Your Protection Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored coverage options designed to protect your business and key personnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular ? 'border-gradient-to-r from-blue-500 to-purple-500 scale-105' : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🌟 Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                  <div className="space-y-2">
                    <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                      {plan.price}
                    </div>
                    <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                      <span className="text-gray-700 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Choose This Plan
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              * Prices are indicative and may vary based on coverage amount, age, and risk assessment
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Why Choose Keyman Insurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection that goes beyond traditional coverage to safeguard your business future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-blue-500 to-purple-500"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Keyman Insurance
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full flex justify-between items-center text-left p-8 font-bold text-gray-800 hover:text-blue-600 transition-colors group"
                >
                  <span className="text-lg pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`transform transition-all duration-300 text-blue-500 group-hover:text-blue-600 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-8 pt-0 text-gray-700 leading-relaxed bg-gradient-to-r from-blue-50/30 to-purple-50/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait for the unexpected. Secure your company's future with comprehensive keyman insurance today.
          </p>
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            Get Your Free Quote Now
          </button>
        </div>
      </section>
    </div>
  )
}