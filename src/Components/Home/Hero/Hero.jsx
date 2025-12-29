import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/img/bg logo.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-yellow-400">
          Forge With Trust
        </h1>

        <p className="text-lg sm:text-3xl mb-8 text-white">
          Premium Fasteners. Unbeatable Quality. Hassle-Free Ordering and Delivery.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          
          {/* Button 1 */}
          <Link to="/Products" className="w-full sm:w-auto">
            <button
              className="
                w-full
                bg-black text-white
                px-6 py-3 sm:px-8 sm:py-4
                rounded-xl sm:rounded-2xl
                font-semibold sm:font-bold
                text-base sm:text-lg
                shadow-lg
                border-2 sm:border-4 border-yellow-400
                hover:bg-yellow-400 hover:text-black hover:border-black
                active:scale-95
                transition duration-300
              "
            >
              Browse Fasteners
            </button>
          </Link>

          {/* Button 2 */}
          <a
            href="https://wa.me/919463616466?text=Hello%20Admin,%20I%20want%20to%20source%20fasteners"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button
              className="
                w-full
                bg-black text-white
                px-6 py-3 sm:px-8 sm:py-4
                rounded-xl sm:rounded-2xl
                font-semibold sm:font-bold
                text-base sm:text-lg
                border-2 sm:border-4 border-yellow-400
                hover:bg-yellow-500 hover:text-black hover:border-black
                active:scale-95
                transition duration-300
              "
            >
              Design Your Fasteners
            </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;
