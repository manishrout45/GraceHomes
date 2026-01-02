import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="relative bg-no-repeat bg-cover bg-center text-[#E6E2D4] pt-10 pb-6"
      style={{ backgroundImage: "url('/assets/images/Artitecture-bg-2.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#303123]/90"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* LEFT BLOCK */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/logo/grace_homes_alpha-02.png"
                alt="Grace Homes Logo"
                className="w-24 h-24 object-contain"
              />
            </div>

            <p className="text-sm text-[#EDE9DE] mt-3 leading-relaxed max-w-xs">
              Building premium residential and commercial projects in Bhubaneswar. 
              We focus on quality, timely delivery, and creating spaces that enhance lifestyles.
            </p>

            <div className="flex gap-3 mt-4">
              <button className="border border-[#D9D7CC] px-3 py-2 text-sm rounded">
                DOWNLOAD BROCHURE
              </button>
              <button className="border border-[#D9D7CC] px-3 py-2 text-sm rounded">
                VIEW PROJECTS
              </button>
            </div>
          </div>

          {/* CENTER – Subscription */}
<div>
  <h3 className="text-base font-semibold text-white tracking-wide">
    Stay Updated
  </h3>
  <p className="text-xs text-[#E6E2D4] mt-1 leading-snug">
    Project launches & exclusive offers
  </p>

  <form className="mt-4 space-y-2">
    {/* Row 1 */}
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Name"
        className="w-1/2 px-3 py-1.5 text-xs rounded-md bg-white/95 text-black
                   outline-none placeholder:text-gray-500
                   focus:ring-1 focus:ring-[#A1866F]"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-1/2 px-3 py-1.5 text-xs rounded-md bg-white/95 text-black
                   outline-none placeholder:text-gray-500
                   focus:ring-1 focus:ring-[#A1866F]"
      />
    </div>

    {/* Email */}
    <input
      type="email"
      placeholder="Email Address"
      className="w-full px-3 py-1.5 text-xs rounded-md bg-white/95 text-black
                 outline-none placeholder:text-gray-500
                 focus:ring-1 focus:ring-[#A1866F]"
    />

    {/* Message */}
    <textarea
      rows="2"
      placeholder="Message"
      className="w-full px-3 py-1.5 text-xs rounded-md bg-white/95 text-black
                 outline-none placeholder:text-gray-500 resize-none
                 focus:ring-1 focus:ring-[#A1866F]"
    ></textarea>

    {/* Button */}
    <button
      type="submit"
      className="w-full mt-1 bg-gradient-to-r from-[#A1866F] to-[#8E755F]
                 text-white py-1.5 rounded-md text-[11px] tracking-widest
                 transition-all duration-300 hover:opacity-90 hover:shadow-md"
    >
      SEND MESSAGE
    </button>
  </form>
</div>


          {/* RIGHT – Contact */}
          <div className="flex flex-col gap-3 mt-4 md:mt-0">
            <div className="flex items-start gap-2">
              <FiMapPin size={18} className="text-white mt-1" />
              <p className="text-sm max-w-xs">A-144, Saheed Nagar, Bhubaneswar, Odisha 751007</p>
            </div>
            <div className="flex items-start gap-2">
            <FiMail size={18} className="text-white mt-1" />
            <a
              href="mailto:sgraceengineering@gmail.com"
              className="text-sm hover:underline"
            >
              sgraceengineering@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-2">
            <FiPhone size={18} className="text-white mt-1" />
            <a
              href="tel:+918280667778"
              className="text-sm hover:underline"
            >
              +91 8280 667 778
            </a>
          </div>

          </div>
        </div>

        {/* SEPARATOR */}
        <div className="border-t border-[#49493A] mt-8 mb-6"></div>

        {/* NAV BLOCK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-2">Our Services</h3>
            <ul className="space-y-1 text-[#EDE9DE]">
              <li>Residential Projects</li>
              <li>Commercial Developments</li>
              <li>Luxury Villas</li>
              <li>High-Rise Apartments</li>
              <li>Project Consultation</li>
              <li>Interior Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Help & Support</h3>
            <ul className="space-y-1 text-[#EDE9DE]">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Warranty Policy</li>
              <li>FAQs</li>
              <li>Contact Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Locations</h3>
            <p className="text-[#EDE9DE]">Bhubaneswar | Cuttack | Puri</p>
          </div>

          <div className="col-span-2">
            <h3 className="font-semibold text-white mb-2">Popular Projects</h3>
            <p className="text-[#EDE9DE] leading-relaxed">
              Grace Villas | Urban Heights Apartments | Prime Commercial Complex | Serenity Residency | Smart Homes Bhubaneswar
            </p>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="border-t border-[#4A4A3C] mt-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-[#EDE9DE] gap-3 md:gap-0">
          <span>© 2025 GraceHomes.Bhubaneswar All Rights Reserved</span>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/gracehomesodisha"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition hover:text-[#F3732A]  
              hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition hover:text-[#F3732A]  
              hover:-translate-y-1"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/gracehomesodisha"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition hover:text-[#F3732A]  
           hover:-translate-y-1"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition hover:text-[#F3732A] 
           hover:-translate-y-1"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
