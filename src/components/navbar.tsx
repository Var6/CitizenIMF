'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isVehicleLoanOpen, setIsVehicleLoanOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState('right'); // Tracks dropdown direction
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const vehicleLoanTimerRef = useRef<NodeJS.Timeout | null>(null);

  const servicesRef = useRef<HTMLDivElement>(null);

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (vehicleLoanTimerRef.current) clearTimeout(vehicleLoanTimerRef.current);
    };
  }, []);

  // Determine dropdown direction based on available space
  useEffect(() => {
    if (servicesRef.current) {
      const rect = servicesRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      if (rect.right > viewportWidth) {
        setDropdownDirection('left');
      } else {
        setDropdownDirection('right');
      }
    }
  }, [isServicesDropdownOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);
  const toggleVehicleLoan = () => setIsVehicleLoanOpen(!isVehicleLoanOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md">
      {/* Top Section */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-sm text-gray-800">
        <div className="flex items-center space-x-4">
          <a href="mailto:CitizenIMF@gmail.com" className="hover:text-orange-500 transition">
            📧 CitizenIMF@gmail.com
          </a>
          <a href="tel:+919876543210" className="hover:text-orange-500 transition">
            📞 +91-9876543210
          </a>
        </div>
        <Link
          href="/Quote"
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition"
        >
          Get Quote
        </Link>
      </div>

      {/* Main Section */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Citizen IMF" width={60} height={60} className="rounded" />
            <span className="text-xl font-bold text-orange-500 md:inline">CitizenIMF</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`relative hover:text-orange-500 transition ${
              pathname === '/' ? 'scale-110 text-orange-800' : 'text-gray-900'
            }`}
          >
            Home
            {pathname === '/' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] scale-x-100 bg-orange-500"></span>
            )}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            ref={servicesRef}
            onMouseEnter={() => {
              if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
              setIsServicesDropdownOpen(true);
            }}
            onMouseLeave={() => {
              closeTimerRef.current = setTimeout(() => {
                setIsServicesDropdownOpen(false);
              }, 2000); // 2 second delay
            }}
          >
            <button className="flex items-center hover:text-orange-500 transition text-gray-900">
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            {isServicesDropdownOpen && (
              <div
                className={`absolute top-8 ${
                  dropdownDirection === 'right' ? 'left-0' : 'right-0'
                } bg-white shadow-lg rounded-lg w-48 z-50`}
              >
                <Link
                  href="/Services/Consulting"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Consulting
                </Link>
                <Link
                  href="/Services/Training"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Training
                </Link>
                <div
                  className="relative group"
                  onMouseEnter={() => {
                    if (vehicleLoanTimerRef.current) clearTimeout(vehicleLoanTimerRef.current);
                    setIsVehicleLoanOpen(true);
                  }}
                  onMouseLeave={() => {
                    vehicleLoanTimerRef.current = setTimeout(() => {
                      setIsVehicleLoanOpen(false);
                    }, 100); 
                  }}
                >
                  <button className="flex items-center w-full px-4 py-2 text-left hover:bg-orange-100">
                    Vehicle Loan <ChevronRight size={16} className="ml-auto" />
                  </button>
                  {isVehicleLoanOpen && (
                    <div
                      className={`absolute top-0 ${
                        dropdownDirection === 'right' ? 'left-full' : 'right-full'
                      } bg-white shadow-lg rounded-lg w-48 z-50`}
                    >
                      <Link
                        href="/Services/VehicleLoan/TwoWheeler"
                        className="block px-4 py-2 hover:bg-orange-100"
                      >
                        Two-Wheeler Loan
                      </Link>
                      <Link
                        href="/Services/VehicleLoan/FourWheeler"
                        className="block px-4 py-2 hover:bg-orange-100"
                      >
                        Four-Wheeler Loan
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/Partners"
            className={`relative hover:text-orange-500 transition ${
              pathname === '/Partners' ? 'scale-110 text-orange-800' : 'text-gray-900'
            }`}
          >
            Partners
            {pathname === '/Partners' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"></span>
            )}
          </Link>

          <Link
            href="/Contact"
            className={`relative hover:text-orange-500 transition ${
              pathname === '/Contact' ? 'scale-110 text-orange-800' : 'text-gray-900'
            }`}
          >
            Contact
            {pathname === '/Contact' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"></span>
            )}
          </Link>

          <Link
            href="/About"
            className={`relative hover:text-orange-500 transition ${
              pathname === '/About' ? 'scale-110 text-orange-800' : 'text-gray-900'
            }`}
          >
            About
            {pathname === '/About' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"></span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex justify-end">
          <button onClick={toggleMobileMenu} className="text-gray-900 focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white/40 backdrop-blur-md z-50 flex flex-col px-4 py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-gray-900 hover:text-orange-500 transition ${
              pathname === '/' ? 'text-orange-800 underline' : ''
            }`}
          >
            Home
          </Link>
          <div className="space-y-1">
            <button
              onClick={toggleServicesDropdown}
              className="flex items-center w-full text-left text-gray-900 hover:text-orange-500"
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            {isServicesDropdownOpen && (
              <div className="pl-4 space-y-1">
                <Link href="/Services/Consulting" className="block hover:text-orange-500">
                  Consulting
                </Link>
                <Link href="/Services/Training" className="block hover:text-orange-500">
                  Training
                </Link>
                <button
                  onClick={toggleVehicleLoan}
                  className="flex items-center w-full text-left hover:text-orange-500"
                >
                  Vehicle Loan <ChevronRight size={16} className="ml-auto" />
                </button>
                {isVehicleLoanOpen && (
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/Services/VehicleLoan/TwoWheeler"
                      className="block hover:text-orange-500"
                    >
                      Two-Wheeler Loan
                    </Link>
                    <Link
                      href="/Services/VehicleLoan/FourWheeler"
                      className="block hover:text-orange-500"
                    >
                      Four-Wheeler Loan
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
          <Link
            href="/Partners"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-gray-900 hover:text-orange-500 transition ${
              pathname === '/Partners' ? 'text-orange-800 underline' : ''
            }`}
          >
            Partners
          </Link>
          <Link
            href="/Contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-gray-900 hover:text-orange-500 transition ${
              pathname === '/Contact' ? 'text-orange-800 underline' : ''
            }`}
          >
            Contact
          </Link>
          <Link
            href="/About"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block text-gray-900 hover:text-orange-500 transition ${
              pathname === '/About' ? 'text-orange-800 underline' : ''
            }`}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
