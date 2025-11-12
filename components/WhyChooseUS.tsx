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

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      text: "Citizen IMF has transformed my financial management. The anytime money back policy gives me complete confidence in their services.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      text: "The fast process and 100% safe money guarantee made me choose Citizen IMF. Best decision for my financial future!",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      text: "Professional team, excellent service, and trustworthy platform. Highly recommend Citizen IMF to everyone looking for financial solutions.",
      rating: 5
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

        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="text-center bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold mb-2">
              {counters.insurance.toLocaleString()} +
            </div>
            <div className="text-lg text-blue-100">Policies Sold</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold mb-2">
              {counters.team} +
            </div>
            <div className="text-lg text-green-100">Distribution Network</div>
          </div>
          <div className="text-center bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold mb-2">
              {counters.customers.toLocaleString()} +
            </div>
            <div className="text-lg text-orange-100">Clams Assisted</div>
          </div>
          <div className="text-center bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold mb-2">
              {counters.success}%
            </div>
            <div className="text-lg text-yellow-100">Our success rate</div>
          </div>
        </div>

        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-orange-600">Our Feedbacks</span>
            </h3>
            <p className="text-xl text-gray-600">What they're talking about the policy?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${1000 + index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}