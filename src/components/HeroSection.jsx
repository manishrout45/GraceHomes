import React, { useState } from "react";

const slides = [
  {
    id: 0,
    title: "Premium Residential Projects",
    subtitle: "Building Homes, Creating Lifestyles",
    desc: "Thoughtfully designed residential projects crafted with superior construction quality, modern architecture, and timely delivery.",
    image:
      "https://img.freepik.com/premium-photo/classic-modern-batak-house-ambarita-resort-hotel-indonesian-people-foreign-travelers-travel-visit-rent-rest-relax-tomok-samosir-sumatera-utara-north-sumatra-indonesia_258052-2938.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 1,
    title: "High-Rise Apartment Developments",
    subtitle: "Trusted Real Estate Builder",
    desc: "Iconic high-rise apartments built with precision, safety, and comfort to redefine urban living experiences.",
    image:
      "https://img.freepik.com/free-photo/close-up-futuristic-city-landscape-skyscrapers_231208-7587.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    title: "Top Commercial Project Development",
    subtitle: "Building for Growth",
    desc: "Strategically developed commercial and mixed-use spaces designed to support businesses and long-term investment value.",
    image:
      "https://img.freepik.com/premium-photo/modern-commercial-building-with-large-glass-windows-stone-veneer_925376-257995.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0); // default to Residential Projects

  return (
    <section
      className="
        relative 
        w-full 
        h-[126vh]              
        md:h-[126vh]            
        lg:h-[130vh]            
        xl:h-[120vh]            
        2xl:h-[150vh]           
        overflow-hidden 
        -mt-36 
        top-0
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${slides[active].image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3b3a2f]/90"></div>

      {/* Hero Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 text-white mt-8">
        <p className="uppercase tracking-widest text-sm md:text-base mb-4">
          {slides[active].subtitle}
        </p>

        <h1 className="fade-right text-4xl md:text-5xl lg:text-7xl font-semibold leading-snug mb-6">
          {slides[active].title.split("Development")[0]}
          <span className="text-[#c59a83]"> Development</span>
        </h1>

        <p className="max-w-2xl text-sm md:text-base lg:text-lg opacity-90">
          {slides[active].desc}
        </p>
      </div>

      {/* Bottom Category Switcher */}
      <div className="absolute bottom-0 left-0 w-full bg-[#3a3a28]/70 backdrop-blur-md text-white z-30">
        <div className="relative max-w-7xl mx-auto">
          {/* LEFT ARROW (Mobile) */}
          <button
            onClick={() =>
              document.getElementById("catScroll").scrollBy({
                left: -200,
                behavior: "smooth",
              })
            }
            className="
              md:hidden 
              absolute left-0 top-1/2 -translate-y-1/2 
              z-40 
              bg-black/40 backdrop-blur-sm 
              px-3 py-2 rounded-full 
              text-white text-2xl 
            "
          >
            ‹
          </button>

          {/* RIGHT ARROW (Mobile) */}
          <button
            onClick={() =>
              document.getElementById("catScroll").scrollBy({
                left: 200,
                behavior: "smooth",
              })
            }
            className="
              md:hidden 
              absolute right-0 top-1/2 -translate-y-1/2 
              z-40 
              bg-black/40 backdrop-blur-sm 
              px-3 py-2 rounded-full 
              text-white text-2xl 
            "
          >
            ›
          </button>

          {/* Scrollable Button Row */}
          <div
            id="catScroll"
            className="
              md:grid md:grid-cols-3 
              flex overflow-x-auto 
              whitespace-nowrap 
              scrollbar-hide
              text-center
            "
          >
            {/* Residential Projects */}
            <button
              onClick={() => setActive(0)}
              className={`
                py-6 min-w-[250px] md:min-w-0 
                border-r border-white/20 
                transition 
                ${active === 0 ? "bg-white/20" : "hover:bg-white/10"}
              `}
            >
              <i className="fas fa-home text-2xl mb-2"></i>
              <p className="text-lg font-medium">Residential Projects</p>
              <span className="block text-sm opacity-80">
                Villas & Apartments
              </span>
            </button>

            {/* High-Rise Apartments */}
            <button
              onClick={() => setActive(1)}
              className={`
                py-6 min-w-[250px] md:min-w-0 
                border-r border-white/20 
                transition 
                ${active === 1 ? "bg-white/20" : "hover:bg-white/10"}
              `}
            >
              <i className="fas fa-building text-2xl mb-2"></i>
              <p className="text-lg font-medium">High-Rise Apartments</p>
              <span className="block text-sm opacity-80">
                Modern Urban Living
              </span>
            </button>

            {/* Commercial Projects */}
            <button
              onClick={() => setActive(2)}
              className={`
                py-6 min-w-[250px] md:min-w-0 
                transition 
                ${active === 2 ? "bg-white/20" : "hover:bg-white/10"}
              `}
            >
              <i className="fas fa-city text-2xl mb-2"></i>
              <p className="text-lg font-medium">Commercial Projects</p>
              <span className="block text-sm opacity-80">
                Office & Retail Spaces
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
