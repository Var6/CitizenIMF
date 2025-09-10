'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "motion/react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

  const menuItems = [
    {
     title: 'Insurance',
      hasDropdown: true,
      dropdownItems: [
        {
          category: 'Motor Insurance',
          links: [
            { name: 'Two Wheeler Insurance', href: '/products/two-wheeler' },
            { name: 'Four Wheeler Insurance', href: '/products/four-wheeler' },
            { name: 'Commercial Motor', href: '/products/commercial' },
          ]
        },
        {
          category: 'Health & Life',
          links: [
            { name: 'Health Insurance', href: '/products/health' },
            { name: 'Personal Accident', href: '/products/accident' },
            { name: 'Life Insurance', href: '/products/life' },
          ]
        },
        {
          category: 'Business Insurance',
          links: [
            { name: 'Shop Insurance', href: '/products/shop' },
            { name: 'Marine Cargo', href: '/products/cargo' },
            { name: 'Keyman Insurance', href: '/products/keyman' },
            { name: 'Professional Indemnity', href: '/products/indemnity' },
          ]
        },
        {
          category: 'Personal Insurance',
          links: [
            { name: 'Home Insurance', href: '/products/home' },
            { name: 'Travel Insurance', href: '/products/travel' },
          ]
        }
      ]
    },
   
   {
      title: 'Companies',
      hasDropdown: true,
      dropdownItems: [
        {
          category: 'Life Insurance',
          links: [
            { name: 'LIC', href: 'https://licindia.in/' },
            { name: 'Max Life / Axis Max Life', href: 'https://www.axismaxlife.com/' },
            { name: 'PNB Met Life', href: 'https://www.pnbmetlife.com/' },
          ]
        },
        {
          category: 'Health Insurance',
          links: [
            { name: 'Niva Bupa', href: 'https://www.nivabupa.com/' },
            { name: 'Care Health', href: 'https://www.careinsurance.com/' },
          ]
        },
        {
          category: 'General Insurance',
          links: [
            { name: 'National Insurance', href: 'https://nationalinsurance.nic.co.in/' },
            { name: 'SBI General Insurance', href: 'https://www.sbigeneral.in' },
            { name: 'Bajaj Allianz General', href: 'https://www.bajajallianzlife.com/' },
            { name: 'Tata AIG General', href: 'https://www.tataaig.com/' },
            { name: 'ICICI Lombard', href: 'https://www.icicilombard.com/' },
          ]
        }
      ]
    },
  ]

  const handleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Citizen IMF"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold text-gray-800">Citizen IMF</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    onMouseEnter={() => handleDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors flex items-center"
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Mega Dropdown */}
                  {item.hasDropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid grid-cols-2 gap-4 p-6">
                        {item.dropdownItems.map((category, catIndex) => (
                          <div key={catIndex}>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3 text-blue-600">
                              {category.category}
                            </h3>
                            <ul className="space-y-2">
                              {category.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link
                                    href={link.href}
                                     target="_blank" rel="noopener noreferrer"
                                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Call to Action at bottom */}
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 rounded-b-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">Need Help Choosing?</p>
                            <p className="text-xs text-gray-600">Get expert advice</p>
                          </div>
                          <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                          >
                            Talk to Expert
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Direct Navigation Items */}
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/partners" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                Partners
              </Link>
              <Link href="/join-us" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                Join Us
              </Link>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  href="/renew"
                  className="text-blue-600 border border-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
                >
                  Renew Policy
                </Link>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => activeDropdown === index ? setActiveDropdown(null) : handleDropdown(index)}
                    className="w-full text-left text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium flex items-center justify-between"
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <svg 
                        className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gray-50 rounded-lg mx-3 mb-2"
                    >
                      {item.dropdownItems.map((category, catIndex) => (
                        <div key={catIndex} className="p-3">
                          <h4 className="text-sm font-semibold text-blue-600 mb-2">
                            {category.category}
                          </h4>
                          {category.links.map((link, linkIndex) => (
                            <Link
                              key={linkIndex}
                              href={link.href}
                              className="block text-sm text-gray-600 py-1 hover:text-blue-600"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {/* Mobile Direct Links */}
              <Link href="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link href="/partners" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Partners
              </Link>
              <Link href="/join-us" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Join Us
              </Link>
              
              {/* Mobile CTA */}
              <div className="px-3 py-2 space-y-2">
                <Link
                  href="/renew"
                  className="block text-center text-blue-600 border border-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
                >
                  Renew Policy
                </Link>
                <Link
                  href="/contact"
                  className="block text-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}