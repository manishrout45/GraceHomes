import React from "react";

const steps = [
  {
    id: 1,
    title: "Design Session",
    desc: "It ensures your vision is turned into a practical, stylish design",
    img: "https://img.freepik.com/free-photo/design-floor-plan-software-concept_53876-122984.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    title: "Talent Review",
    desc: "Talent Review aligns skills with the right roles and goals",
    img: "https://img.freepik.com/free-photo/front-view-smiley-man-holding-paper_23-2150171318.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    title: "Creative Meeting",
    desc: "Focused on sparking creativity and turning ideas into results",
    img: "https://img.freepik.com/free-photo/young-coworkers-discussing-work-subject_23-2147668781.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    title: "Interior Render",
    desc: "Interior Renders show spaces before execution, design precision",
    img: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa-lamp-wood-decor-loft-style_105762-2259.jpg?ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
  },
];

const ApproachSection = () => {
  return (
    <section className="py-16 bg-[#303123] text-white px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase text-gray-400 tracking-widest mb-2">
          Define Process
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Approach To{" "}
          <span className="text-[#c8a97e]">Connect With Expert</span>
        </h2>
      </div>

      {/* Step Cards */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 relative">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`bg-white text-gray-900 p-6 shadow-lg w-full md:w-60 flex flex-col items-start ${
              index % 2 !== 0 ? "md:mt-8" : ""
            }`}
          >
            <div className="text-2xl font-bold mb-2">{`0${step.id}`}</div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm mb-4">{step.desc}</p>
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-32 object-cover rounded"
            />
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

      {/* Appointment Button */}
      <div className="mt-12 text-center">
        <button className="flip-btn bg-[#c8a97e] text-gray-900 font-semibold px-6 py-3 hover:bg-[#b4946d] transition">
          Make an Appointment
        </button>
      </div>
    </section>
  );
};

export default ApproachSection;
