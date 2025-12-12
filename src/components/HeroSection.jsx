import React, { useState } from "react";

const slides = [
  {
    id: 0,
    title: "Refined Dining Room Interior",
    subtitle: "Timeless Interior Excellence",
    desc: "Elegant dining designs that blend comfort, luxury, and a sophisticated ambiance.",
    image: "https://img.freepik.com/premium-photo/photo-interior-design-modern-classic-style-living-dining-area-with-white-marble-white_1149331-24956.jpg?w=740&q=80",
  },
  {
    id: 1,
    title: "Modern Bedroom Interior",
    subtitle: "Luxury & Comfort Combined",
    desc: "Beautiful bedroom interiors crafted for ultimate relaxation and style.",
    image: "https://img.freepik.com/free-photo/small-juvenile-bedroom-arrangement_23-2151113835.jpg?w=740&q=80",
  },
  {
    id: 2,
    title: "Refined Lounge Area Interior",
    subtitle: "Timeless Interior Excellence",
    desc: "Elegant lounge designs that combine comfort, timeless style, and ambiance.",
    image: "https://img.freepik.com/free-photo/elegant-living-room-with-brown-tones-modern-decor_23-2151965523.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(2);

  return (
    <section
      className="
        relative 
        w-full 
        h-[110vh]               
        md:h-[115vh]            
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

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-snug mb-6">
          {slides[active].title.split("Interior")[0]}
          <span className="text-[#c59a83]"> Interior</span>
        </h1>

        <p className="max-w-2xl text-sm md:text-base lg:text-lg opacity-90">
          {slides[active].desc}
        </p>
      </div>

      {/* ---------------------------- */}
      {/* Bottom Category Switcher     */}
      {/* ---------------------------- */}
        {/* Bottom Category Switcher */}
        <div className="absolute bottom-0 left-0 w-full bg-[#3a3a28]/70 backdrop-blur-md text-white z-30">

          {/* Wrapper (relative so arrows sit over buttons) */}
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
              {/* Dining */}
              <button
                onClick={() => setActive(0)}
                className={`
                  py-6 min-w-[250px] md:min-w-0 
                  border-r border-white/20 
                  transition 
                  ${active === 0 ? "bg-white/20" : "hover:bg-white/10"}
                `}
              >
                <i className="fas fa-utensils text-2xl mb-2"></i>
                <p className="text-lg">Dining Room Design</p>
              </button>

              {/* Bedroom */}
              <button
                onClick={() => setActive(1)}
                className={`
                  py-6 min-w-[250px] md:min-w-0 
                  border-r border-white/20 
                  transition 
                  ${active === 1 ? "bg-white/20" : "hover:bg-white/10"}
                `}
              >
                <i className="fas fa-bed text-2xl mb-2"></i>
                <p className="text-lg">Bedroom Design</p>
              </button>

              {/* Lounge */}
              <button
                onClick={() => setActive(2)}
                className={`
                  py-6 min-w-[250px] md:min-w-0 
                  transition 
                  ${active === 2 ? "bg-white/20" : "hover:bg-white/10"}
                `}
              >
                <i className="fas fa-couch text-2xl mb-2"></i>
                <p className="text-lg">Lounge Room Design</p>
              </button>
            </div>
          </div>
        </div>

    </section>
  );
}
