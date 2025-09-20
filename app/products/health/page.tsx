'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { sendEmail } from '@/lib/email';

type PlanType = 'individual' | 'family' | 'senior' | 'critical';

export default function HealthInsurancePage() {
  const [formData, setFormData] = useState({
    age: '',
    members: '1',
    sumInsured: '5',
    city: '',
    name: '',
    mobile: ''
  })
  const [activeTab, setActiveTab] = useState<PlanType>('individual')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const planTypes = [
    { id: 'individual', name: 'Individual Plans', icon: '👤', description: 'Perfect for single person coverage', startingPrice: '₹150/month*', color: 'from-blue-500 to-cyan-500' },
    { id: 'family', name: 'Family Floater', icon: '👨‍👩‍👧‍👦', description: 'Complete family protection', startingPrice: '₹350/month*', color: 'from-green-500 to-emerald-500' },
    { id: 'senior', name: 'Senior Citizen', icon: '👴', description: 'Specialized for 60+ age', startingPrice: '₹800/month*', color: 'from-orange-500 to-red-500' },
    { id: 'critical', name: 'Critical Illness', icon: '🏥', description: 'Coverage for serious diseases', startingPrice: '₹200/month*', color: 'from-purple-500 to-pink-500' }
  ]

  const benefits = [
    { icon: '🏥', title: 'Cashless Treatment', description: 'Get treatment at 10,000+ network hospitals without paying upfront', color: 'from-blue-500 to-cyan-500' },
    { icon: '💰', title: 'Tax Benefits', description: 'Save up to ₹46,800 in taxes under Section 80D', color: 'from-green-500 to-emerald-500' },
    { icon: '🚑', title: 'Emergency Coverage', description: 'Ambulance charges and emergency medical expenses covered', color: 'from-orange-500 to-red-500' },
    { icon: '👨‍⚕️', title: 'Pre & Post Hospitalization', description: '30-60 days coverage before and after hospitalization', color: 'from-purple-500 to-pink-500' },
    { icon: '🔄', title: 'No Claim Bonus', description: 'Increase your sum insured by up to 100% for claim-free years', color: 'from-yellow-500 to-orange-500' },
    { icon: '⚡', title: 'Instant Policy', description: 'Get your policy issued within 5 minutes online', color: 'from-indigo-500 to-purple-500' }
  ]

  const companies = [
    { name: 'HDFC ERGO', rating: 4.5, claimRatio: '95.1%', logo: '/companies/hdfc-ergo.png' },
    { name: 'ICICI Lombard', rating: 4.3, claimRatio: '92.8%', logo: '/companies/icici-lombard.png' },
    { name: 'Niva Bupa', rating: 4.4, claimRatio: '91.2%', logo: '/companies/niva-bupa.png' },
    { name: 'Care Health', rating: 4.2, claimRatio: '89.5%', logo: '/companies/care-health.png' },
    { name: 'Star Health', rating: 4.1, claimRatio: '88.9%', logo: '/companies/star-health.png' },
    { name: 'Bajaj Allianz', rating: 4.0, claimRatio: '87.2%', logo: '/companies/bajaj-allianz.png' }
  ]

  const coverageFeatures = {
    individual: [ 'Individual coverage up to ₹1 Crore', 'Cashless treatment at network hospitals', 'Pre & post hospitalization coverage', 'Day care procedures covered', 'Annual health check-up', 'No waiting period for accidents' ],
    family: [ 'Entire family covered under one policy', 'Shared sum insured for all members', 'Newborn baby covered from day 1', 'Maternity and child care benefits', 'Family discount on premium', 'Coverage for parents and in-laws' ],
    senior: [ 'No upper age limit for renewals', 'Pre-existing disease coverage', 'Reduced waiting periods', 'Special OPD benefits', 'Home healthcare services', 'Wellness and preventive care' ],
    critical: [ 'Lump sum payout on diagnosis', 'Coverage for 30+ critical illnesses', 'No restriction on fund usage', 'Multiple claim benefit', 'Partial payment for early stages', 'Income replacement benefit' ]
  }

  const steps = [
    { step: '01', title: 'Fill Details', description: 'Enter your age, family details, and coverage requirements', icon: '📝' },
    { step: '02', title: 'Compare Plans', description: 'Get quotes from top insurers and compare benefits', icon: '🔍' },
    { step: '03', title: 'Choose & Pay', description: 'Select the best plan and make secure online payment', icon: '💳' },
    { step: '04', title: 'Get Policy', description: 'Receive your policy document instantly via email', icon: '📧' }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
       try {
      await sendEmail({
        name: formData.name,
        type: window.location.href, // 🔥 send current page URL
        mobile: formData.mobile,
        city: formData.city,
      })
  
      alert("✅ Thank you! We will send you personal accident insurance quotes shortly.")
    } catch (error) {
      console.error("Email error:", error)
      alert("❌ Failed to send enquiry. Please try again.")
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.2 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* ...keeping hero, plans, benefits, companies, steps, CTA, FAQ as in your code... */}

      {/* Companies section fix */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Top Insurance Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <img src={company.logo} alt={`${company.name} logo`} className="w-20 h-12 object-contain" />
                  <div className="text-right">
                    <div className="flex items-center text-yellow-500">
                      <span className="font-bold mr-1">{company.rating}</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{company.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Claim Settlement</span>
                  <span className="font-bold text-green-600">{company.claimRatio}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
