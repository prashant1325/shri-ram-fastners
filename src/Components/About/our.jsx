import React from "react";

// Machine images
import machine1 from "../../assets/img/bolt.jpg";
import machine2 from "../../assets/img/thread.jpg";
import machine3 from "../../assets/img/heat.jpg";

const Our = () => {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-14 sm:py-20 bg-black text-white">

      {/* Section Title */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16 text-center">
        <h1 className="inline-block border-b-2 border-yellow-400 pb-3 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wide md:tracking-[0.3em]">
          Company Profile
        </h1>
        <p className="text-gray-400 mt-3 text-xs sm:text-sm tracking-wide md:tracking-widest">
          Engineered for Strength · Built for Reliability
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 text-gray-300">

        {/* Introduction */}
        <section className="pl-4 sm:pl-6 border-l-4 border-yellow-400">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 tracking-wide md:tracking-widest">
            Introduction
          </h2>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose">
            Shri Ram Fastners (SRF) delivers innovative, high-quality fastening
            solutions to automotive and industrial sectors. Our focus on
            precision, performance, and competitive pricing enables us to serve
            industries that demand absolute reliability.
          </p>
        </section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          {[
            {
              title: "Our Vision",
              text:
                "To become a leading global fastener provider by delivering innovative, high-performance products that exceed industry standards while offering exceptional value.",
            },
            {
              title: "Our Mission",
              text:
                "To manufacture and supply superior fasteners through a process-driven, market-focused approach while ensuring consistent quality, competitive pricing, and customer satisfaction.",
            },
          ].map((item, idx) => (
            <section
              key={idx}
              className="border border-yellow-400/70 rounded-md p-5 sm:p-6 bg-[#0c0c0c]"
            >
              <h2 className="text-base sm:text-lg font-bold text-yellow-400 mb-3 tracking-wide md:tracking-widest">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed sm:leading-loose">
                {item.text}
              </p>
            </section>
          ))}
        </div>

        {/* About */}
        <section className="bg-[#0f0f0f] border border-gray-700 rounded-md p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 tracking-wide md:tracking-widest">
            About SRF
          </h2>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose">
            SHRI RAM FASTNERS has been delivering excellence in fastening
            solutions for years, providing high-quality nuts, bolts, anchors,
            and industrial fasteners across India and globally.
          </p>
          <p className="mt-4 text-yellow-400 font-semibold tracking-wide">
            “SRF – Forge With Trust”
          </p>
        </section>

        {/* Infrastructure & Capacity */}
        <section className="bg-[#0f0f0f] border border-gray-700 rounded-md p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 text-center tracking-wide md:tracking-widest">
            Infrastructure & Capacity
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed sm:leading-loose">
              <p>
                <span className="text-white font-semibold">SRF Fasteners®</span>{" "}
                operate from a{" "}
                <span className="text-yellow-400 font-semibold">
                  2000 square meter
                </span>{" "}
                advanced manufacturing facility.
              </p>
              <p>
                This infrastructure enables high-volume production with strict
                quality control for global supply.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center text-xs sm:text-sm uppercase tracking-wide">
              {[
                { value: "2000 m²", label: "Manufacturing Area" },
                { value: "600 Tons", label: "Monthly Capacity" },
                { value: "360", label: "Containers / Year" },
                { value: "30", label: "Containers / Month" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-yellow-400/80 rounded-md p-4 bg-black"
                >
                  <p className="text-yellow-400 font-bold text-lg">
                    {item.value}
                  </p>
                  <p className="mt-1 text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIST OF MACHINERY */}
        <section className="bg-[#0f0f0f] border border-gray-700 rounded-md p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 text-center tracking-wide md:tracking-widest">
            List of Machinery
          </h2>

          {/* Machine Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: machine1, name: "Bolt Maker Machine" },
              { img: machine2, name: "Thread Rolling Machine" },
              { img: machine3, name: "Heat Treatment Furnace" },
            ].map((m, i) => (
              <div
                key={i}
                className="border border-yellow-400 rounded-md overflow-hidden bg-black
                hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition"
              >
                {/* Aspect Ratio Wrapper */}
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <p className="py-3 text-center text-yellow-400 font-semibold text-sm sm:text-base">
                  {m.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quality */}
        <section className="pl-4 sm:pl-6 border-l-4 border-yellow-400">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 tracking-wide md:tracking-widest">
            Quality & Manufacturing Excellence
          </h2>
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose">
            SRF follows strict quality control systems with advanced testing
            facilities to ensure durability, accuracy, and consistency.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Our;
