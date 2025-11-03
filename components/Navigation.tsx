'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Activities', href: '/activities' },
    { name: 'Accommodation', href: '/accommodation' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar - Neutral Base: Ivory */}
      <div className="bg-[#FBF6EF] text-[#2B2B2B] py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-[#0E7C7B]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>+255 777 123 456</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <svg className="w-4 h-4 text-[#0E7C7B]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>bigapesafrica@gmail.com</span>
            </div>
          </div>

          {/* Social Icons and Secondary CTA */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Ocean Teal */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="text-[#0E7C7B] hover:text-[#06494B] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-[#0E7C7B] hover:text-[#06494B] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-[#0E7C7B] hover:text-[#06494B] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 2.43A45.232 45.232 0 0114.5 2C16.376 2 18 3.626 18 5.5c0 1.56-.755 2.94-1.914 3.79A1.49 1.49 0 0115.5 10h-11A1.5 1.5 0 013 8.5c0-1.56.755-2.94 1.914-3.79A1.49 1.49 0 015.5 4c.64 0 1.24.16 1.767.43.527.27.97.65 1.293 1.11.323-.46.766-.84 1.293-1.11zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308c-.78.348-1.64.54-2.5.54h-11c-.86 0-1.72-.192-2.5-.54z"/>
                </svg>
              </a>
            </div>

            {/* Secondary CTA - Sunset Gold */}
            <button className="bg-[#F4A261] hover:bg-[#E69150] text-white px-3 py-1 rounded-md text-sm font-medium transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Deep Sand */}
      <div className="bg-[#D4B483] text-[#2B2B2B] py-4 px-4 md:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo with image and stacked text - Charcoal */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/images/IMG-20211108-WA0018 (1).jpg" 
              alt="Zanzibar Holiday Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#2B2B2B] leading-tight">Zanzibar</span>
              <span className="text-lg font-medium text-[#2B2B2B] leading-tight">Holiday</span>
              <span className="text-sm font-normal text-[#2B2B2B] leading-tight">Packages</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium hover:text-[#1A1A1A] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Primary CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Primary CTA - Coral */}
            <button className="hidden md:block bg-[#FF6B6B] hover:bg-[#E55A5A] text-white px-6 py-2 rounded-md font-medium transition-colors">
              Explore Packages
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-[#2B2B2B] transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-[#2B2B2B] transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-[#2B2B2B] transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#D4B483] border-t border-[#C4A473] mt-4 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium hover:text-[#1A1A1A] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-[#FF6B6B] hover:bg-[#E55A5A] text-white px-6 py-2 rounded-md font-medium transition-colors mt-2">
                Explore Packages
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
