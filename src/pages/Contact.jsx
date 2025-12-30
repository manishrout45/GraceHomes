import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [open, setOpen] = useState(2);

  const faqs1 = [
    {
      id: 1,
      q: "What Types Of Properties Do You Offer?",
      a: "Grace Homes Real Estate offers residential, commercial, and luxury properties to match your lifestyle and investment goals.",
    },
    {
      id: 2,
      q: "Can I Customize My Home Design?",
      a: "Yes, we provide flexible customization options for select residential projects, ensuring your home reflects your personal taste.",
    },
    {
      id: 3,
      q: "Do You Assist With Legal & Documentation Processes?",
      a: "Absolutely! Our team ensures smooth handling of legal paperwork, property registration, and compliance requirements.",
    },
    {
      id: 4,
      q: "Can I Schedule A Property Visit?",
      a: "Yes, we offer guided property tours and site visits at your convenience.",
    },
  ];

  const faqs2 = [
    {
      id: 5,
      q: "What Are The Payment Plans Available?",
      a: "Grace Homes provides flexible payment plans, including installment options.",
    },
    {
      id: 6,
      q: "Do You Offer After-Sales Support?",
      a: "Yes, our dedicated after-sales team assists with handover and maintenance queries.",
    },
    {
      id: 7,
      q: "How Can I Track My Booking Or Investment?",
      a: "We provide regular project updates and transparent communication.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-[220px] sm:h-[260px] md:h-[320px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178345.jpg?w=740&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-wide">
            Contact Grace Homes
          </h1>

          <div className="mt-3 text-sm text-gray-200">
            <span className="hover:text-orange-500 cursor-pointer">Home</span>
            <span className="mx-2">—</span>
            <span className="text-orange-400">Contact</span>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
<section className="bg-white py-16 sm:py-20">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

    {/* LEFT */}
    <div>
      <p className="text-xs tracking-widest text-gray-500 mb-3">
        GET IN TOUCH
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-10">
        Plan Your <br />
        Dream Home <br />
        With Grace Homes
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            className="w-full border-b pb-3 focus:outline-none"
            placeholder="Full Name*"
          />
          <input
            className="w-full border-b pb-3 focus:outline-none"
            placeholder="Email ID*"
          />
          <input
            className="w-full border-b pb-3 focus:outline-none"
            placeholder="Phone No*"
          />
          <input
            className="w-full border-b pb-3 focus:outline-none"
            placeholder="City*"
          />
        </div>

        <textarea
          rows="3"
          className="w-full border-b pb-3 focus:outline-none resize-none"
          placeholder="Your Message*"
        ></textarea>

        <button className="mt-6 bg-[#8b6f4e] text-white px-8 py-3 text-sm tracking-wide hover:bg-black transition">
          SUBMIT
        </button>
      </form>
    </div>

    {/* RIGHT – BACKGROUND IMAGE WITH OVERLAY */}
    <div
      className="relative rounded-md overflow-hidden p-6 sm:p-10 flex items-center min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/realistic-classic-room-interior-with-dark-blue-panels-glowing-wall-lamps-vector-illustration_1284-83642.jpg?w=740&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3b3f1e]/90"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h3 className="text-2xl font-serif mb-6">Reach Us</h3>

        <div className="flex items-center gap-3 text-gray-200 text-sm">
          <FaPhoneAlt className="text-[#8b6f4e]" />
          <span>Phone</span>
        </div>
        <p className="text-lg mb-5">+91 8280 667 778</p>

        <div className="flex items-center gap-3 text-gray-200 text-sm">
          <FaEnvelope className="text-[#8b6f4e]" />
          <span>Email</span>
        </div>
        <p className="text-lg">contact@gracehomes.com</p>
      </div>
    </div>

  </div>
</section>


      {/* MAP */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <p className="text-xs tracking-widest text-gray-500 mb-3">
            OUR LOCATION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">
            Visit Grace Homes Studio
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full h-[300px] sm:h-[380px] md:h-[420px] rounded-xl overflow-hidden shadow border">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Bhubaneswar,Odisha&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-xs tracking-widest text-gray-500 mb-3">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-8">
              About Grace Homes <br />
              <span className="text-[#8b6f4e]">& Policies</span>
            </h2>

            <img
              src="https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695795.jpg?w=740&q=80"
              alt="Interior"
              className="mt-10 max-w-full sm:max-w-md"
            />
          </div>

          <div className="space-y-6">
            {[...faqs1, ...faqs2].map((item) => (
              <div key={item.id} className="border">
                <button
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  className={`w-full flex justify-between items-center p-4 sm:p-5 ${
                    open === item.id
                      ? "bg-[#3b3f1e] text-white"
                      : "bg-white"
                  }`}
                >
                  <span>{item.q}</span>
                  <span className={`${open === item.id ? "rotate-90" : ""}`}>
                    →
                  </span>
                </button>

                <div
                  className={`transition-all duration-700 overflow-hidden ${
                    open === item.id ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-5 bg-[#3b3f1e] text-gray-200 text-sm">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
