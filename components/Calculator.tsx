'use client'

import { useState } from 'react'
import { motion } from "motion/react"

type TabKey = 'health' | 'car' | 'life' | 'investment';

type HealthForm = {
  age: string;
  members: string;
  sumInsured: string;
  city: string;
  name: string;
  mobile: string;
};

type CarForm = {
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

type InvestmentForm = {
  age: string;
  monthlyIncome: string;
  investmentAmount: string;
  investmentGoal: string;
  riskProfile: string;
  name: string;
  mobile: string;
};

type FormData = {
  health: HealthForm;
  car: CarForm;
  life: LifeForm;
  investment: InvestmentForm;
};

export default function PremiumCalculatorSection() {
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
    investment: {
      age: '',
      monthlyIncome: '',
      investmentAmount: '1000',
      investmentGoal: 'retirement',
      riskProfile: 'moderate',
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
      description: 'Get instant health insurance quotes'
    },
    {
      id: 'car',
      name: 'Car Insurance',
      icon: '🚗',
      color: 'from-blue-500 to-cyan-500',
      description: 'Compare car insurance premiums'
    },
    {
      id: 'life',
      name: 'Life Insurance',
      icon: '💝',
      color: 'from-purple-500 to-pink-500',
      description: 'Calculate life insurance coverage'
    },
    {
      id: 'investment',
      name: 'Investment Plans',
      icon: '📈',
      color: 'from-orange-500 to-red-500',
      description: 'Plan your investment journey'
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
          <option value="1">Self</option>
          <option value="2">Self + Spouse</option>
          <option value="3">Self + Spouse + 1 Child</option>
          <option value="4">Self + Spouse + 2 Children</option>
          <option value="5">Self + Parents</option>
          <option value="6">Entire Family</option>
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
        <label className="block text-sm font-medium text-gray-700 mb-2">Car Brand</label>
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
          <option value="ford">Ford</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Car Model</label>
        <input
          type="text"
          value={formData.car.carModel}
          onChange={(e) => handleInputChange('car', 'carModel', e.target.value)}
          placeholder="Enter car model"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
        <select
          value={formData.car.fuelType}
          onChange={(e) => handleInputChange('car', 'fuelType', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="cng">CNG</option>
          <option value="electric">Electric</option>
        </select>
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

  const renderInvestmentForm = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
        <select
          value={formData.investment.age}
          onChange={(e) => handleInputChange('investment', 'age', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="">Select Age</option>
          {Array.from({ length: 47 }, (_, i) => i + 18).map(age => (
            <option key={age} value={age}>{age} years</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income</label>
        <select
          value={formData.investment.monthlyIncome}
          onChange={(e) => handleInputChange('investment', 'monthlyIncome', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="">Select Income</option>
          <option value="25000">₹25,000 - ₹50,000</option>
          <option value="50000">₹50,000 - ₹1,00,000</option>
          <option value="100000">₹1,00,000 - ₹2,00,000</option>
          <option value="200000">₹2,00,000 - ₹5,00,000</option>
          <option value="500000">₹5,00,000+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Investment</label>
        <select
          value={formData.investment.investmentAmount}
          onChange={(e) => handleInputChange('investment', 'investmentAmount', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="1000">₹1,000</option>
          <option value="2500">₹2,500</option>
          <option value="5000">₹5,000</option>
          <option value="10000">₹10,000</option>
          <option value="25000">₹25,000</option>
          <option value="50000">₹50,000+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Investment Goal</label>
        <select
          value={formData.investment.investmentGoal}
          onChange={(e) => handleInputChange('investment', 'investmentGoal', e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="retirement">Retirement</option>
          <option value="child-education">Child Education</option>
          <option value="wealth-creation">Wealth Creation</option>
          <option value="tax-saving">Tax Saving</option>
          <option value="emergency-fund">Emergency Fund</option>
        </select>
      </div>
    </div>
  )

  const renderForm = () => {
    switch (activeTab) {
      case 'health': return renderHealthForm()
      case 'car': return renderCarForm()
      case 'life': return renderLifeForm()
      case 'investment': return renderInvestmentForm()
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabKey)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
              whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{tab.icon}</span>
              <div className="text-left">
                <div className="font-bold">{tab.name}</div>
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
                💯 100% Free • 🔒 Secure • ⚡ Instant Quotes
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
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600 text-sm">Insurance Partners</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
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