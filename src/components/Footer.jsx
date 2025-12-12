import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="relative bg-no-repeat bg-cover bg-center text-[#E6E2D4] pt-16 pb-10"
      style={{
        backgroundImage:
          "url('/assets/images/Artitecture-bg-2.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#303123]/90"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        
        {/* TOP ROW */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          
          {/* LEFT BLOCK */}
          <div>
            <div className="flex items-center gap-3">
              <div className="pt-2 px-2 rounded-lg">
                <img
                  src="/assets/images/logo/grace_homes_alpha-01.png"
                  alt="Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-[#EDE9DE] mt-4 max-w-xs leading-relaxed">
              Experience the perfect blend of style, comfort, and functionality. 
              We craft interiors that not only look stunning but also enhance your living lifestyle.
            </p>

            {/* Download Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="border border-[#D9D7CC] px-4 py-2 text-sm rounded">
                DOWNLOAD FOR
              </button>
              <button className="border border-[#D9D7CC] px-4 py-2 text-sm rounded">
                DOWNLOAD FOR
              </button>
            </div>
          </div>

          {/* CENTER – Subscription */}
          <div>
            <h3 className="text-xl font-semibold text-white">Fear Of Missing Out?</h3>
            <p className="text-sm text-[#EDE9DE]">Get Latest Deals & Updates</p>

            <div className="flex mt-6">
              <input
                type="email"
                placeholder="Email Id"
                className="px-3 py-2 rounded-l-md bg-white text-black w-full outline-none"
              />
              <button className="bg-[#A1866F] text-white px-5 rounded-r-md text-xs tracking-wider">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>

          {/* RIGHT – Contact */}
          <div className="flex flex-col gap-6 mt-4 md:mt-0">

            <div className="flex items-start gap-3">
              <FiMapPin size={20} className="text-white" />
              <p className="text-sm max-w-xs">47 W 13th St, New York, NY 10011</p>
            </div>

            <div className="flex items-start gap-3">
              <FiMail size={20} className="text-white" />
              <p className="text-sm">General@InteriorDesign.com</p>
            </div>

            <div className="flex items-start gap-3">
              <FiPhone size={20} className="text-white" />
              <p className="text-sm">+05 - 845 4545 3434</p>
            </div>

          </div>

        </div>

        {/* SEPARATOR */}
        <div className="border-t border-[#49493A] mt-12 mb-10"></div>

        {/* 5 COLUMN NAV BLOCK */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 px-6">

          <div>
            <h3 className="font-semibold text-white mb-3">Service’s</h3>
            <ul className="text-sm space-y-1 text-[#EDE9DE]">
              <li>Interior Design Services</li>
              <li>Full Home Interiors</li>
              <li>Customer Reviews</li>
              <li>Service Available In Cities</li>
              <li>Interior Budget Calculator</li>
              <li>Home Interior Makeover</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Help</h3>
            <ul className="text-sm space-y-1 text-[#EDE9DE]">
              <li>Privacy Policy</li>
              <li>Shipping & Return Policy</li>
              <li>Warranty Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Available Cities</h3>
            <p className="text-sm text-[#EDE9DE]">New York | Miami | Los Angeles</p>
          </div>

          <div className="col-span-2">
            <h3 className="font-semibold text-white mb-3">Popular Categories</h3>
            <p className="text-sm text-[#EDE9DE] leading-relaxed">
              Hybrid Mattress | Pocket Springs | Mattress For Back Pain | High Foam Mattress | 
              Memory Foam Mattress | Bed In Box Mattress | TV & Media Units
            </p>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="border-t border-[#4A4A3C] mt-14"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 mt-6 text-sm text-[#EDE9DE]">
          <span>© 2025 GraceHomes.Com All Rights Reserved</span>

          <div className="flex gap-5 mt-4 md:mt-0">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
          </div>
        </div>

      </div>
    </footer>
  );
}
