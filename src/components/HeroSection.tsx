import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Protect What Matters Most</span>
            <span className="block text-blue-200">With CitizenIMF Insurance</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Compare and buy insurance policies for health, motor, life, and travel. Get the best coverage at affordable rates.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/compare"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
            >
              Compare Plans
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 