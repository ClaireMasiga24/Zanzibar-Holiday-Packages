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
       {/* Countries Overlay - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white">
        <div className="text-lg md:text-xl font-serif font-light tracking-wider text-center" style={{ wordSpacing: '0.5em' }}>
          UGANDA | RWANDA | TANZANIA | ZANZIBAR
        </div>
      </div>

      </section>
      
  );
}