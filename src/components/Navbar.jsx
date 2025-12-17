import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* FIXED NAVBAR WRAPPER */}
      <div
        className={`z-50 fixed top-0 left-0 w-full transition-all duration-300 ${
          scroll ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        {/* TOP CONTACT BAR */}
        <div
          className={`w-full border-b hidden md:block transition-all duration-300 ${
            scroll
              ? "text-black border-gray-300"
              : "text-white border-white/20"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between text-sm">
            {/* LEFT */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:sgraceengineering@gmail.com"
                className="flex items-center gap-2 hover:text-orange-600 transition"
              >
                <i className="far fa-envelope"></i>
                sgraceengineering@gmail.com
              </a>

              <a
                href="tel:+918280667778"
                className="flex items-center gap-2 hover:text-orange-600 transition"
              >
                <i className="fas fa-phone-alt"></i>
                +91 8280 667 778
              </a>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4 text-lg">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F3732A] transition"
              >
                <i className="fab fa-facebook"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F3732A] transition"
              >
                <i className="fab fa-x-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/gracehomesodisha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F3732A] transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <header
          className={`w-full transition-all duration-300 ${
            scroll ? "text-black" : "text-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <img
                src={
                  scroll
                    ? "/assets/images/logo/grace_homes_alpha-01.png"
                    : "/assets/images/logo/grace_homes_alpha-02.png"
                }
                alt="Grace Homes"
                className="w-20 transition-all duration-300"
              />
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-5">
              {/* Search */}
              <button
                className={`hidden sm:flex w-10 h-10 items-center justify-center rounded-full transition-all duration-300 ${
                  scroll ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <FaSearch />
              </button>

              {/* CTA Button */}
              <button
                className={`flip-btn hidden md:block px-6 py-3 font-medium tracking-wide transition-all duration-300 ${
                  scroll ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                GET FREE ESTIMATION
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setOpen(true)}
                className="text-3xl transition-all duration-300"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* DARK OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* RIGHT SIDE SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[350px] bg-[#f7f3eb] text-black z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} className="text-3xl">
            <FaTimes />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-6 px-6 text-lg font-medium">
          {[
            "Home",
            "Our Services",
            "Projects",
            "Articles",
            "Contact",
            "Products",
            "Pages",
          ].map((item) => (
            <button
              key={item}
              className="flex items-center justify-between py-3 border-b"
            >
              {item} <span>›</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
