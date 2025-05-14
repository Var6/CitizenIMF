import Link from 'next/link';
import { Heart, Car, User, Plane } from 'lucide-react';

const categories = [
  {
    name: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family',
    icon: Heart,
    href: '/insurance/health',
  },
  {
    name: 'Motor Insurance',
    description: 'Protect your vehicle with our motor insurance plans',
    icon: Car,
    href: '/insurance/motor',
  },
  {
    name: 'Life Insurance',
    description: 'Secure your family\'s future with life insurance',
    icon: User,
    href: '/insurance/life',
  },
  {
    name: 'Travel Insurance',
    description: 'Travel worry-free with our travel insurance coverage',
    icon: Plane,
    href: '/insurance/travel',
  },
];

const InsuranceCategories = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Insurance Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our wide range of insurance products
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceCategories; 