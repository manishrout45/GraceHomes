import React, { useState } from "react";
import ServiceSection from "../components/ServiceSection";

export default function Services() {


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
            Services
          </h1>

          <div className="mt-3 text-sm text-gray-200">
            <span className="hover:text-orange-500 transition cursor-pointer">
              Home
            </span>
            <span className="mx-2">—</span>
            <span className="text-orange-400">Our Services</span>
          </div>
        </div>
      </section>
      <ServiceSection />
    </>
  );
}
