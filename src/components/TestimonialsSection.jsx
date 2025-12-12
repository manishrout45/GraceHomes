import React from "react";
import { FaCommentAlt } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Paul Frank V.",
    location: "California",
    role: "Business Manager",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We wanted a cozy yet elegant space, and [Your Company] delivered perfectly. Their design choices enhanced our lifestyle beautifully. Every room now feels like home.",
  },
  {
    id: 2,
    name: "Kristen Silva K.",
    location: "Texas",
    role: "Owner",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "It feels like a dream to walk into our house these days. Every element was meticulously planned and perfectly executed. Hard to imagine living without our stress-free, chic Crew.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="w-full py-20 px-4 md:px-8 lg:px-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('/assets/images/Artitecture-bg-2.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left Text Section */}
          <div className="lg:w-1/3">
            <p className="text-sm text-gray-700 uppercase mb-3">Loves from our clients</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-5">
              User Experience <br /> We Style it!
            </h2>
            <p className="text-gray-700 mb-8">
              The interior design team transformed my home beyond expectations. Every detail
              reflects elegance, functionality, and a perfect balance of style and comfort.
            </p>
            <button className="flip-btn bg-[#8B5E3C] text-white px-6 py-3 rounded hover:bg-[#7a4f2f] transition">
              View All Testimonials
            </button>
          </div>

          {/* Right Testimonials Section */}
          <div className="lg:w-2/3 flex flex-col gap-10">
            {testimonials.map((t) => (
              <div key={t.id} className="flex gap-6 items-start">
                
                {/* Icon */}
                <div className="text-[#d3b8a3] mt-1">
                  <FaCommentAlt size={28} />
                </div>

                <div className="flex-1">
                  <p className="text-black/90 italic mb-3">"{t.text}"</p>

                  <div className="flex items-center gap-4 mt-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <p className="font-semibold text-black">{t.name}</p>
                      <p className="text-gray-700 text-sm">
                        {t.role}, {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
