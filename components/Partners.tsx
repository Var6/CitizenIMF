'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const partners = [
    { name: 'bajaj', logo: '/partners/bajaj.jpg' },
    { name: 'care', logo: '/partners/care.jpg' },
    { name: 'icic', logo: '/partners/icic.jpg' },
    { name: 'lic', logo: '/partners/lic.jpg' },
    { name: 'max-life', logo: '/partners/max-life.jpg' },
    { name: 'national', logo: '/partners/national.jpg' },
    { name: 'niva', logo: '/partners/niva.jpg' },
    { name: 'pnb', logo: '/partners/pnb.png' },
    { name: 'tata', logo: '/partners/tata.jpg' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Trusted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Partners
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to bring you the best financial solutions and opportunities.
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative h-20 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
