import React from "react";

const steps = [
  {
    id: 1,
    title: "Requirement Discussion",
    desc: "We understand your property requirements, budget, preferred location, and long-term investment goals.",
    img: "https://img.freepik.com/premium-photo/realistic-photograph-blonde-australian-couple-sitting-together-generative-ai_804788-234651.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    title: "Project Planning & Approvals",
    desc: "Our experts handle planning, design layouts, approvals, and timelines to ensure smooth execution.",
    img: "https://img.freepik.com/free-photo/team-architects-working-town-project-conference-room-architect-business-suit_482257-26513.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    title: "Construction Execution",
    desc: "We follow strict quality standards, safety norms, and transparent processes during construction.",
    img: "https://img.freepik.com/free-photo/low-angle-people-looking-building-scaffolding_23-2148269328.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    title: "Project Delivery & Handover",
    desc: "Timely project completion with RERA compliance, documentation, and customer satisfaction.",
    img: "https://img.freepik.com/free-photo/male-real-estate-agent-doing-business-showing-house-potential-buying-couple_23-2150164721.jpg?t=st=1765780186~exp=1765783786~hmac=1d43b2a11fc3ce6635bd2d8efea5806c6d31d75181b04070964775c9df6f53ba",
  },
];

const ApproachSection = () => {
  return (
    <section className="py-16 bg-[#303123] text-white px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase text-gray-400 tracking-widest mb-2">
          Our Work Process
        </p>
        <h2 className="fade-right text-3xl sm:text-4xl font-bold">
          Our Approach To{" "}
          <span className="text-[#c8a97e]">Building Excellence</span>
        </h2>
      </div>

      {/* Step Cards */}
      <div className="fade-up flex flex-col md:flex-row justify-center items-start gap-8 relative">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`relative bg-white text-gray-900 p-6 shadow-lg w-full md:w-60 flex flex-col items-start overflow-hidden group ${
              index % 2 !== 0 ? "md:mt-8" : ""
            }`}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#c8a97e]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

            {/* Card Content */}
            <div className="relative z-20 flex flex-col w-full">
              <div className="text-2xl font-bold mb-2">{`0${step.id}`}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm mb-4">{step.desc}</p>
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-32 object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white text-lg">
          &#8592;
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white text-lg">
          &#8594;
        </button>
      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <button className="flip-btn bg-[#c8a97e] text-gray-900 font-semibold px-6 py-3 hover:bg-[#b4946d] transition">
          Book a Site Visit
        </button>
      </div>
    </section>
  );
};

export default ApproachSection;
