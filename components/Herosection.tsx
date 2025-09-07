'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Empowering Financial Freedom",
      subtitle: "Join the revolution of citizen-driven financial solutions",
      description: "Discover innovative ways to manage your finances with our cutting-edge platform designed for modern citizens.",
      buttonText: "Get Started",
      buttonLink: "/join-us",
      bgColor: "from-blue-600 to-green-600"
    },
    {
      id: 2,
      title: "Trusted Partners Network",
      subtitle: "Building bridges for financial success",
      description: "Connect with verified partners and expand your financial opportunities through our secure ecosystem.",
      buttonText: "Our Partners",
      buttonLink: "/partners",
      bgColor: "from-orange-600 to-yellow-500"
    },
    {
      id: 3,
      title: "Innovative Products",
      subtitle: "Technology meets financial excellence",
      description: "Explore our range of products designed to simplify your financial journey and maximize your potential.",
      buttonText: "View Products",
      buttonLink: "/products",
      bgColor: "from-green-600 to-blue-600"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className={`h-full bg-gradient-to-br ${slide.bgColor} flex items-center justify-center`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl lg:text-2xl font-medium text-yellow-200">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-100 max-w-lg">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={slide.buttonLink}
                      className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105"
                    >
                      {slide.buttonText}
                    </Link>
                    <Link
                      href="/about"
                      className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="w-96 h-96 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-64 h-64 bg-yellow-400/30 rounded-full flex items-center justify-center">
                          <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}