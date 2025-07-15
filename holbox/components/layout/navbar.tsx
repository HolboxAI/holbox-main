'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, ChevronDown, Menu, X } from 'lucide-react';

interface NavSubItem {
  title: string;
  href: string;
}

interface NavItemProps {
  title: string;
  items: NavSubItem[];
  active: boolean;
  isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ title, items, active, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (items.length === 1) {
    return (
      <Link
        href={items[0].href}
        className={`px-2 py-2 text-base font-medium transition-colors ${active
            ? 'text-blue-600'
            : 'text-gray-800 hover:text-blue-600'
          }`}
      >
        {title}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <div
        className="flex items-center gap-1 cursor-pointer px-2 py-2"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <span
          className={`text-base font-medium transition-colors ${active
              ? 'text-blue-600'
              : 'text-gray-800 hover:text-blue-600'
            }`}
        >
          {title}
        </span>
        {items.length > 1 && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
              } ${active ? 'text-blue-600' : 'text-gray-800'
              }`}
          />
        )}
      </div>

      <AnimatePresence>
        {isOpen && items.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 overflow-hidden ${isMobile ? 'relative mt-0 w-full' : ''
              }`}
          >
            <div className={`py-1 ${isMobile ? 'flex flex-col' : ''}`}>
              {items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Use Next.js hook to get current path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Separate useEffect to watch for pathname changes
  useEffect(() => {
    if (pathname.startsWith('/ai-platform')) {
      setActiveNav('AI Platform');
    }
    else if (pathname === '/solutions') {
      setActiveNav('Solutions');
    }
    else if (pathname.startsWith('/company')) {
      setActiveNav('Company');
    }
    else {
      setActiveNav(null);
    }
  }, [pathname]); // This will trigger when pathname changes

  const navItems: NavItemProps[] = [
    {
      title: 'AI Platform',
      items: [
        { title: 'Smart Assistant For Employees', href: '/ai-platform/smart-assistant' },
        { title: 'AI Powered Customer Service', href: '/ai-platform/customer-service' },
      ],
      active: activeNav === 'AI Platform',
    },
    {
      title: 'Solutions',
      items: [{ title: 'Solutions', href: '/solutions' }],
      active: activeNav === 'Solutions',
    },
    {
      title: 'Company',
      items: [
        { title: 'About Us', href: '/company/about' },
        { title: 'Blog', href: '/company/blog' },
      ],
      active: activeNav === 'Company',
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-70 backdrop-blur-md'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/holboxai_logo.jpg"
                alt="HolboxAI Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-bold text-gray-900">HolboxAI</span>
            </Link>
          </div>

          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <NavItem key={i} title={item.title} items={item.items} active={item.active} />
            ))}
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                CONTACT US
              </button>
            </Link>
          </nav>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white rounded-b-md shadow-md overflow-hidden"
            >
              <div className="flex flex-col px-4 py-2 space-y-1">
                {navItems.map((item, i) => (
                  <NavItem
                    key={i}
                    title={item.title}
                    items={item.items}
                    active={item.active}
                    isMobile
                  />
                ))}
                <Link href="/contact">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 mt-2"
                  >
                    CONTACT US
                  </button>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;