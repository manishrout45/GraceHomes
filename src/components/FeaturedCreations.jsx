import React from "react";

const galleryData = [
  {
    title: "Grand Entrance",
    price: "$5000",
    img: "https://img.freepik.com/premium-photo/modern-south-indian-house-exterior-view_1177187-245951.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Tailored Layout",
    price: "$3000",
    img: "https://img.freepik.com/free-photo/life-style_1122-1800.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Cozy Lounge Spot",
    price: "$9000",
    img: "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118988.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Serene Washroom",
    price: "$6500",
    img: "https://img.freepik.com/free-photo/elegant-minimal-interior-design_23-2151913247.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Zen Bath Edition",
    price: "$5000",
    img: "https://img.freepik.com/premium-photo/modern-bathroom-immersed-forest_863013-84908.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Serene Washroom",
    price: "$6500",
    img: "https://img.freepik.com/premium-photo/clean-modern-bathroom-setup-with-potted-plants-towels_148840-160818.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];

export default function FeaturedCreations() {
  return (
    <section className="py-16  bg-white">
<div className="max-w-7xl px-4 mx-auto">
      {/* SECTION TITLE */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[3px] text-gray-500 mb-2">PROJECT GALLERY</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2d2d2d]">
          Explore Our Featured Creations
        </h2>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* FIRST FOUR CARDS */}
        {galleryData.slice(0, 4).map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-[#faf7f2] shadow-sm">
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />

              <div className="absolute top-3 right-3 bg-white text-gray-700 px-2 py-[2px] text-xs rounded shadow">
                1/5
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">Starting Price {item.price}</p>

              <button className="mt-4 text-xs tracking-wide underline text-gray-700 hover:text-black">
                GET QUOTE NOW
              </button>
            </div>
          </div>
        ))}

        {/* 1ST CARD */}
        {galleryData.slice(5, 6).map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-[#faf7f2] shadow-sm">
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />

              <div className="absolute top-3 right-3 bg-white text-gray-700 px-2 py-[2px] text-xs rounded shadow">
                1/5
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">Starting Price {item.price}</p>

              <button className="mt-4 text-xs tracking-wide underline text-gray-700 hover:text-black">
                GET QUOTE NOW
              </button>
            </div>
          </div>
        ))}

        {/* CENTER BIG CTA CARD */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative rounded-lg overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2256.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
            className="w-full h-[300px] md:h-[350px] object-cover brightness-[0.4]"
            alt=""
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
              Business Talk With Us!
            </h2>

            <button className="flip-btn bg-white text-gray-700 px-6 py-2 text-sm rounded shadow hover:bg-gray-100">
              CONTACT US
            </button>
          </div>
        </div>

        {/* LAST CARD */}
        {galleryData.slice(5, 6).map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-[#faf7f2] shadow-sm">
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />

              <div className="absolute top-3 right-3 bg-white text-gray-700 px-2 py-[2px] text-xs rounded shadow">
                1/5
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">Starting Price {item.price}</p>

              <button className="mt-4 text-xs tracking-wide underline text-gray-700 hover:text-black">
                GET QUOTE NOW
              </button>
            </div>
          </div>
        ))}

      </div>
      </div>
    </section>
  );
}
