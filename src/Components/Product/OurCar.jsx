import React from "react";

// Images
import sports from "../../assets/img/anchors.jpeg";
import sports2 from "../../assets/img/bolts.jpeg";
import sports3 from "../../assets/img/ubolt.jpeg";
import sports4 from "../../assets/img/nut4.jpg";
import sports5 from "../../assets/img/rivets.jpeg";

import suv1 from "../../assets/img/studs.jpeg";
import suv2 from "../../assets/img/thread.jpeg";
import suv3 from "../../assets/img/pins.jpeg";
import suv4 from "../../assets/img/nails.jpeg";
import suv5 from "../../assets/img/magnet.jpeg";

import sedan1 from "../../assets/img/nuts.jpeg";
import sedan2 from "../../assets/img/washer.jpeg";
import sedan3 from "../../assets/img/cable.jpeg";
import sedan4 from "../../assets/img/key.jpeg";
import sedan5 from "../../assets/img/staple.jpeg";
import sedan6 from "../../assets/img/rus.jpeg";

// Product data
const productData = [
  { id: 1, name: "Anchors", img: sports },
  { id: 2, name: "Bolts", img: sports2 },
  { id: 3, name: "Studs", img: suv1 },
  { id: 4, name: "Threaded Rods", img: suv2 },
  { id: 5, name: "Nuts", img: sedan1 },
  { id: 6, name: "Washers", img: sedan2 },
  { id: 7, name: "U-Bolts", img: sports3 },
  { id: 8, name: "Screws", img: sports4 },
  { id: 9, name: "Rivets", img: sports5 },
  { id: 10, name: "Pins", img: suv3 },
  { id: 11, name: "Nails", img: suv4 },
  { id: 12, name: "Magnets", img: suv5 },
  { id: 13, name: "Cables", img: sedan3 },
  { id: 14, name: "Key Stock", img: sedan4 },
  { id: 15, name: "Staples", img: sedan5 },
  { id: 16, name: "Retaining Rings", img: sedan6 },
];

// ProductGrid component
const ProductGrid = ({ title, products }) => (
  <div className="mb-20 px-4">
    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-12 text-center">
      {title}
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-xl overflow-hidden bg-black transition duration-300 transform hover:scale-105 hover:shadow-[0_8px_20px_rgba(255,235,59,0.6)] hover:-translate-y-1"
        >
          <div className="h-[260px] w-full">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-zinc-900 p-5 text-center">
            <h3 className="text-white text-lg font-bold mb-2">{product.name}</h3>

            {/* Optional fields */}
            {product.price && (
              <p className="text-yellow-300 font-medium">{product.price}</p>
            )}
            {product.owner && (
              <p className="text-gray-300 text-sm mb-2">{product.owner}</p>
            )}

            {/* WhatsApp Booking */}
            <a
              href={`https://wa.me/919463616466?text=Hello%2C%20I%20want%20to%20book%20the%20product%20${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-sm bg-yellow-500 hover:bg-black hover:text-yellow-400 font-semibold px-4 py-1.5 rounded-md transition duration-300 border border-yellow-500 hover:scale-105">
                Book Now
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main OurProducts component
const OurProducts = () => {
  return (
    <div className="bg-black py-16 overflow-hidden">
      <h1 className="text-white font-semibold text-5xl sm:text-6xl text-center mb-12 tracking-wide font-georgia">
        Explore Our{" "}
        <span className="text-yellow-400 font-arial tracking-wide">
          Fastening & Joining Solutions
        </span>
      </h1>

      <ProductGrid title="Our Products" products={productData} />
    </div>
  );
};

export default OurProducts;
