"use client";

import { useState } from "react";

import Hero from "../components/Hero";


export default function Home() {
  const [showAllPackages, setShowAllPackages] = useState(false);
  const [showMoreGorilla, setShowMoreGorilla] = useState(false);

  const safariPackages = [
    {
      id: 1,
      title: "Gorilla Trekking Safari",
      description: "Experience mountain gorilla trekking in Uganda's Bwindi Impenetrable Forest. This eco-friendly package offers amazing wildlife encounters with expert local guides.",
    },
    {
      id: 2,
      title: "Chimpanzee Tracking Adventure",
      description: "Track wild chimpanzees in Kibale Forest National Park. Experience authentic African culture and wildlife in this sustainable safari adventure.",
    },
    {
      id: 3,
      title: "Luxury Wildlife Safari",
      description: "A luxury eco-safari that combines comfort with conservation. Explore Uganda's national parks with premium accommodations and community support.",
    },
    {
      id: 4,
      title: "Family Safari Experience",
      description: "Family-friendly sustainable safari that creates lasting memories for all ages. Immerse yourself in Uganda's natural beauty with carefully crafted activities.",
    },
    {
      id: 5,
      title: "Bird Watching Safari",
      description: "Discover Uganda's incredible bird diversity with expert guides. Perfect for bird enthusiasts seeking rare species and beautiful landscapes.",
    },
    {
      id: 6,
      title: "Cultural & Wildlife Safari",
      description: "Combine wildlife viewing with authentic cultural experiences. Meet local communities and learn about traditional Ugandan culture.",
    },
    {
      id: 7,
      title: "Adventure Safari Package",
      description: "Adventure meets conservation in this thrilling sustainable wildlife experience. Includes hiking, wildlife viewing, and community visits.",
    },
    {
      id: 8,
      title: "Gorilla Habituation Experience",
      description: "Extended gorilla trekking experience for wildlife enthusiasts. Spend more time with gorilla families in their natural habitat.",
    },
    {
      id: 9,
      title: "Comprehensive East Africa Safari",
      description: "Multi-country safari covering Uganda, Rwanda, and Kenya. A comprehensive sustainable safari covering multiple national parks and conservation areas.",
    },
  ];

  const displayedPackages = showAllPackages ? safariPackages : safariPackages.slice(0, 6);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Uganda Safari Company - Authentic African Safari Experiences",
    "description": "Uganda Safari Company offers authentic safari experiences in Uganda and Rwanda. Gorilla trekking, chimpanzee tracking, wildlife tours, and custom African adventures.",
    "url": "https://ugandasafaricompany.com",
    "mainEntity": {
      "@type": "TouristInformationCenter",
      "name": "Uganda Safari Company",
      "description": "Uganda Safari Company offers authentic safari experiences in Uganda and Rwanda, specializing in destination management for tour operators worldwide and private or group tailor-made African adventures.",
      "telephone": "+256-XXX-XXXXXX",
      "email": "bigapesafrica@gmail.com"
    }
  };

  return (
    <>
      <div className="min-h-screen">
        
        <Hero />

        {/* Overview Section with Read More - CENTER ALIGNED */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Safari To East Africa
              </h2>
            </div>

            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">We Are Big Apes Africa</h3>
              <hr className="my-4 border-gray-900 border-2 w-64 mx-auto" />
              <p className="text-lg text-gray-700 leading-relaxed">
                We are dedicated to providing personalized and sustainable safari experiences that allow you to fully immerse yourself in the natural and cultural wonders of Africa. From the breathtaking beauty of mountain gorillas and chimpanzees to the thrill of spotting the Big 5 game animals, our expert local guides will help you discover the unique sights and lifestyles of communities.
              </p>
              <div className="mt-6">
                <img 
                  src="/images/big-apes-africa-2.jpg" 
                  alt="Big Apes Africa - Uganda Safari Company" 
                  className="mx-auto rounded-lg shadow-lg max-w-full h-auto max-h-96 object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mt-4">
                Booking Gorilla Safaris & Wildlife across East Africa
              </h4>
           
              {/* Gorilla Booking Expandable Content - INSIDE THE SAME SECTION */}
              <div className="space-y-6 text-center mt-6">
                {/* Always visible paragraphs */}
                <p className="text-lg text-gray-900 leading-relaxed">
                  There's nothing quite like sharing a few long moments with a mountain gorilla family: the first glimpse of black as a juvenile jumps off a nearby branch, a toddler clings to its mother's back and a giant silverback rises to size you up. To make the most of this life-changing experience, planning ahead is essential.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed">
                  Any time you can. The experience will be incredible no matter when you go, but there are advantages to going at different times of the year.
                </p>
                
                {/* Expandable content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    showMoreGorilla ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-6 pt-2">
                    <p className="text-lg text-gray-900 leading-relaxed">
                      It's generally easier to track gorillas in the rainy seasons (March to May and September to November) because they hang out at lower altitudes. You may also get better photos in the rainy season, assuming it isn't raining at the time you're with the gorillas, because they love to sunbathe after getting wet. Then again, you'll need to be wearing some serious wet-weather gear.
                    </p>
                    
                    <p className="text-lg text-gray-900 leading-relaxed">
                      The busiest times on the mountains are December to February and July to August. Scoring permits takes more effort during these months, but that won't matter if a tour company is handling things for you.
                    </p>
                    
                    <p className="text-lg text-gray-900 leading-relaxed">
                      Permits are required to visit the gorillas and booking ahead is always a good idea, particularly if you're planning to visit Uganda's Bwindi Impenetrable National Park and Rwanda's Volcanoes National Park from December to February or July to August. If you aren't travelling in these months and you only have a very small window of opportunity, you should still make a reservation as far in advance as possible to be safe.
                    </p>
                    
                    <p className="text-lg text-gray-900 leading-relaxed">
                      To make a phone booking for Rwanda, you need to pay a deposit by bank transfer, while in Uganda you'll need to provide all the money up front. If you can't get a gorilla permit on your own, you'll need to go through a tour operator, which is often a good idea anyway. In the Democratic Republic of the Congo (DRC), you can book online.
                    </p>
                  </div>
                </div>
                
                {/* Show more/less button */}
                <div className="pt-6">
                  <button
                    onClick={() => setShowMoreGorilla(!showMoreGorilla)}
                    className="bg-[#C8975F] hover:bg-[#B38650] text-white font-semibold py-3 px-10 rounded-md transition-all duration-300 shadow-md"
                    aria-label={showMoreGorilla ? "Show less content" : "Show more content"}
                  >
                    {showMoreGorilla ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Seller Tours */}
<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-4">
    
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-serif text-[#8B5A2B] mb-2">
        Best Seller <span className="relative inline-block">Tours</span>
      </h2>
    </div>

    {/* Two-column list */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">

      {/* LEFT COLUMN */}
      <div className="space-y-6">
        {[
          { title: "17 Days Uganda Wildlife-Culture Safari", badge: "Popular Tour of the Year" },
          { title: "10 Days Best Of Uganda Safari", badge: "Top Choice for Travelers!" },
          { title: "12 Days Best Of Uganda Safari", badge: "Bestselling Adventures" },
          { title: "2 Days Kigali City Tour & Gorillas Rwanda", badge: "New" },
          { title: "6 Days Gorilla & Wildlife Tour in Rwanda", badge: "Top Rated" },
        ].map((item, i) => (
          <div key={i} className="border-b border-gray-200 pb-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-700">✔</span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[17px] text-[#000000]">
                  {item.title}
                </span>
                <span className="text-xs bg-sky-400 text-white px-2 py-[2px] rounded">
                  {item.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">
        {[
          { title: "10 Days Gorillas, Chimps & Big 5 Wildlife Safari", badge: "Traveler’s Choice" },
          { title: "25 Days Uganda Safari" },
          { title: "18 Days Uganda Safari", badge: "Must Go" },
          { title: "7 Days Rwanda And Uganda Gorilla Safari" },
          { title: "4 Days Uganda Double Gorilla Trekking.", badge: "Best Seller" },
        ].map((item, i) => (
          <div key={i} className="border-b border-gray-200 pb-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-700">✔</span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[17px] text-gray-800">
                  {item.title}
                </span>
                {item.badge && (
                  <span className="text-xs bg-sky-400 text-white px-2 py-[2px] rounded">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


        {/* Popular Activities */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Popular Activities
              </h2>
              <p className="text-lg text-gray-600">
                Discover what makes our safaris exceptional
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: "Local Expertise",
                  desc: "We're a team of eco-conscious local Uganda safari experts with extensive knowledge of East African safari attractions and facilities.",
                  image: "/images/big-apes-africa-2.jpg",
                },
                {
                  title: "Intimate Experiences",
                  desc: "With our expertise, we guide our guests into finding that sustainable and intimate connection with our safari destinations.",
                  image: "/images/rafting-jinja-uganda.jpg",
                },
                {
                  title: "Authentically Wild",
                  desc: "Our trips allow guests to immerse themselves in authentic African culture, wildlife, and scenery that leaves a mark on their senses.",
                  image: "/images/visit-uganda-1.jpeg",
                },
                {
                  title: "Value for Money",
                  desc: "Our quotes have no hidden costs, we do not cut corners. We tailor-make your trip to your style & budget without compromising on value.",
                  image: "/images/wildlife-viewing-1.jpg",
                },
              ].map((col, i) => (
                <div key={i}>
                  <div className="mb-4 h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={col.image} 
                      alt={`${col.title} - Uganda Safari Company`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{col.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{col.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a 
                href="/about/why-travel-with-us"
                className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-block"
              >
                Find more reasons to trust us
              </a>
            </div>
          </div>
        </section>


        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Tour Packages
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Discover our curated selection of safari packages tailored to different interests and budgets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img 
                      src="../images/map.webp" 
                      alt={`${pkg.title} - Uganda Safari Company`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowAllPackages(!showAllPackages)} 
                className="flex items-center justify-center gap-2 mx-auto text-[#D4A017] hover:text-[#F58220] font-semibold text-lg transition-colors duration-300"
                aria-label={showAllPackages ? "Show fewer safari packages" : "Show more safari packages"}
              >
                {showAllPackages ? (
                  <>
                    Show less
                    <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Show more packages
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
            <div className="text-center mt-8">
              <a 
                href="/tours/safari-types"
                className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 transform hover:scale-105 inline-block"
                aria-label="Explore our complete safari collection"
              >
                EXPLORE OUR SAFARI COLLECTION
              </a>
            </div>
          </div>
        </section>

        {/* Modern Parallax Help Section - Styled like reference image */}
        <section className="relative min-h-[600px] bg-fixed bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://res.cloudinary.com/dzmg7sqo9/image/upload/v1762335115/bigapes_experiences_uganda_ev3m9w.jpg')" }}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 min-h-[600px] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left side - Empty for image visibility */}
              <div className="hidden lg:block"></div>
              
              {/* Right side - Content card matching the reference image */}
              <div className="bg-white/98 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 max-w-xl ml-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Get all the help you need!
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Experience the ultimate convenience in planning your safari with our comprehensive assistance. From expert advice to personalized recommendations, we ensure you have all the support you need to create an unforgettable adventure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/about/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#D4A017] hover:bg-[#F58220] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    <span>Enquire Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a 
                    href="tel:+256-XXX-XXXXXX"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#D4A017] font-semibold py-3 px-6 rounded-md border-2 border-[#D4A017] transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    <span>Give us a Call</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Special Interest Safaris
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Whether you're seeking memorable family vacations, intimate small-group safaris, transformative solo adventures, captivating Africa gorilla tours, or embarking on your first-time Africa expedition, our selection boasts tailor-made specialty journeys catering to every kind of traveler.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "GORILLA EXPEDITIONS",
                  description: "Guided gorilla trekking adventures into Uganda & Rwanda's rainforests to see Africa's mountain gorillas and spend surreal moments in the wild.",
                  image: "../images/gorilla-trekking-uganda-1.jpg",
                },
                {
                  title: "CHIMPANZEE TRACKING",
                  description: "Guided and eco-friendly forest walking adventures in Uganda's rainforests to observe wild chimpanzees up close in their natural tropical forests.",
                  image: "../images/kibale-chimps001341.jpg.webp",
                },
                {
                  title: "FIRST TIME SAFARIS",
                  description: "From classic Africa wildlife safaris to guided nature walks, we put together a comprehensive guide to help you plan your first-time safari in Africa.",
                  image: "../images/queen-elizabeth-np-uganda.jpg.webp",
                },
                {
                  title: "HONEYMOON SAFARIS",
                  description: "These romantic eco safaris in Africa take you to places where love originates and deeply connects you with the natural world.",
                  image: "../images/apoka-safari-lodge-1.jpg",
                },
              ].map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <img 
                      src={card.image} 
                      alt={`${card.title} - Uganda Safari Company`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-8 text-center">
          <a 
            href="/tours/safari-types"
            className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-3 px-6 rounded-lg text-base transition-colors duration-300 transform hover:scale-105 inline-block"
            aria-label="Find which type of safari suits you best"
          >
            Find out which type of safari suites you !
          </a>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Book your safari in 4 simple steps.
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Because you're not just anyone, you can explore your uniqueness by tailoring your Africa safari dream with an expert local safari consultant in four simple steps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "Step 1",
                  title: "Chat with Expert",
                  description: "Connect with our local safari consultant to discuss your dream safari",
                  image: "../images/chat_icon (1).png",
                },
                {
                  step: "Step 2",
                  title: "Tailor Your Journey",
                  description: "Customize every detail of your safari to match your preferences and style",
                  image: "/images/jigsaw.webp",
                },
                {
                  step: "Step 3",
                  title: "Plan & Prepare",
                  description: "Get expert guidance on preparations and what to expect on your adventure",
                  image: "/images/meditation.webp",
                },
                {
                  step: "Step 4",
                  title: "Experience Safari",
                  description: "Embark on your unforgettable African safari adventure",
                  image: "/images/user-experience.webp",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <img 
                      src={step.image} 
                      alt={`${step.title} - Zanzibar Holidays`} 
                      className="w-32 h-32 object-contain" 
                    />
                  </div>
                  <div className="text-sm font-semibold text-[#D4A017] mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a 
                href="/about/contact"
                className="bg-[#D4A017] hover:bg-[#F58220] text-[#2C241F] font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 inline-block"
                aria-label="Contact Zanzibar Holidays to start your safari"
              >
                Take your first trip
              </a>
            </div>
          </div>
        </section>

      
      </div>
    </>
  );
}
