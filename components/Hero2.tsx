'use client';

import Image from 'next/image';

const categories = [
  { label: "Car Insurance", icon: "🚗", href: "/products/four-wheeler" },
  { label: "2 Wheeler", icon: "🏍️", href: "/products/two-wheeler" },
  { label: "Health Insurance", icon: "🏥", href: "/products/health" },
  { label: "Life Insurance", icon: "☂️", href: "/products/life" },
  { label: "Travel Insurance", icon: "✈️", href: "/products/travel" },
  { label: "Personal Accident", icon: "🛡️", href: "/products/accident" },
  { label: "Shop Insurance", icon: "🏪", href: "/products/shop" },
  { label: "Marine Cargo", icon: "🚢", href: "/products/commercial" },
  { label: "Home Insurance", icon: "🏠", href: "/products/home" },
  { label: "All Insurance", icon: "📋", href: "/products" },
];

export default function Hero2Section() {
  return (
    <section className="bg-gradient-to-br from-[#f7fcfd] to-[#e8f8fc] py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 w-full">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-[#009ec7] mb-4 leading-tight">
                Your Trusted
                <br />
                <span className="text-[#08b3e1] bg-gradient-to-r from-[#009ec7] to-[#08b3e1] bg-clip-text text-transparent">
                  Insurance Partner
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-2">
                Get the Best Insurance Plans Tailored to Your Needs
              </p>
              <p className="text-lg text-gray-600">
                Compare & Buy from India's Leading Insurance Companies
              </p>
            </div>
            {/* Insurance Categories Grid */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Choose Your Insurance Type</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {categories.map((cat) => (
                  <a
                    key={cat.label}
                    href={cat.href}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-all duration-200 group cursor-pointer"
                  >
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</span>
                    <span className="text-xs font-medium text-gray-700 text-center leading-tight">{cat.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative mb-8">
              <div className="bg-gradient-to-r from-[#009ec7] to-[#08b3e1] text-white rounded-2xl px-8 py-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <span className="text-3xl font-bold block">24/7</span>
                  <span className="text-lg font-medium">Customer Support</span>
                </div>
              </div>
              <Image
                src="/Support.png"
                alt="Customer Support Illustration"
                width={280}
                height={280}
                className="mx-auto mt-4"
              />
            </div>

            {/* Trust Indicators */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#009ec7]">5K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#009ec7]">10+</div>
                  <div className="text-sm text-gray-600">Insurance Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#009ec7]">95%</div>
                  <div className="text-sm text-gray-600">Claim Settlement</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}