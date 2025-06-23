'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function PartnersSection() {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const partners = [
    { name: 'bajaj', logo: '/partners/bajaj.jpg' },
    { name: 'care', logo: '/partners/care.jpg' },
    { name: 'icic', logo: '/partners/icic.jpg' },
    { name: 'lic', logo: '/partners/lic.jpg' },
    { name: 'max-life', logo: '/partners/max-life.jpg' },
    { name: 'national', logo: '/partners/national.jpg' },
    { name: 'niva', logo: '/partners/niva.jpg' },
    { name: 'pnb', logo: '/partners/pnb.jpg' },
    { name: 'tata', logo: '/partners/tata.jpg' },
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
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prev) => (prev + 1) % partners.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [partners.length])

  const getVisiblePartners = () => {
    const visible = []
    for (let i = 0; i < 6; i++) {
      const index = (currentPartnerIndex + i) % partners.length
      visible.push(partners[index])
    }
    return visible
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to bring you the best financial solutions and opportunities.
            </p>
          </div>
        </div>

        <div className="relative">
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {getVisiblePartners().map((partner, index) => (
              <div
                key={`${partner.name}-${currentPartnerIndex}-${index}`}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: `fadeInUp 0.8s ease-out ${index * 100}ms both`
                }}
              >
                <div className="relative h-20 flex items-center justify-center overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        <div 
          className={`text-center mt-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex justify-center space-x-2 mb-8">
            {Array.from({ length: Math.ceil(partners.length / 6) }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentPartnerIndex / 6) === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Want to Partner With Us?</h3>
            <p className="text-xl mb-6 text-yellow-100">
              Join our network of trusted partners and grow your business with Citizen IMF.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }
      `}</style>
    </section>
  )
}