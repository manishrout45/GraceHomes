import React from "react";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Testimonials() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[260px] md:h-[320px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178345.jpg?w=740&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-serif tracking-wide">
            Testimonials
          </h1>

          <div className="mt-3 text-sm text-gray-200">
            <span className="hover:text-orange-400 cursor-pointer">Home</span>
            <span className="mx-2">—</span>
            <span className="text-orange-400">Testimonials</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* NEW TRUST SECTION */}
      <section className="bg-[#f8f6f3] py-24">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-3">
              Our Commitment
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-5">
              Why Clients Trust <span className="text-[#8B5E3C]">Grace Homes</span>
            </h2>
            <p className="text-gray-600">
              We don’t just build homes — we build long-lasting relationships
              through trust, quality, and transparency.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-serif mb-3">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Superior construction standards using high-grade materials for
                long-lasting homes.
              </p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-serif mb-3">Transparent Process</h3>
              <p className="text-gray-600 text-sm">
                Clear documentation, honest pricing, and zero hidden charges.
              </p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-serif mb-3">Prime Locations</h3>
              <p className="text-gray-600 text-sm">
                Projects located in fast-growing, well-connected neighborhoods.
              </p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-serif mb-3">On-Time Delivery</h3>
              <p className="text-gray-600 text-sm">
                We respect your time and deliver projects as promised.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
