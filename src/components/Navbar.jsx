import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50); // When scroll greater than 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* FIXED NAVBAR WRAPPER */}
      <div
        className={`z-50 fixed top-0 left-0 w-full  transition-all duration-300 ${
          scroll ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >

        {/* TOP CONTACT BAR */}
        <div
          className={`w-full border-b hidden md:flex justify-between px-6 lg:px-12 py-3 text-sm transition-all duration-300 ${
            scroll ? "text-black border-gray-300" : "text-white border-white/20"
          }`}
        >
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <i className="far fa-envelope"></i> sgraceengineering@gmail.com
            </span>

            <span className="flex items-center gap-2">
              <i className="fas fa-phone-alt"></i> +91 8280 667 778
            </span>
          </div>

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

        {/* MAIN NAVBAR */}
        <header
          className={`w-full px-6 lg:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
            scroll ? "text-black" : "text-white"
          }`}
        >
      <div className="flex items-center gap-3">
        <img
          src={
            scroll
              ? "/assets/images/logo/grace_homes_alpha-01.png" // SCROLL LOGO
              : "/assets/images/logo/grace_homes_alpha-02.png" // DEFAULT LOGO
          }
          alt="Grace Homes"
          className="w-20 transition-all duration-300"
        />
      </div>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            {/* Search Icon */}
            <button
  className={`hidden sm:flex w-10 h-10 items-center justify-center rounded-full transition-all duration-300 ${
    scroll ? "bg-black text-white" : "bg-white text-black"
  }`}
>
  <FaSearch />
</button>


            {/* Button */}
<button
  className={`flip-btn hidden md:block px-6 py-3 font-medium tracking-wide transition-all duration-300 ${
    scroll ? "bg-black text-white" : "bg-white text-black"
  }`}
>
  GET FREE ESTIMATION
</button>



            {/* Hamburger Button */}
            <button
              onClick={() => setOpen(true)}
              className="text-3xl transition-all duration-300"
            >
              <FaBars />
            </button>
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
          <button className="flex items-center justify-between py-3 border-b">
            Home <span>›</span>
          </button>

          <button className="flex items-center justify-between py-3 border-b">
            Our Services <span>›</span>
          </button>

          <button className="flex items-center justify-between py-3 border-b">
            Projects <span>›</span>
          </button>

          <button className="flex items-center justify-between py-3 border-b">
            Articles <span>›</span>
          </button>

          <button className="flex items-center justify-between py-3 border-b">
            Contact <span>›</span>
          </button>

          <button className="flex items-center justify-between py-3 border-b">
            Products <span>›</span>
          </button>

          <button className="flex items-center justify-between py-3 border-b">
            Pages <span>›</span>
          </button>
        </nav>
      </div>
    </>
  );
}
