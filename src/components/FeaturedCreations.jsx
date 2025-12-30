import React from "react";
import { Link } from "react-router-dom";

const galleryData = [
  {
    title: "Premium Residential Project",
    stage: "Foundation & Column Work",
    img: "/assets/images/GH-1.jpeg",
  },
  {
    title: "Premium Residential Project",
    stage: "Under Construction",
    img: "/assets/images/GH-2.jpeg",
  },
  {
    title: "Premium Residential Project",
    stage: "RCC Structure in Progress",
    img: "/assets/images/GH-3.jpeg",
  },
  {
    title: "Premium Residential Project",
    stage: "Site Development Phase",
    img: "/assets/images/GH-4.jpeg",
  },
  {
    title: "Luxury Bathroom Concept",
    price: "₹75 Lakhs Onwards",
    img: "https://img.freepik.com/free-vector/realistic-bathroom-interior-design_1284-19016.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "High-Rise Apartment Unit",
    price: "₹90 Lakhs Onwards",
    img: "https://newprojects.99acres.com/projects/sk_developers_bhubaneswar/sk_grace_urban_ville/images/k09ivl6_1740478936_572585679_optOrig.jpg",
  },
];

export default function FeaturedCreations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl px-4 mx-auto">
        {/* SECTION TITLE */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[3px] text-gray-500 mb-2">
            PROJECT SHOWCASE
          </p>
          <h2 className="fade-right text-3xl md:text-4xl font-semibold text-[#2d2d2d]">
            Explore Our Landmark Projects
          </h2>
        </div>

        {/* GRID LAYOUT */}
        <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* FIRST FOUR CARDS */}
          {galleryData.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-[#faf7f2] shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white text-gray-700 px-2 py-[2px] text-xs rounded shadow">
                  Ongoing
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                   {item.stage}
                </p>

                <button className="mt-4 text-xs tracking-wide underline text-gray-700 hover:text-black">
                  VIEW PROJECT DETAILS
                </button>
              </div>
            </div>
          ))}

          {/* 5TH CARD */}
          {galleryData.slice(5, 6).map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-[#faf7f2] shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white text-gray-700 px-2 py-[2px] text-xs rounded shadow">
                  Ready Soon
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Starting Price {item.price}
                </p>

                <button className="mt-4 text-xs tracking-wide underline text-gray-700 hover:text-black">
                  VIEW PROJECT DETAILS
                </button>
              </div>
            </div>
          ))}

          {/* CENTER BIG CTA CARD */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative rounded-lg overflow-hidden group">
            <img
              src="https://newprojects.99acres.com/projects/sk_developers_bhubaneswar/sk_grace_urban_ville/images/z0qeysg_1740478935_572585663_optOrig.jpg"
              className="w-full h-[300px] md:h-[350px] object-cover brightness-[0.4] transition-transform duration-500 group-hover:scale-105"
              alt="Contact Builder"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
                Let’s Build Your Dream Property
              </h2>
              <Link to="/contact">
              <button className="flip-btn bg-white text-gray-700 px-6 py-2 text-sm rounded shadow hover:bg-gray-100">
                CONTACT OUR SALES TEAM
              </button></Link>
            </div>
          </div>

          {/* LAST CARD */}
          {galleryData.slice(5, 6).map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-[#faf7f2] shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white text-gray-700 px-2 py-[2px] text-xs rounded shadow">
                  Booking Open
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Starting Price {item.price}
                </p>

                <button className="mt-4 text-xs tracking-wide underline text-gray-700 hover:text-black">
                  VIEW PROJECT DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
