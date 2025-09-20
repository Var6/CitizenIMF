'use client'
import { sendEmail } from '@/lib/email';
import { useState } from 'react'

const ChevronDown = (props:any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function LifeInsurance() {
  const [formData, setFormData] = useState({
    planType: '',
    age: '',
    income: '',
    coverage: '',
    gender: '',
    mobile: ''
  })
  const [openFaq, setOpenFaq] = useState(0)

  const planTypes = [
    { name: 'Term Plan', icon: '🛡️', desc: 'Pure protection cover' },
    { name: 'ULIP', icon: '📈', desc: 'Investment + insurance' },
    { name: 'Endowment', icon: '💰', desc: 'Savings + protection' },
    { name: 'Pension', icon: '👴', desc: 'Retirement planning' },
    { name: 'Child Plan', icon: '👶', desc: 'Child future planning' },
    { name: 'Whole Life', icon: '♾️', desc: 'Lifelong coverage' }
  ]

  const coveragePlans = [
    {
      id: 'basic',
      name: 'Term Life Cover',
      icon: '🔒',
      price: '₹490/month*',
      features: ['Life cover up to ₹1 Crore', 'Accidental death benefit', 'Premium return option', 'Tax benefits under 80C']
    },
    {
      id: 'comprehensive',
      name: 'Complete Protection',
      icon: '👨‍👩‍👧‍👦',
      price: '₹1,290/month*',
      features: ['Life + critical illness cover', 'Waiver of premium benefit', 'Terminal illness advance', 'Multiple payout options', 'Inflation protection', 'Online policy management']
    }
  ]

  const faqs = [
    {
      question: "What is life insurance and why do I need it?",
      answer: "Life insurance provides financial security to your family in case of your unexpected demise. It ensures your dependents can maintain their lifestyle and meet financial goals even without your income."
    },
    {
      question: "How much life insurance coverage do I need?",
      answer: "A general rule is 10-15 times your annual income. Consider your family's needs, existing debts, future expenses like children's education, and your financial goals."
    },
    {
      question: "What's the difference between term and whole life insurance?",
      answer: "Term insurance provides pure protection for a specific period at lower premiums. Whole life insurance combines protection with savings/investment and covers you for your entire lifetime."
    }
  ]

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
       try {
      await sendEmail({
        name: formData.planType,
        type: window.location.href, // 🔥 send current page URL
        mobile: formData.mobile,
        city: formData.age,
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
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Life
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Insurance</span>
              </h1>
              <p className="text-lg text-emerald-100 mb-6">
                Secure your family's future with comprehensive life insurance. Get coverage up to ₹2 Crores with affordable premiums starting from just ₹490/month.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Get Life Quote</h3>
              
              <div className="space-y-3">
                <select
                  value={formData.planType}
                  onChange={(e) => handleInputChange('planType', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select Plan Type</option>
                  <option value="term">Term Life Insurance</option>
                  <option value="ulip">ULIP (Unit Linked)</option>
                  <option value="endowment">Endowment Plan</option>
                  <option value="pension">Pension/Retirement</option>
                  <option value="child">Child Insurance Plan</option>
                  <option value="whole">Whole Life Plan</option>
                </select>

                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Your Age</option>
                    <option value="18-25">18-25 Years</option>
                    <option value="26-35">26-35 Years</option>
                    <option value="36-45">36-45 Years</option>
                    <option value="46-55">46-55 Years</option>
                    <option value="56-65">56-65 Years</option>
                  </select>

                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={formData.income}
                    onChange={(e) => handleInputChange('income', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Annual Income</option>
                    <option value="<3">Under ₹3 Lakhs</option>
                    <option value="3-5">₹3-5 Lakhs</option>
                    <option value="5-10">₹5-10 Lakhs</option>
                    <option value="10-25">₹10-25 Lakhs</option>
                    <option value="25+">₹25+ Lakhs</option>
                  </select>

                  <select
                    value={formData.coverage}
                    onChange={(e) => handleInputChange('coverage', e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Coverage Needed</option>
                    <option value="10">₹10 Lakhs</option>
                    <option value="25">₹25 Lakhs</option>
                    <option value="50">₹50 Lakhs</option>
                    <option value="100">₹1 Crore</option>
                    <option value="200">₹2 Crores</option>
                  </select>
                </div>

                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-emerald-500"
                  required
                />

                <button
                  onClick={()=>handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Get Life Insurance Quotes
                </button>
                <p className="text-center text-sm text-gray-500">
                  👨‍👩‍👧‍👦 Family Protection • 💰 Tax Benefits • ✅ Instant Quotes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Types of Life Insurance Plans</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {planTypes.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-all group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{plan.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text mb-12">
            Choose Your Life Protection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coveragePlans.map((plan, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text">
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Life Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏠', title: 'Family Security', desc: 'Ensure your family\'s financial stability' },
              { icon: '💸', title: 'Tax Savings', desc: 'Save tax up to ₹1.5 lakhs under 80C' },
              { icon: '🎓', title: 'Child Education', desc: 'Secure your children\'s education future' },
              { icon: '⚡', title: 'Easy Claims', desc: 'Quick & hassle-free claim settlement' }
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Life Insurance FAQs</h2>
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