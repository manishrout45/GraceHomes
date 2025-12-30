import React from "react";
import { FaCommentAlt } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rajiv Mehta",
    location: "Bhubaneswar",
    role: "Homeowner",
    avatar:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg",
    text:
      "Choosing Grace Homes was the best decision we made. From planning to possession, the entire process was transparent and professional. The quality of construction truly stands out.",
  },
  {
    id: 2,
    name: "Anita Sharma",
    location: "Cuttack",
    role: "Property Investor",
    avatar:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg",
    text:
      "Their projects are well-planned, future-ready, and located in prime areas. I invested with complete confidence and the returns have exceeded expectations.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative w-full py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/Artitecture-bg-2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs tracking-widest text-gray-600 mb-3 uppercase">
              Trusted By Clients
            </p>

            <h2 className="text-4xl font-serif mb-6 leading-tight">
              Experiences That <br /> Build Trust
            </h2>

            <p className="text-gray-700 mb-8">
              Our clients value our commitment to quality, transparency, and
              timely delivery. Every project is built with long-term value in
              mind.
            </p>

            <button className="bg-[#8B5E3C] text-white px-7 py-3 text-sm tracking-wide hover:bg-black transition">
              View All Reviews
            </button>
          </div>

          {/* RIGHT TESTIMONIALS */}
          <div className="lg:col-span-2 space-y-10">
            {testimonials.map((t) => (
              <div key={t.id} className="flex gap-6">
                <div className="text-[#8B5E3C] mt-1">
                  <FaCommentAlt size={26} />
                </div>

                <div>
                  <p className="italic text-gray-800 mb-4 leading-relaxed">
                    “{t.text}”
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border"
                    />
                    <div>
                      <p className="font-semibold text-black">
                        {t.name}
                      </p>
                      <p className="text-sm text-gray-600">
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
