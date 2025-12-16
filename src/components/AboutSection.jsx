import React from "react";

export default function AboutSection() {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-28 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/images/Artitecture-bg.jpg')",
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* TOP TITLES */}
        <div className="text-center mb-12">
          <p className="text-[13px] tracking-[3px] uppercase text-[#e7dacd] font-medium mb-3">
            Building Trust Since Years
          </p>

          <h2 className="fade-right text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight">
            Shaping Spaces,{" "}
            <span className="text-[#c39577] font-normal">
              Building Futures
            </span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE WITH HOVER EFFECT */}
          <div className="relative w-full overflow-hidden group">
            <img
              src="https://img.freepik.com/premium-photo/indian-architect-designs-modern-cityscape-using-scale-models_161094-27068.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
              alt="Real Estate Project"
              className="
                w-full object-cover
                transform transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Hover Overlay */}
            <div
              className="
                absolute inset-0 bg-black/10
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-100
              "
            ></div>

            {/* Experience Badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-md text-center shadow-md">
              <p className="text-4xl md:text-5xl font-semibold text-gray-800 leading-none">
                25+
              </p>
              <p className="text-lg font-medium text-gray-600 -mt-1">
                Years Experience
              </p>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h3 className="fade-up text-xl md:text-2xl lg:text-3xl font-semibold text-black mb-4">
              Trusted Real Estate Builder & Developer
            </h3>

            <p className="fade-up text-gray-700 leading-relaxed mb-8 max-w-xl">
              We are a leading real estate builder committed to delivering
              premium residential and commercial projects. Our developments
              focus on quality construction, thoughtful planning, and timely
              delivery to create lasting value for homeowners and investors.
            </p>

            {/* ICON LIST */}
            <div className="fade-up space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-800">
                <i className="far fa-building text-xl"></i>
                <p className="text-[16px]">
                  Landmark Residential & Commercial Projects
                </p>
              </div>

              <div className="flex items-center gap-3 text-gray-800">
                <i className="fas fa-check-circle text-xl"></i>
                <p className="text-[16px]">
                  RERA Approved & Quality Assured
                </p>
              </div>

              <div className="flex items-center gap-3 text-gray-800">
                <i className="fas fa-handshake text-xl"></i>
                <p className="text-[16px]">
                  Transparent Process & Timely Delivery
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              className="flip-btn bg-[#3b3a2f] text-white px-8 py-4 tracking-wide transition-all duration-300"
              style={{ borderRadius: 0 }}
            >
              EXPLORE OUR PROJECTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
