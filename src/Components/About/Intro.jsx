import React from "react";

const Intro = () => {
  return (
    <div className="pt-32 px-6 md:px-12 bg-black text-center">

      {/* Brand Plate Style */}
      <div className="inline-block border-2 border-yellow-400 px-6 py-4 mb-8 relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-3 text-yellow-400 text-1xl tracking-widest">
         Forge With Trust
        </span><br></br>

        <h1 className="text-3xl md:text-5xl font-black tracking-[0.25em] text-white">
          SHRI RAM
        </h1>
        <h1 className="text-2xl md:text-4xl font-light tracking-[0.4em] text-yellow-400 mt-2">
          FASTNERS
        </h1>
      </div>

      {/* Supply Badge */}
      <div className="flex justify-center mb-6">
        <span className="border border-yellow-400 px-6 py-1 text-yellow-400 text-sm tracking-[0.5em] uppercase">
          Supply  FASTNERS
        </span>
      </div>

      {/* Description */}
      <p className="max-w-4xl mx-auto text-gray-400 text-base md:text-lg leading-loose mb-6">
        Precision-engineered{" "}
        <span className="text-white font-semibold">
          nuts, bolts, screws & fasteners
        </span>{" "}
        designed to meet industrial strength and household reliability standards.
      </p>

      {/* Statement Line */}
      <h2 className="text-white text-lg md:text-xl font-medium tracking-widest">
        Strength you can trust.
        <span className="block text-yellow-400 mt-2">
          Performance you can rely on.
        </span>
      </h2>

    </div>
  );
};

export default Intro;
