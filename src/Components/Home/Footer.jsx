import React from "react";
import { Link } from "react-router-dom";

// ✅ IMPORT PDF FROM ASSETS
import cataloguePdf from "../../assets/img/company-profile.pdf";

// ✅ IMPORT DOWNLOAD ICON
import { FiDownload } from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-yellow-500 pb-2">
            SHRI <span className="text-yellow-400 font-medium"> RAM FASTNERS..</span>
          </h3>
          <p className="text-white text-sm leading-relaxed">
            Discover high-quality nuts and bolts, crafted for durability and
            precision. From industrial supplies to household needs, we ensure
            every project is strong and secure.
            <span className="text-yellow-400 font-medium"> SHRI RAM FASTNERS.</span>
          </p>
        </div>

        {/* Page Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-yellow-500 pb-2">
            Page <span className="text-yellow-400 font-medium">Links..</span>
          </h3>

          <div className="flex flex-col space-y-2 text-white">
            <Link to="/about" className="hover:text-yellow-400 transition-colors">
              About Us
            </Link>
            <Link to="/car" className="hover:text-yellow-400 transition-colors">
              Our Products
            </Link>
            <Link to="/services" className="hover:text-yellow-400 transition-colors">
              Applications
            </Link>
            <Link to="/phone" className="hover:text-yellow-400 transition-colors">
              Contact Us
            </Link>

            {/* ✅ DOWNLOAD CATALOGUE (FIXED) */}
            <a
              href={cataloguePdf}
              download="SRF-Fastener-Catalogue.pdf"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
               Catalogue
              <FiDownload size={18} />
            </a>
          </div>
        </div>

        {/* Fasteners for Sale */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-yellow-500 pb-2">
            Fasteners <span className="text-yellow-400 font-medium">for Sale..</span>
          </h3>
          <div className="flex flex-col space-y-2">
            {["Hex Bolts", "Nuts", "Screws", "Washers", "Anchors"].map(
              (item, idx) => (
                <Link
                  key={idx}
                  to="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-yellow-500 pb-2">
            Learn <span className="text-yellow-400 font-medium">More..</span>
          </h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              High-Quality Materials
            </Link>
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              Wide Variety of Fasteners
            </Link>
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              Bulk Orders & Discounts
            </Link>
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              Reliable Delivery & Support
            </Link>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="w-full flex justify-center gap-5 mt-10 text-2xl">
        <a
          href="https://www.facebook.com/share/1Btgte4RsR/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/srfdurabolt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/shri-ram-fastners/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Address */}
      <div className="mt-10 text-center border-t border-yellow-500 pt-6 text-gray-300 space-y-2">
        <p className="text-lg">
          📍{" "}
          <a
            href="https://maps.app.goo.gl/ThiY6qynD42ttXQQ7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 transition"
          >
            Focal Point, Ludhiana
          </a>
          , India
        </p>

        <p className="text-lg">
          ☎ WhatsApp:{" "}
          <a
            href="https://wa.me/919463616466"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 transition"
          >
            9463616466
          </a>
        </p>

        <p className="text-md text-gray-400 mt-2">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">
            SHRI RAM FASTNERS
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
