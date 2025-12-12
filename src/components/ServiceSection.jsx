import React from "react";
import { FaCouch, FaDraftingCompass, FaRegObjectGroup, FaLayerGroup, FaPalette, FaChair } from "react-icons/fa";

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
    title: "Personalized Living Interior",
    description:
      "Modern minimalist interior design featuring elegant organic shapes harmonizing comfort with style in neutral tones.",
    features: [
      "Space Blueprint",
      "Fabric & Tile Options",
      "Circulation Mapping",
      "Wall Finishes",
      "User-Centric Layout",
      "Furniture Positioning",
    ],
    image:
      "https://img.freepik.com/free-photo/living-room-mid-century-style-with-warm-colors-ai-generative_123827-23930.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Professional Interior Solution",
    description:
      "Expert interior solutions combining style, function, and innovation to create truly elegant, practical, and welcoming spaces.",
    features: [
      "Floor Layout Plan",
      "Material & Texture Samples",
      "Smooth Flow Paths",
      "Color & Wallpaper Selection",
      "Functional Zoning",
      "Furniture Scaling",
    ],
    image:
      "https://img.freepik.com/premium-photo/hand-drawn-kitchen-interior_670147-41754.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Luxury & High-End Design",
    description:
      "Opulent interiors with bespoke finishes and refined design, offering sophistication and timeless elegance.",
    features: [
      "Room Planning",
      "Surface Finishing Options",
      "Space Navigation",
      "Paint & Texture Samples",
      "Daily Use Focus",
      "Stylish Layout Setup",
    ],
    image:
      "https://img.freepik.com/premium-photo/serene-minimalist-asian-livingroom-clean-lines_882186-40745.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];

export default function ServiceSection() {
  return (
    <section className="w-full py-16 bg-[#2a2a1f] text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-20">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm tracking-widest uppercase text-[#a38d7b] mb-2">
            Curated For You
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Browse <span className="text-[#a38d7b]">Elegant Creations</span> For Every Room
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
            <div className="lg:w-1/2 w-full">
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
                Learn More
              </button>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
