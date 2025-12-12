import React from "react";

export default function AboutSection() {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-28 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('/assets/images/Artitecture-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* TOP TITLES */}
        <div className="text-center mb-12">
          <p className="text-[13px] tracking-[3px] uppercase text-[#e7dacd] font-medium mb-3">
            Effortless Comfort
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight">
            Relaxation Meets{" "}
            <span className="text-[#c39577] font-normal">Design</span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative w-full">
            <img
              src="https://img.freepik.com/premium-photo/living-room-with-couch-some-pillows-it_862994-415205.jpg"
              alt="Interior"
              className="w-full object-cover"
              style={{ borderRadius: 0 }}
            />

            {/* Awards Badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-md text-center shadow-md">
              <p className="text-4xl md:text-5xl font-semibold text-gray-800 leading-none">
                60+
              </p>
              <p className="text-lg font-medium text-gray-600 -mt-1">
                Awards
              </p>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4">
              Sofa Crafted For A Modern Living
            </h3>

            <p className="text-gray-700 leading-relaxed mb-8 max-w-xl">
              Experience the perfect blend of comfort and style with our
              soft-crafted furniture, designed to elevate modern living spaces.
              Every piece combines meticulous craftsmanship, premium materials,
              and contemporary design.
            </p>

            {/* ICON LIST */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-800">
                <i className="far fa-building text-xl"></i>
                <p className="text-[16px]">Warm & Inviting Ambiance</p>
              </div>

              <div className="flex items-center gap-3 text-gray-800">
                <i className="fas fa-couch text-xl"></i>
                <p className="text-[16px]">Customize Furnishing Choices</p>
              </div>

              <div className="flex items-center gap-3 text-gray-800">
                <i className="fas fa-home text-xl"></i>
                <p className="text-[16px]">Comfort-Driven Layout</p>
              </div>
            </div>

            {/* Button */}
            <button
              className="flip-btn bg-[#3b3a2f] hover:bg-[#4a493c] text-white px-8 py-4 tracking-wide transition-all duration-300"
              style={{ borderRadius: 0 }}
            >
              PERSONALIZED YOUR DESIGN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
