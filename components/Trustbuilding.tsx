'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react"
import Image from 'next/image'

export default function TrustBuildingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    customers: 0,
    policies: 0,
    partners: 0,
    claims: 0
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef(null)


  const achievements = [
    {
      value: counters.customers,
      suffix: '+',
      label: 'Happy Customers',
      icon: '👥',
      color: 'from-blue-500 to-cyan-500',
      description: 'Satisfied customers trust us'
    },
    {
      value: counters.policies,
      suffix: '+',
      label: 'Policies Issued',
      icon: '📋',
      color: 'from-green-500 to-emerald-500',
      description: 'Policies sold successfully'
    },
    {
      value: counters.partners,
      suffix: '+',
      label: 'Insurance Partners',
      icon: '🤝',
      color: 'from-orange-500 to-red-500',
      description: 'Top insurance companies'
    },
    {
      value: counters.claims,
      suffix: '%',
      label: 'Claims Settled',
      icon: '✅',
      color: 'from-purple-500 to-pink-500',
      description: 'Successful claim settlement'
    }
  ]

  const testimonials = [
    {
      name: 'Sudhir Kumar Srivastava',
      location: 'Noida',
      role: 'Business Owner',
      image: '/testimonials/SudhirSrivastav.jpeg',
      rating: 5,
      text: 'Citizen IMF helped me get the best health insurance for my family. Their team guided me through the entire process and I got coverage within 24 hours. Excellent service!',
      insurance: 'Health Insurance',
      date: 'February 2025',
      verified: true
    },
    {
      name: 'Preeti Chandra',
      location: 'Anishabad Patna',
      role: 'House Maker',
      image: '/testimonials/pree.jpeg',
      rating: 5,
      text: 'I was confused about term insurance options. Citizen IMF\'s advisor explained everything clearly and helped me choose the right policy. Very professional and trustworthy.',
      insurance: 'Term Insurance',
      date: 'January 2025',
      verified: true
    },
    {
      name: 'Roshan Kumar',
      location: 'Malsalami',
      role: 'Advocate',
      image: '/testimonials/Roshan.jpeg',
      rating: 5,
      text: 'Got my car insurance renewed through Citizen IMF. They compared multiple options and saved me ₹3,000 on premium. Quick process and great support team.',
      insurance: 'Car Insurance',
      date: 'February 2025',
      verified: true
    },
    {
      name: 'Alka Jha',
      location: 'Madhubani',
      role: 'HR Manager',
      image: '/testimonials/AlkaJHA.jpeg',
      rating: 5,
      text: 'When I needed to claim my health insurance, Citizen IMF\'s team helped me throughout. They handled all paperwork and I received my claim amount in 7 days.',
      insurance: 'Health Insurance Claim',
      date: 'January 2025',
      verified: true
    },
    {
      name: 'Sanjeev Anand',
      location: 'New Delhi',
      role: 'Social Worker APF',
      image: '/testimonials/SanjeevAnand.jpeg',
      rating: 5,
      text: 'Excellent service for investment planning. They recommended ULIP plans that perfectly matched my goals. Regular updates and transparent communication.',
      insurance: 'Investment Plan',
      date: 'December 2024',
      verified: true
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: '5 Minutes Policy',
      description: 'Get instant quotes and buy policies in just 5 minutes',
      icon: '⚡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Expert Guidance',
      description: 'Our certified advisors help you choose the right plan',
      icon: '👨‍💼',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '03',
      title: 'Instant Activation',
      description: 'Your policy gets activated immediately after payment',
      icon: '🎯',
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Lifetime Support',
      description: '24/7 support for claims, renewals and queries',
      icon: '🛡️',
      color: 'from-purple-500 to-pink-500'
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
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  
        {/* Process Steps */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-xl text-gray-600">Simple 4-step process to get your insurance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-3xl shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
                
                <div className={`text-2xl font-bold mb-2 text-transparent bg-gradient-to-r ${step.color} bg-clip-text`}>
                  {step.step}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
            <p className="text-xl text-gray-600">Real experiences from real customers</p>
          </div>

          <div className="relative">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Customer Photo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    <Image src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} width={96} height={96} className="rounded-full" />
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.svg 
                        key={i}
                        className="w-6 h-6 text-yellow-400"
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </motion.svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="font-bold text-gray-900 text-lg flex items-center justify-center lg:justify-start">
                        {testimonials[currentTestimonial].name}
                        {testimonials[currentTestimonial].verified && (
                          <svg className="w-5 h-5 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                      <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</div>
                    </div>
                    <div className="mt-4 lg:mt-0 text-center lg:text-right">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                        {testimonials[currentTestimonial].insurance}
                      </div>
                      <div className="text-gray-500 text-sm mt-1">{testimonials[currentTestimonial].date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}