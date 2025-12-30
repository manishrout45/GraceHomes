import React from "react";
import BlogSection from "../components/BlogSection";

export default function Articles() {
  return (
    <>
        {/* HERO SECTION */}
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
            Articles
          </h1>

          <div className="mt-3 text-sm text-gray-200">
            <span className="hover:text-orange-500 transition cursor-pointer">
              Home
            </span>
            <span className="mx-2">—</span>
            <span className="text-orange-400">Articles</span>
          </div>
        </div>
      </section>
      <BlogSection />
      {/* Featured Images Section */}
<section className="w-full py-16 bg-[#f9f8f6]">
  <div className="max-w-7xl mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <p className="text-sm text-gray-400 uppercase mb-2">Gallery</p>
      <h2 className="text-3xl md:text-4xl font-semibold">
        Real Estate Highlights
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Explore stunning visuals from our latest projects and properties.
      </p>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="overflow-hidden rounded-lg">
        <img
          src="/assets/images/GH-1.jpeg"
          alt="Property 1"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="overflow-hidden rounded-lg">
        <img
          src="/assets/images/GH-2.jpeg"
          alt="Property 2"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="overflow-hidden rounded-lg">
        <img
          src="/assets/images/GH-3.jpeg"
          alt="Property 3"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Add more images as needed */}
    </div>
  </div>
</section>

    </>
  );
}
