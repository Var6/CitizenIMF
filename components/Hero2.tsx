'use client';

import Image from 'next/image';

const categories = [
  { label: "Car", icon: "🚗" },
  { label: "2 wheeler", icon: "🚲" },
  { label: "Health", icon: "👨‍⚕️" },
  { label: "Term", icon: "☂️" },
  { label: "Family Health", icon: "👨‍👩‍👧‍👦" },
  { label: "Multi Individual", icon: "🙍" },
  { label: "Family Travel", icon: "🚢" },
  { label: "Student Travel", icon: "👨‍🎓" },
  { label: "Individual Travel", icon: "✈️🧳" },
  { label: "More", icon: "🪟" },
];

export default function Hero2Section() {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-[#f7fcfd] py-12 px-4 lg:px-16 gap-8">
      <div className="flex-1 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-[#009ec7] mb-2">
          Excellent <br /><span className="text-[#08b3e1]">Customer Service</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">Get Best Insurance Plans In Your Budget</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="bg-white rounded-xl shadow-md py-6 flex flex-col items-center hover:shadow-lg transition mb-2"
            >
              <span className="text-3xl" >{cat.icon}</span>
              <span className="mt-1 text-sm font-medium text-gray-700">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative">
          <div className="bg-[#08b3e1] text-white rounded-bl-[100px] rounded-tr-[100px] px-8 py-6 mb-4 shadow-lg w-fit text-left">
            <span className="text-2xl font-semibold block">Excellent <br />CUSTOMER SERVICE</span>
          </div>
          <Image
            src="/illustrations/support-person.svg"
            alt="Customer Support Illustration"
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
