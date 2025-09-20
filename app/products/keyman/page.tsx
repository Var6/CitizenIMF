'use client'
import { sendEmail } from '@/lib/email';
import { useState } from 'react'

const ChevronDown = (props:any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
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

  const plans = [
    {
      id: 'basic',
      name: 'Essential Protection',
      icon: '👨‍💼',
      price: '₹12,500/year*',
      features: ['Life cover for key employee', 'Accidental death benefit', 'Terminal illness coverage']
    },
    {
      id: 'premium',
      name: 'Comprehensive Protection',
      icon: '🏢',
      price: '₹25,900/year*',
      features: ['High sum assured', 'Critical illness rider', 'Loan protection for business', 'Tax benefits', '24/7 claim support']
    }
  ]

  const faqs = [
    {
      question: "What is Keyman Insurance?",
      answer: "Keyman Insurance is a policy taken by a business on the life of its most important employee. The company pays the premium and is the beneficiary of the policy."
    },
    {
      question: "Who qualifies as a Keyman?",
      answer: "A keyman can be a founder, director, or any employee whose expertise, knowledge, or leadership is crucial to the business."
    },
    {
      question: "What are the benefits of Keyman Insurance?",
      answer: "It provides financial security to the business, helps settle debts, reassures investors, and offers tax benefits under the Income Tax Act."
    }
  ]

  const handleInputChange = (field:any, value:any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()
      try {
     await sendEmail({
       name: formData.keymanName,
       type: window.location.href, // 🔥 send current page URL
       mobile: formData.mobile,
       city: formData.companyName,
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
      <section className="py-16 bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Keyman
              <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text"> Insurance</span>
            </h1>
            <p className="text-lg text-blue-100 mb-6">
              Safeguard your business from unexpected loss of key personnel. Ensure continuity, investor confidence, and financial protection.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Get Keyman Quote</h3>
            <div className="space-y-3">
              <input type="text" value={formData.companyName} onChange={(e)=>handleInputChange('companyName',e.target.value)} placeholder="Company Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"/>
              <input type="text" value={formData.keymanName} onChange={(e)=>handleInputChange('keymanName',e.target.value)} placeholder="Keyman Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"/>
              <input type="text" value={formData.designation} onChange={(e)=>handleInputChange('designation',e.target.value)} placeholder="Designation" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"/>
              <input type="number" value={formData.annualIncome} onChange={(e)=>handleInputChange('annualIncome',e.target.value)} placeholder="Annual Income" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"/>
              <select value={formData.coverageAmount} onChange={(e)=>handleInputChange('coverageAmount',e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900">
                <option value="">Coverage Amount</option>
                <option value="50L">₹50 Lakhs</option>
                <option value="1C">₹1 Crore</option>
                <option value="2C">₹2 Crores</option>
                <option value="5C">₹5 Crores</option>
              </select>
              <input type="tel" value={formData.mobile} onChange={(e)=>handleInputChange('mobile',e.target.value)} placeholder="Mobile Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900"/>
              <button onClick={()=>handleSubmit} className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-bold text-lg shadow-lg">Get Keyman Insurance Quotes</button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-12">Choose Your Protection Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, i)=>(
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">{plan.price}</div>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Keyman Insurance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{icon:'💼',title:'Business Continuity',desc:'Ensures financial stability after loss of key employee'},
              {icon:'📈',title:'Investor Confidence',desc:'Reassures stakeholders and lenders'},
              {icon:'🛡️',title:'Debt Protection',desc:'Helps repay business loans and liabilities'},
              {icon:'💰',title:'Tax Benefits',desc:'Premiums and payouts offer tax advantages'}].map((b,i)=>(
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Keyman Insurance FAQs</h2>
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
