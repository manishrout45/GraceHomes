import React from "react";
import { FaCommentAlt } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rajiv Mehta",
    location: "Bhubaneswar",
    role: "Homeowner",
    avatar: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    text: "Choosing Grace Homes was the best decision we made. From planning to possession, the entire process was transparent and professional. The quality of construction truly stands out.",
  },
  {
    id: 2,
    name: "Anita Sharma",
    location: "Cuttack",
    role: "Property Investor",
    avatar: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
    text: "Their projects are well-planned, future-ready, and located in prime areas. I invested with complete confidence and the returns have exceeded expectations.",
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
          <div className="fade-right lg:w-1/3">
            <p className="text-sm text-gray-700 uppercase mb-3">
              Trusted by Homebuyers & Investors
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-5">
              Experiences That <br /> Build Trust
            </h2>
            <p className="text-gray-700 mb-8">
              Our clients value our commitment to quality, transparency, and timely delivery.
              Every project is built with precision, care, and a focus on long-term value.
            </p>
            <button className="flip-btn bg-[#8B5E3C] text-white px-6 py-3 rounded hover:bg-[#7a4f2f] transition">
              View All Reviews
            </button>
          </div>

          {/* Right Testimonials Section */}
          <div className="fade-up lg:w-2/3 flex flex-col gap-10">
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
