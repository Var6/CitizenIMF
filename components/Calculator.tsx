'use client'

import { useState } from 'react'
import { motion } from "motion/react"

type TabKey = 'health' | 'car' | 'life' | 'travel' | 'shop' | 'marine';

type HealthForm = {
  age: string;
  members: string;
  sumInsured: string;
  city: string;
  name: string;
  mobile: string;
};

type CarForm = {
  vehicleType: string;
  carBrand: string;
  carModel: string;
  fuelType: string;
  registrationYear: string;
  rtoLocation: string;
  name: string;
  mobile: string;
};

type LifeForm = {
  age: string;
  gender: string;
  smokingHabit: string;
  sumAssured: string;
  policyTerm: string;
  name: string;
  mobile: string;
};

type TravelForm = {
  destination: string;
  tripDuration: string;
  travelers: string;
  coverageAmount: string;
  tripType: string;
  name: string;
  mobile: string;
};

type ShopForm = {
  businessType: string;
  shopArea: string;
  stockValue: string;
  location: string;
  coverageType: string;
  name: string;
  mobile: string;
};

type MarineForm = {
  cargoType: string;
  cargoValue: string;
  origin: string;
  destination: string;
  transportMode: string;
  name: string;
  mobile: string;
};

type FormData = {
  health: HealthForm;
  car: CarForm;
  life: LifeForm;
  travel: TravelForm;
  shop: ShopForm;
  marine: MarineForm;
};

export default function InsurancePremiumCalculator() {
  const [activeTab, setActiveTab] = useState<TabKey>('health')
  const [formData, setFormData] = useState<FormData>({
    health: {
      age: '',
      members: '1',
      sumInsured: '5',
      city: '',
      name: '',
      mobile: ''
    },
    car: {
      vehicleType: 'car',
      carBrand: '',
      carModel: '',
      fuelType: 'petrol',
      registrationYear: '',
      rtoLocation: '',
      name: '',
      mobile: ''
    },
    life: {
      age: '',
      gender: 'male',
      smokingHabit: 'no',
      sumAssured: '10',
      policyTerm: '20',
      name: '',
      mobile: ''
    },
    travel: {
      destination: '',
      tripDuration: '7',
      travelers: '1',
      coverageAmount: '1',
      tripType: 'leisure',
      name: '',
      mobile: ''
    },
    shop: {
      businessType: 'retail',
      shopArea: '500',
      stockValue: '5',
      location: '',
      coverageType: 'comprehensive',
      name: '',
      mobile: ''
    },
    marine: {
      cargoType: 'general',
      cargoValue: '5',
      origin: '',
      destination: '',
      transportMode: 'sea',
      name: '',
      mobile: ''
    }
  })

  const tabs = [
    {
      id: 'health',
      name: 'Health Insurance',
      icon: '🏥',
      color: 'from-green-500 to-emerald-500',
      description: 'Medical coverage for you and family'
    },
    {
      id: 'car',
      name: 'Motor Insurance',
      icon: '🚗',
      color: 'from-blue-500 to-cyan-500',
      description: 'Car & bike insurance quotes'
    },
    {
      id: 'life',
      name: 'Life Insurance',
      icon: '💝',
      color: 'from-purple-500 to-pink-500',
      description: 'Life protection for your family'
    },
    {
      id: 'travel',
      name: 'Travel Insurance',
      icon: '✈️',
      color: 'from-yellow-500 to-orange-500',
      description: 'Coverage for domestic & international trips'
    },
    {
      id: 'shop',
      name: 'Shop Insurance',
      icon: '🏪',
      color: 'from-indigo-500 to-purple-500',
      description: 'Business & shop protection'
    },
    {
      id: 'marine',
      name: 'Marine Cargo',
      icon: '🚢',
      color: 'from-teal-500 to-blue-500',
      description: 'Cargo transit insurance'
    }
  ]

  const handleInputChange = (tab: TabKey, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [field]: value
      }
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData[activeTab])
    alert(`Thank you! We'll send you ${activeTab} insurance quotes on your mobile shortly.`)
  }

  const renderHealthForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
        <select
          value={formData.health.age}
          onChange={(e) => handleInputChange('health', 'age', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="">Select Age</option>
          {Array.from({ length: 60 }, (_, i) => i + 18).map(age => (
            <option key={age} value={age}>{age} years</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Family Members</label>
        <select
          value={formData.health.members}
          onChange={(e) => handleInputChange('health', 'members', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="1">Individual</option>
          <option value="2">Couple</option>
          <option value="3">Family (3 members)</option>
          <option value="4">Family (4 members)</option>
          <option value="5">Family (5 members)</option>
          <option value="6">Family (6+ members)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sum Insured</label>
        <select
          value={formData.health.sumInsured}
          onChange={(e) => handleInputChange('health', 'sumInsured', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="3">₹3 Lakh</option>
          <option value="5">₹5 Lakh</option>
          <option value="10">₹10 Lakh</option>
          <option value="15">₹15 Lakh</option>
          <option value="25">₹25 Lakh</option>
          <option value="50">₹50 Lakh</option>
          <option value="100">₹1 Crore</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
        <input
          type="text"
          value={formData.health.city}
          onChange={(e) => handleInputChange('health', 'city', e.target.value)}
          placeholder="Enter your city"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
    </div>
  )

  const renderCarForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
        <select
          value={formData.car.vehicleType}
          onChange={(e) => handleInputChange('car', 'vehicleType', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="car">Four Wheeler (Car)</option>
          <option value="bike">Two Wheeler (Bike)</option>
          <option value="commercial">Commercial Vehicle</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
        <select
          value={formData.car.carBrand}
          onChange={(e) => handleInputChange('car', 'carBrand', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select Brand</option>
          <option value="maruti">Maruti Suzuki</option>
          <option value="hyundai">Hyundai</option>
          <option value="tata">Tata</option>
          <option value="mahindra">Mahindra</option>
          <option value="honda">Honda</option>
          <option value="toyota">Toyota</option>
          <option value="bajaj">Bajaj</option>
          <option value="tvs">TVS</option>
          <option value="hero">Hero</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
        <input
          type="text"
          value={formData.car.carModel}
          onChange={(e) => handleInputChange('car', 'carModel', e.target.value)}
          placeholder="Enter vehicle model"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Registration Year</label>
        <select
          value={formData.car.registrationYear}
          onChange={(e) => handleInputChange('car', 'registrationYear', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select Year</option>
          {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  )

  const renderLifeForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
        <select
          value={formData.life.age}
          onChange={(e) => handleInputChange('life', 'age', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">Select Age</option>
          {Array.from({ length: 45 }, (_, i) => i + 18).map(age => (
            <option key={age} value={age}>{age} years</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
        <select
          value={formData.life.gender}
          onChange={(e) => handleInputChange('life', 'gender', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sum Assured</label>
        <select
          value={formData.life.sumAssured}
          onChange={(e) => handleInputChange('life', 'sumAssured', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="10">₹10 Lakh</option>
          <option value="25">₹25 Lakh</option>
          <option value="50">₹50 Lakh</option>
          <option value="75">₹75 Lakh</option>
          <option value="100">₹1 Crore</option>
          <option value="200">₹2 Crore</option>
          <option value="500">₹5 Crore</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Policy Term</label>
        <select
          value={formData.life.policyTerm}
          onChange={(e) => handleInputChange('life', 'policyTerm', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="10">10 Years</option>
          <option value="15">15 Years</option>
          <option value="20">20 Years</option>
          <option value="25">25 Years</option>
          <option value="30">30 Years</option>
          <option value="35">35 Years</option>
        </select>
      </div>
    </div>
  )

  const renderTravelForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
        <select
          value={formData.travel.destination}
          onChange={(e) => handleInputChange('travel', 'destination', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="">Select Destination</option>
          <option value="domestic">Domestic (India)</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="usa">USA/Canada</option>
          <option value="worldwide">Worldwide</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Trip Duration</label>
        <select
          value={formData.travel.tripDuration}
          onChange={(e) => handleInputChange('travel', 'tripDuration', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="7">Up to 7 days</option>
          <option value="15">Up to 15 days</option>
          <option value="30">Up to 30 days</option>
          <option value="60">Up to 60 days</option>
          <option value="90">Up to 90 days</option>
          <option value="180">Up to 180 days</option>
          <option value="365">Annual Multi-trip</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
        <select
          value={formData.travel.travelers}
          onChange={(e) => handleInputChange('travel', 'travelers', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5">5+ People</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Amount</label>
        <select
          value={formData.travel.coverageAmount}
          onChange={(e) => handleInputChange('travel', 'coverageAmount', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="1">$1,00,000</option>
          <option value="2">$2,00,000</option>
          <option value="5">$5,00,000</option>
          <option value="10">$10,00,000</option>
        </select>
      </div>
    </div>
  )

  const renderShopForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
        <select
          value={formData.shop.businessType}
          onChange={(e) => handleInputChange('shop', 'businessType', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="retail">Retail Shop</option>
          <option value="grocery">Grocery Store</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing & Textiles</option>
          <option value="restaurant">Restaurant</option>
          <option value="medical">Medical Store</option>
          <option value="office">Office</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Shop Area (sq ft)</label>
        <select
          value={formData.shop.shopArea}
          onChange={(e) => handleInputChange('shop', 'shopArea', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="500">Up to 500 sq ft</option>
          <option value="1000">500 - 1000 sq ft</option>
          <option value="2000">1000 - 2000 sq ft</option>
          <option value="5000">2000 - 5000 sq ft</option>
          <option value="10000">Above 5000 sq ft</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Stock Value</label>
        <select
          value={formData.shop.stockValue}
          onChange={(e) => handleInputChange('shop', 'stockValue', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="5">₹5 Lakh</option>
          <option value="10">₹10 Lakh</option>
          <option value="25">₹25 Lakh</option>
          <option value="50">₹50 Lakh</option>
          <option value="100">₹1 Crore</option>
          <option value="200">₹2 Crore</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <input
          type="text"
          value={formData.shop.location}
          onChange={(e) => handleInputChange('shop', 'location', e.target.value)}
          placeholder="Enter shop location"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
    </div>
  )

  const renderMarineForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Cargo Type</label>
        <select
          value={formData.marine.cargoType}
          onChange={(e) => handleInputChange('marine', 'cargoType', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="general">General Cargo</option>
          <option value="electronics">Electronics</option>
          <option value="textiles">Textiles</option>
          <option value="machinery">Machinery</option>
          <option value="food">Food Products</option>
          <option value="chemicals">Chemicals</option>
          <option value="automobiles">Automobiles</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Cargo Value</label>
        <select
          value={formData.marine.cargoValue}
          onChange={(e) => handleInputChange('marine', 'cargoValue', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="5">₹5 Lakh</option>
          <option value="10">₹10 Lakh</option>
          <option value="25">₹25 Lakh</option>
          <option value="50">₹50 Lakh</option>
          <option value="100">₹1 Crore</option>
          <option value="200">₹2 Crore</option>
          <option value="500">₹5 Crore</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
        <input
          type="text"
          value={formData.marine.origin}
          onChange={(e) => handleInputChange('marine', 'origin', e.target.value)}
          placeholder="From (City/Port)"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
        <input
          type="text"
          value={formData.marine.destination}
          onChange={(e) => handleInputChange('marine', 'destination', e.target.value)}
          placeholder="To (City/Port)"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>
    </div>
  )

  const renderForm = () => {
    switch (activeTab) {
      case 'health': return renderHealthForm()
      case 'car': return renderCarForm()
      case 'life': return renderLifeForm()
      case 'travel': return renderTravelForm()
      case 'shop': return renderShopForm()
      case 'marine': return renderMarineForm()
      default: return renderHealthForm()
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text mb-6">
            Get Instant Insurance Quotes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare premiums from top insurance companies and get the best deals in just 2 minutes
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabKey)}
              className={`flex flex-col items-center space-y-1 px-4 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
              whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{tab.icon}</span>
              <div className="text-center">
                <div className="font-bold text-sm">{tab.name}</div>
                <div className={`text-xs ${activeTab === tab.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {tab.description}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Calculator Form */}
        <motion.div 
          className="bg-white rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dynamic Form Fields */}
            <div className="mb-8">
              {renderForm()}
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData[activeTab].name}
                  onChange={(e) => handleInputChange(activeTab, 'name', e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  value={formData[activeTab].mobile}
                  onChange={(e) => handleInputChange(activeTab, 'mobile', e.target.value)}
                  placeholder="Enter mobile number"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                className={`bg-gradient-to-r ${tabs.find(t => t.id === activeTab)?.color} text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Free Quotes</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
              <p className="text-sm text-gray-500 mt-3">
                100% Free • Secure • Instant Quotes
              </p>
            </div>
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">2 Min</div>
            <div className="text-gray-600 text-sm">Quick Process</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600 text-sm">Insurance Partners</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
            <div className="text-gray-600 text-sm">Happy Customers</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}