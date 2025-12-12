import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-5 z-[999]">

      {/* WHATSAPP BUTTON */}
      <div className="flex items-center gap-3 group relative">

        {/* Text – hidden until hover */}
        <span
          className="
            absolute right-14 opacity-0 translate-x-3
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300
            text-sm font-medium text-gray-700 
            bg-white/90 px-3 py-1 rounded-full shadow
            whitespace-nowrap
          "
        >
          Chat with us
        </span>

        {/* Button */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative group w-12 h-12 rounded-full
            bg-gradient-to-br from-green-400 to-green-600
            flex items-center justify-center 
            shadow-[0_6px_18px_rgba(0,255,0,0.4)]
            hover:shadow-[0_10px_25px_rgba(0,255,0,0.6)]
            transition-all duration-300 hover:scale-110
          "
        >
          <div
            className="
              absolute -inset-3 rounded-[40%] bg-green-500/20 
              blur-xl opacity-0 group-hover:opacity-70
              transition-all duration-300
            "
          ></div>

          <FaWhatsapp size={24} className="text-white drop-shadow-xl z-10" />
        </a>
      </div>

      {/* CALL BUTTON */}
      <div className="flex items-center gap-3 group relative">

        {/* Text – hidden until hover */}
        <span
          className="
            absolute right-14 opacity-0 translate-x-3
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300
            text-sm font-medium text-gray-700 
            bg-white/90 px-3 py-1 rounded-full shadow
            whitespace-nowrap
          "
        >
          Call us
        </span>

        {/* Button */}
        <a
          href="tel:+91XXXXXXXXXX"
          className="
            relative group w-12 h-12 rounded-full
            bg-gradient-to-br from-blue-400 to-blue-600
            flex items-center justify-center 
            shadow-[0_6px_18px_rgba(0,120,255,0.4)]
            hover:shadow-[0_10px_25px_rgba(0,120,255,0.6)]
            transition-all duration-300 hover:scale-110
          "
        >
          <div
            className="
              absolute -inset-3 rounded-[40%] bg-blue-500/20 
              blur-xl opacity-0 group-hover:opacity-70
              transition-all duration-300
            "
          ></div>

          <FaPhoneAlt size={20} className="text-white drop-shadow-xl z-10" />
        </a>
      </div>

    </div>
  );
}
