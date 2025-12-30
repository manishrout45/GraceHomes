import React, { useEffect } from "react";
import {
  FaCouch,
  FaDraftingCompass,
  FaRegObjectGroup,
  FaLayerGroup,
  FaPalette,
  FaChair,
} from "react-icons/fa";

const iconSet = [
  FaCouch,
  FaDraftingCompass,
  FaRegObjectGroup,
  FaLayerGroup,
  FaPalette,
  FaChair,
];

const services = [
  {
    title: "Residential Project Development in Khandagiri",
    description:
      "Building residential living spaces that ensure safety, comfort, and functionality, built with precision, delivered with care. Our residential apartments feature:",
    features: [
      "Proper Planning",
      "Quality Construction Materials",
      "Space management",
      "Floor planning",
      "Vastu Optimized",
      "Premium Finishing",
    ],
    image:
      "https://newprojects.99acres.com/projects/sk_developers_bhubaneswar/sk_grace_urban_ville/images/pkedx0r_1740478935_572585669_optOrig.jpg",
  },
  {
    title: "Commercial and Mixed-Use Project Development in Khandagiri",
    description:
      "Our design team understands the efficacy and usage of commercial and mixed-use buildings, and plans the layout with:",
    features: [
      "Site Analysis",
      "Structural Planning",
      "High Footfall Planning",
      "Floor Plating",
      "Smart Functionality",
      "Future-Ready infrastructure",
    ],
    image:
      "https://img.freepik.com/free-photo/cafe-living-room-loft-style_1150-10725.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Luxury and Landmark Developments in Khandagiri",
    description:
      "Our architects plan to ensure luxury living, fulfill client satisfaction, create iconic landmarks, and provide aspirational living spaces. Here’s a glimpse of how our luxury apartments feature:",
    features: [
      "Modern Architectural Design",
      "High-end Building Materials",
      "Great Amenities",
      "Refined Detailing",
      "Compliance with Building Standards",
      "Long-Term Asset Value",
    ],
    image:
      "https://newprojects.99acres.com/projects/sk_developers_bhubaneswar/sk_grace_urban_ville/images/z0qeysg_1740478935_572585663_optOrig.jpg",
  },
];

export default function ServiceSection() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-up, .fade-left, .fade-right");

    const handleFade = () => {
      fadeElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          setTimeout(() => el.classList.add("in-view"), index * 150);
        }
      });
    };

    // Trigger animations on page load for elements already in view
    handleFade();

    // Trigger animations on scroll
    window.addEventListener("scroll", handleFade);
    return () => window.removeEventListener("scroll", handleFade);
  }, []);

  return (
    <section className="w-full py-16 bg-[#2a2a1f] text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-20">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm tracking-widest uppercase text-[#a38d7b] mb-2">
            What We Build
          </p>
          <h2 className="fade-right text-3xl md:text-4xl lg:text-5xl font-semibold">
            Building the Future of <span className="text-[#a38d7b]">Modern Living in Bhubaneswar</span>
          </h2>
        </div>

        {/* Services */}
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className="fade-left lg:w-1/2 w-full">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, i) => {
                  const Icon = iconSet[i % iconSet.length];
                  return (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <Icon className="text-[#a38d7b] text-lg" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  );
                })}
              </div>

              <button className="flip-btn bg-[#3b3a2f] hover:bg-[#4a493c] text-white px-6 py-3 rounded-none tracking-wide transition-all duration-300">
                View Projects
              </button>
            </div>

            {/* Image */}
            <div className="fade-left lg:w-1/2 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
