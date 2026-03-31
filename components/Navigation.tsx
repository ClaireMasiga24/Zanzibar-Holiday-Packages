'use client';

import { useState } from 'react';

type MenuItem = {
  name: string;
  href?: string;
  hasDropdown?: boolean;
  submenu?: MenuItem[];
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menuItem: string) => {
    setActiveDropdown(activeDropdown === menuItem ? null : menuItem);
  };

  const toggleSubDropdown = (subMenuItem: string) => {
    setActiveSubDropdown(activeSubDropdown === subMenuItem ? null : subMenuItem);
  };

  const menuItems: MenuItem[] = [
    { name: 'Home', href: '/' },

    { 
      name: 'Safaris', 
      hasDropdown: true, 
      submenu: [
        { name: 'Zanzibar Beach Holidays', href: '/tours/zanzibar-beach-holidays' },
        { name: 'Zanzibar Honeymoon Packages', href: '/tours/zanzibar-honeymoon' },
        { name: 'Zanzibar Luxury Escapes', href: '/tours/zanzibar-luxury' },
        { name: 'Zanzibar Family Trips', href: '/tours/zanzibar-family' },
        { name: 'Zanzibar Travel Guide', href: '/tours/zanzibar-travel-guide' }
      ] 
    },

    { 
      name: 'Destinations', 
      hasDropdown: true, 
      submenu: [
        { 
          name: 'Zanzibar', 
          hasDropdown: true, 
          href: '/destinations/zanzibar', 
          submenu: [
            { name: 'Stone Town', href: '/destinations/stone-town' },
            { name: 'Nungwi Beach', href: '/destinations/nungwi' },
            { name: 'Kendwa Beach', href: '/destinations/kendwa' },
            { name: 'Jambiani Beach', href: '/destinations/jambiani' },
            { name: 'Paje Beach', href: '/destinations/paje' },
            { name: 'Zanzibar Travel Guide', href: '/destinations/zanzibar-guide' }
          ] 
        }
      ] 
    },

    { 
      name: 'Experiences', 
      hasDropdown: true, 
      submenu: [
        { name: 'Snorkeling & Diving', href: '/activities/snorkeling-diving' },
        { name: 'Dolphin Tours', href: '/activities/dolphin-tours' },
        { name: 'Spice Farm Tours', href: '/activities/spice-tours' },
        { name: 'Sunset Dhow Cruises', href: '/activities/sunset-cruise' }
      ] 
    },

    { 
      name: 'Accommodation', 
      hasDropdown: true, 
      submenu: [
        { name: 'Beach Resorts', href: '/accommodation/beach-resorts' },
        { name: 'Luxury Villas', href: '/accommodation/luxury-villas' },
        { name: 'Boutique Hotels', href: '/accommodation/boutique-hotels' }
      ] 
    },

    { name: 'Stories', href: '/stories' },
    { name: 'About Us', href: '/about' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#F7F6F2] text-[#2C241F] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="font-semibold">Contact Us</span>
          <a href="mailto:bigapesafrica@gmail.com" className="hover:text-[#2A8F63]">
            bigapesafrica@gmail.com
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-[#2A8F63] text-black py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <img 
            src="/images/logo-elongated.png" 
            alt="Zanzibar Holiday Packages" 
            className="h-12 w-24 sm:h-16 sm:w-32 object-contain"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <a href={item.href || '#'} className="font-medium hover:text-[#F58220]">
                  {item.name}
                </a>

                {item.hasDropdown && item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} className="relative group/sub">
                        <a href={subItem.href} className="block px-4 py-2 hover:bg-gray-100">
                          {subItem.name}
                        </a>

                        {subItem.hasDropdown && subItem.submenu && (
                          <div className="absolute left-full top-0 w-56 bg-white shadow opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible">
                            {subItem.submenu.map((nestedItem: MenuItem) => (
                              <a key={nestedItem.name} href={nestedItem.href} className="block px-4 py-2 hover:bg-gray-100">
                                {nestedItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#" className="hidden md:block bg-[#D4A017] px-4 py-2 rounded">
            Book Now
          </a>

          {/* Mobile Button */}
          <button onClick={toggleMenu} className="md:hidden">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                <a href={item.href || '#'} className="block py-2">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}