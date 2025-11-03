"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/rwanda-bg-one-1.jpg')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4B483]/70 to-[#D4B483]/50 z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Zanzibar Holidays
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover Paradise Islands with Luxury Beach Resorts, Cultural Tours, and Unforgettable Tropical Experiences
          </p>
          <button className="bg-[#FF6B6B] hover:bg-[#E55A5A] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
            EXPLORE ZANZIBAR
          </button>
        </div>
      </div>

      {/* Reviews Overlay - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20 text-white">
        <div className="flex flex-col space-y-4">
          {/* Google Reviews */}
          <div className="flex items-center space-x-4">
            <div>
              <div className="text-sm font-semibold mb-1">
                <span className="text-[#0E7C7B]">G</span>
                <span className="text-[#0E7C7B]">o</span>
                <span className="text-[#0E7C7B]">o</span>
                <span className="text-[#0E7C7B]">g</span>
                <span className="text-[#0E7C7B]">l</span>
                <span className="text-[#0E7C7B]">e</span>
              </div>
              <div className="flex items-center space-x-1">
                {/* 4.5 stars - 4 full, 1 half */}
                {[...Array(4)].map((_, i) => (
                  <svg key={`google-full-${i}`} className="w-4 h-4 text-[#F4A261]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <svg className="w-4 h-4 text-[#F4A261]" fill="currentColor" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                      <stop offset="50%" stopColor="currentColor"/>
                      <stop offset="50%" stopColor="transparent"/>
                    </linearGradient>
                  </defs>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half-star)"/>
                </svg>
              </div>
            </div>
            <div className="text-sm font-bold">4.8 Star Rating</div>
          </div>

          {/* Tripadvisor Reviews */}
          <div className="flex items-center space-x-4">
            <div>
              <div className="text-sm font-semibold mb-1">Tripadvisor Reviews</div>
              <div className="flex items-center space-x-1">
                {/* 5 filled circles */}
                {[...Array(5)].map((_, i) => (
                  <svg key={`tripadvisor-circle-${i}`} className="w-4 h-4 text-[#F4A261]" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-sm font-bold">5/5 User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
