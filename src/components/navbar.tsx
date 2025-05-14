'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Health Insurance', href: '/insurance/health' },
    { name: 'Motor Insurance', href: '/insurance/motor' },
    { name: 'Life Insurance', href: '/insurance/life' },
    { name: 'Travel Insurance', href: '/insurance/travel' },
    { name: 'Compare Plans', href: '/compare' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Citizen IMF" width={40} height={40} className="rounded" />
          <span className="text-xl font-bold text-orange-500">CitizenIMF</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative hover:text-orange-500 transition-transform hover:scale-110 ${
                pathname === item.href ? 'text-orange-800' : 'text-gray-900'
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500"></span>
              )}
            </Link>
          ))}
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white/98 backdrop-blur-lg shadow-xl">
            <div className="p-6">
              <div className="flex justify-end mb-6">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-orange-500"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 text-gray-900 hover:text-orange-500 transition-transform hover:scale-105 ${
                      pathname === item.href ? 'text-orange-800 font-medium' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;