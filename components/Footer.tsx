export default function Footer() {
  return (
    <footer className="bg-[#2C241F] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="../images/logo-elongated.png" 
                alt="Zanzibar Holiday Packages" 
                className="h-16 w-32 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Zanzibar Holiday Packages</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Leading eco-luxury tour operator crafting tailor-made gorilla trekking adventures 
              and authentic wildlife safaris across Uganda and Rwanda, with seamless extensions 
              into Kenya and Tanzania.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4A017] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A017] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A017] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Destinations with Flags */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A017]">Destinations</h4>
            <ul className="space-y-3">
              <li>
                <a href="/destinations/uganda" className="flex items-center text-gray-300 hover:text-[#D4A017] transition-colors group">
                  <img src="https://flagcdn.com/w40/ug.png" alt="Uganda flag" className="w-6 h-4 mr-3 object-cover rounded" />
                  <span className="text-sm">Uganda</span>
                </a>
              </li>
              <li>
                <a href="/destinations/rwanda-gorillas" className="flex items-center text-gray-300 hover:text-[#D4A017] transition-colors group">
                  <img src="https://flagcdn.com/w40/rw.png" alt="Rwanda flag" className="w-6 h-4 mr-3 object-cover rounded" />
                  <span className="text-sm">Rwanda</span>
                </a>
              </li>
              <li>
                <a href="/destinations/tanzania-safaris" className="flex items-center text-gray-300 hover:text-[#D4A017] transition-colors group">
                  <img src="https://flagcdn.com/w40/tz.png" alt="Tanzania flag" className="w-6 h-4 mr-3 object-cover rounded" />
                  <span className="text-sm">Tanzania</span>
                </a>
              </li>
              <li>
                <a href="/destinations/zanzibar" className="flex items-center text-gray-300 hover:text-[#D4A017] transition-colors group">
                  <img src="https://flagcdn.com/w40/tz.png" alt="Zanzibar flag" className="w-6 h-4 mr-3 object-cover rounded" />
                  <span className="text-sm">Zanzibar</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A017]">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-[#D4A017] transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-[#D4A017] transition-colors text-sm">About Us</a></li>
              <li><a href="/tours/safari-types" className="text-gray-300 hover:text-[#D4A017] transition-colors text-sm">Safari Packages</a></li>
              <li><a href="/tours/gorilla-tours" className="text-gray-300 hover:text-[#D4A017] transition-colors text-sm">Gorilla Trekking</a></li>
              <li><a href="/about/contact" className="text-gray-300 hover:text-[#D4A017] transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4A017]">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Kampala, Uganda</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+256778019248" className="text-sm hover:text-[#D4A017] transition-colors">+256 778 019 248</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:bigapesafrica@gmail.com" className="text-sm hover:text-[#D4A017] transition-colors break-all">bigapesafrica@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zanzibar Holiday Packages. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-gray-400 hover:text-[#D4A017] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#D4A017] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#D4A017] text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}