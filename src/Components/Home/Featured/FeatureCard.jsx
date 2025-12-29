import React from "react";

const FeatureCard = ({ img, name, desc, price }) => {
  return (
    <div className="p-3 sm:p-4">
      <div
        className="
          bg-black rounded-xl
          border-b-8 border-transparent
          md:hover:border-yellow-400
          md:hover:drop-shadow-[0_8px_12px_rgba(255,204,0,0.7)]
          transition-transform duration-300
          md:hover:-translate-y-2
          overflow-hidden
          flex flex-col
        "
      >
        {/* IMAGE */}
        <div className="w-full h-44 sm:h-48 md:h-56 lg:h-64 bg-black overflow-hidden rounded-t-xl">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* PRODUCT INFO */}
        <div className="p-4 text-center">
          {/* Product Name */}
          <h1 className="text-white text-base sm:text-lg md:text-xl font-bold leading-snug mb-2">
            {name}
          </h1>

          {/* Description – MOBILE ONLY */}
          {desc && (
            <p className="text-gray-300 text-sm leading-relaxed sm:hidden">
              {desc}
            </p>
          )}

          {/* Price (optional) */}
          {price && (
            <h2 className="text-yellow-400 text-sm sm:text-md md:text-lg font-semibold mt-2">
              {price}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
