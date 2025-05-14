import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CitizenIMF</h3>
            <p className="text-gray-400">
              Your trusted partner for all insurance needs. We provide comprehensive coverage and excellent service.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/compare" className="text-gray-400 hover:text-white">Compare Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Insurance Products</h4>
            <ul className="space-y-2">
              <li><Link href="/insurance/health" className="text-gray-400 hover:text-white">Health Insurance</Link></li>
              <li><Link href="/insurance/motor" className="text-gray-400 hover:text-white">Motor Insurance</Link></li>
              <li><Link href="/insurance/life" className="text-gray-400 hover:text-white">Life Insurance</Link></li>
              <li><Link href="/insurance/travel" className="text-gray-400 hover:text-white">Travel Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@citizenimf.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Insurance Street, City, Country</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CitizenIMF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
