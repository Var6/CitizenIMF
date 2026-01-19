'use client'

import { useState, useEffect, useRef } from 'react'

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    insurance: 0,
    team: 0,
    customers: 0,
    success: 0
  })
  const sectionRef = useRef(null)

  const finalValues = {
    insurance: 1000,
    team: 50,
    customers: 50,
    success: 99
  }

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Anytime Money Back",
      description: "With Anytime Money Back, your peace of mind is our priority. Enjoy hassle-free refunds whenever you need them!"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      ),
      title: "100% Safe Money",
      description: "Your financial security is guaranteed with our advanced protection systems and regulatory compliance standards."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 1v6h8l-8-6zM6 2v6H4l.01-6H6zm7.8 6l-3.6-4.2L14.4 8H13.8zm-5.6 0L4.6 3.8 8.4 8H8.2zM4.01 9H20v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V9z"/>
        </svg>
      ),
      title: "Fast Process",
      description: "Experience lightning-fast processing with our streamlined systems designed for maximum efficiency and minimal wait times."
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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          insurance: Math.floor(finalValues.insurance * progress),
          team: Math.floor(finalValues.team * progress),
          customers: Math.floor(finalValues.customers * progress),
          success: Math.floor(finalValues.success * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(finalValues)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Always Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Citizen IMF!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-blue-600 group-hover:text-green-600 transition-colors duration-300 mb-6 transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}