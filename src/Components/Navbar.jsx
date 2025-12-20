import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.webp";
import companyProfile from "../assets/img/company-profile.pdf";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Our Products" },
    { path: "/services", label: "Applications" },
    {
      path: "/phone",
      label: "Contact Us",
      icon: <IoMdContact size={20} />,
    },
    {
      path: companyProfile,
      label: "Catalogue",
      download: true,
      icon: <FiDownload size={18} />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b md:border-yellow-400 border-transparent">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-28">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <div
            className="
              flex items-center justify-center
              h-20 w-20 md:h-24 md:w-24
              rounded-full
              shadow-[0_0_20px_rgba(250,204,21,0.9)]
              md:shadow-none
              md:border-4 md:border-yellow-400
            "
          >
            <img
              src={logo}
              alt="Shri Ram Fastners"
              className="h-full w-full object-contain rounded-full"
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-[18px] font-medium">
          {navLinks.map((link, idx) =>
            link.download ? (
              <a
                key={idx}
                href={link.path}
                download="SRF-Company-Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center gap-2 hover:text-yellow-400 transition"
              >
                {link.label}
                {link.icon}
              </a>
            ) : (
              <Link
                key={idx}
                to={link.path}
                className="text-white flex items-center gap-2 hover:text-yellow-400 transition"
              >
                {link.label}
                {link.icon}
              </Link>
            )
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-yellow-400 z-50"
        >
          {menu ? <AiOutlineClose size={30} /> : <RiMenuUnfoldFill size={30} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed left-0 right-0 bottom-0 bg-black z-40 transition-all duration-300
          border-t-2 border-yellow-400
          shadow-[0_-5px_30px_rgba(250,204,21,0.9)]
          ${menu ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        style={{ top: "112px" }}
      >
        <div className="flex flex-col items-center gap-5 px-6 py-6">
          {navLinks.map((link, idx) =>
            link.download ? (
              <a
                key={idx}
                href={link.path}
                download="SRF-Company-Profile.pdf"
                onClick={() => setMenu(false)}
                className="
                  w-full max-w-xs py-4 rounded-xl
                  bg-yellow-400 text-black font-semibold
                  flex items-center justify-center gap-2
                  border-2 border-yellow-300
                  shadow-[0_0_18px_rgba(250,204,21,0.9)]
                  active:scale-95 transition
                "
              >
                {link.label}
                {link.icon}
              </a>
            ) : (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setMenu(false)}
                className="
                  w-full max-w-xs py-4 rounded-xl
                  bg-yellow-400 text-black font-semibold
                  flex items-center justify-center gap-2
                  border-2 border-yellow-300
                  shadow-[0_0_18px_rgba(250,204,21,0.9)]
                  active:scale-95 transition
                "
              >
                {link.label}
                {link.icon}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
