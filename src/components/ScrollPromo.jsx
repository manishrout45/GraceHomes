import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ScrollPromo = () => {
  useEffect(() => {
    const section = document.getElementById("scrollSection");
    const textBox = document.getElementById("scrollText");

    const handleScroll = () => {
      if (!section || !textBox) return;

      let rect = section.getBoundingClientRect();
      let sectionHeight = rect.height;

      // Activate only when section is in viewport
      if (rect.top <= 0 && Math.abs(rect.top) <= sectionHeight) {
        let progress = Math.abs(rect.top) / sectionHeight;

        // Move text upward based on scroll
        textBox.style.transform = `translateY(-${progress * 50}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="scrollSection" className="relative h-[80vh] overflow-hidden">

      {/* Fixed Background Layer */}
      <div
        className="fixed inset-0 bg-center bg-cover -z-10"
        style={{
          backgroundImage:
            "url('https://newprojects.99acres.com/projects/sk_developers_bhubaneswar/sk_grace_urban_ville/images/z0qeysg_1740478935_572585663_optOrig.jpg')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative h-full flex items-center justify-center overflow-hidden">

        {/* Moving Text */}
        <div id="scrollText" className="space-y-4 sm:space-y-6 text-center px-4">

          <h2 className="fade-right main-heading text-white text-3xl sm:text-5xl font-bold leading-snug sm:leading-tight">
            Building Landmarks  <br /> That Define Modern Living in Odisha
          </h2>

          <p className="fade-up text-white text-sm sm:text-lg font-semibold tracking-wide max-w-2xl mx-auto">
            We develop premium residential and commercial spaces in Bhubaneswar, designed for
comfort, built with trust, innovation, and excellence. Explore our projects that seamlessly
blend modernity, functionality, and luxury living.

          </p>
        <Link to="/services">
          <button
            className="flip-btn mask-btn mt-4 sm:mt-6 bg-white text-gray-900 font-semibold 
                       px-4 sm:px-6 py-2 sm:py-3 shadow-sm hover:bg-gray-200 transition rounded-lg"
          >
            EXPLORE OUR PROJECTS
          </button></Link>

        </div>
      </div>
    </section>
  );
};

export default ScrollPromo;
