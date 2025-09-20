'use client'
import { sendEmail } from '@/lib/email';
import { useState } from 'react'

const ChevronDown = (props:any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function IndemnityInsurance() {
  const [formData, setFormData] = useState({
    profession: '',
    annualTurnover: '',
    coverageAmount: '',
    name: '',
    email: '',
    mobile: ''
  })
  const [openFaq, setOpenFaq] = useState(0)

  const plans = [
    {
      id: 'basic',
      name: 'Professional Basic',
      icon: '📑',
      price: '₹9,500/year*',
      features: ['Covers negligence claims', 'Legal defense cost', 'Professional liability cover']
    },
    {
      id: 'premium',
      name: 'Comprehensive Indemnity',
      icon: '⚖️',
      price: '₹18,900/year*',
      features: ['High sum assured', 'Extended legal cover', 'Worldwide protection', 'Cyber liability rider', 'Tax benefits']
    }
  ]

  const faqs = [
    {
      question: "What is Professional Indemnity Insurance?",
      answer: "Professional Indemnity Insurance protects professionals like doctors, lawyers, consultants, and architects against claims of negligence, errors, or omissions made while providing services."
    },
    {
      question: "Who should buy indemnity insurance?",
      answer: "Any professional offering advice or services such as doctors, lawyers, CA, engineers, consultants, or IT professionals should opt for indemnity insurance."
    },
    {
      question: "What costs are covered?",
      answer: "It covers legal defense costs, compensation claims, settlements, and damages arising due to professional mistakes or negligence."
    }
  ]

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()
      try {
     await sendEmail({
       name: formData.name,
       type: window.location.href, // 🔥 send current page URL
       mobile: formData.mobile,
       city: formData.email,
     })
 
     alert("✅ Thank you! We will send you personal accident insurance quotes shortly.")
   } catch (error) {
     console.error("Email error:", error)
     alert("❌ Failed to send enquiry. Please try again.")
   }
 }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-teal-700 via-cyan-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Professional
              <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Indemnity</span>
            </h1>
            <p className="text-lg text-cyan-100 mb-6">
              Protect your career and reputation with indemnity insurance. Cover legal costs and compensation claims for errors, omissions, or negligence.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Get Indemnity Quote</h3>
            <div className="space-y-3">
              <select value={formData.profession} onChange={(e)=>handleInputChange('profession',e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900">
                <option value="">Select Profession</option>
                <option value="doctor">Doctor</option>
                <option value="lawyer">Lawyer</option>
                <option value="consultant">Consultant</option>
                <option value="engineer">Engineer</option>
                <option value="ca">Chartered Accountant</option>
                <option value="it">IT Professional</option>
              </select>
              <input type="number" value={formData.annualTurnover} onChange={(e)=>handleInputChange('annualTurnover',e.target.value)} placeholder="Annual Turnover (₹)" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"/>
              <select value={formData.coverageAmount} onChange={(e)=>handleInputChange('coverageAmount',e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900">
                <option value="">Coverage Amount</option>
                <option value="25L">₹25 Lakhs</option>
                <option value="50L">₹50 Lakhs</option>
                <option value="1C">₹1 Crore</option>
                <option value="2C">₹2 Crores</option>
              </select>
              <input type="text" value={formData.name} onChange={(e)=>handleInputChange('name',e.target.value)} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"/>
              <input type="email" value={formData.email} onChange={(e)=>handleInputChange('email',e.target.value)} placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"/>
              <input type="tel" value={formData.mobile} onChange={(e)=>handleInputChange('mobile',e.target.value)} placeholder="Mobile Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"/>
              <button onClick={()=>handleSubmit} className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg">Get Indemnity Insurance Quotes</button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text mb-12">Choose Your Coverage Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, i)=>(
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text">{plan.price}</div>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((f,j)=>(
                    <li key={j} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{f}</span>
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
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Indemnity Insurance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{icon:'⚖️',title:'Legal Protection',desc:'Covers legal defense costs and settlements'},
              {icon:'🛡️',title:'Professional Security',desc:'Safeguards against negligence claims'},
              {icon:'🌍',title:'Global Coverage',desc:'Protection worldwide for your services'},
              {icon:'💼',title:'Client Confidence',desc:'Reassures clients with financial security'}].map((b,i)=>(
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Indemnity Insurance FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index)=>(
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button onClick={()=>setOpenFaq(openFaq===index?-1:index)} className="w-full flex justify-between items-center text-left p-6 font-semibold text-gray-800">
                  <span>{faq.question}</span>
                  <ChevronDown className={`transform transition-transform ${openFaq===index?'rotate-180':''}`}/>
                </button>
                {openFaq===index && <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
