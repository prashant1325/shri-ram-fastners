import React from "react";

// Machine images
import machine1 from "../../assets/img/bolt.jpg";
import machine2 from "../../assets/img/thread.jpg";
import machine3 from "../../assets/img/mesh.webp";

const Our = () => {
  return (
    <div className="px-4 sm:px-6 md:px-20 py-14 sm:py-20 bg-black text-white">

      {/* Section Title */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16 text-center">
        <h1
          className="
            inline-block border-b-2 border-yellow-400 pb-3
            text-2xl sm:text-3xl md:text-4xl
            font-black uppercase
            tracking-wide md:tracking-[0.3em]
          "
        >
          Company Profile
        </h1>
        <p className="text-gray-400 mt-3 text-xs sm:text-sm tracking-wide md:tracking-widest">
          Engineered for Strength · Built for Reliability
        </p>
      </div>

      {/* Content Wrapper */}
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
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 tracking-wide md:tracking-widest text-center">
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
                advanced manufacturing facility with Heading, Pinch Pointing,
                Threading, and End-Cutting machines.
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

          {/* Table */}
          <div className="overflow-x-auto mb-10 border border-gray-700 rounded-md">
            <table className="min-w-[650px] w-full text-sm">
              <thead className="bg-yellow-400 text-black">
                <tr>
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Machine Name</th>
                  <th className="px-4 py-3 text-left">Range</th>
                  <th className="px-4 py-3 text-left">Qty</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bolt Maker (National)", "M6–M24", "20"],
                  ["Nut Former", "M6–M24", "5"],
                  ["Thread Rolling Machine", "M6–M24", "20"],
                  ["Hydraulic Thread Rolling", "-", "20"],
                  ["Lathe Machines", "-", "4"],
                  ["Nut Tapping Machine", "M6–M24", "4"],
                  ["Heat Treatment Furnace", "125 kg/hr", "1"],
                  ["Zinc Plant (Semi Auto)", "-", "4 Barrels"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-700 hover:bg-[#1a1a1a]"
                  >
                    <td className="px-4 py-3">{i + 1}</td>
                    <td className="px-4 py-3">{row[0]}</td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Machine Images */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: machine1, name: "Bolt Maker Machine" },
              { img: machine2, name: "Thread Rolling Machine" },
              { img: machine3, name: "Heat Treatment Furnace" },
            ].map((m, i) => (
              <div
                key={i}
                className="border border-yellow-400 rounded-md overflow-hidden bg-black text-center
                hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-44 sm:h-48 object-cover"
                />
                <p className="py-3 text-yellow-400 font-semibold text-sm sm:text-base">
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
            SRF is an ISO 9001:2008 certified organization using advanced
            technology and strict quality control systems.
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed sm:leading-loose">
            Every product undergoes multiple inspections before packaging.
          </p>
        </section>
        {/* Common Testing Facilities */}
<section className="bg-[#0f0f0f] border border-gray-700 rounded-md p-6 sm:p-8">
  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6 text-center tracking-wide md:tracking-widest">
    Common Testing Facilities
  </h2>

  {/* NON-DESTRUCTIVE TEST EQUIPMENTS */}
  <div className="mb-10">
    <h3 className="text-yellow-400 font-semibold mb-3 tracking-wide uppercase">
      Non Destructive Test Equipments
    </h3>

    <div className="overflow-x-auto border border-gray-700 rounded-md">
      <table className="min-w-[650px] w-full text-sm">
        <thead className="bg-yellow-400 text-black">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Equipment</th>
            <th className="px-4 py-3 text-left">Range</th>
            <th className="px-4 py-3 text-left">Quantity</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {[
            ["Hardness Tester Rockwell", "HRB / HRC", "02 No."],
            ["Hardness Tester Vicker Scale", "-", "01 No."],
            ["Profile Projector", "-", "01 No."],
            ["Metallurgical Microscope", "-", "01 No."],
            ["B.F. Testing Machine for Corrugated Box", "-", "01 No."],
          ].map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-gray-700 hover:bg-[#1a1a1a]"
            >
              <td className="px-4 py-3">{idx + 1}</td>
              <td className="px-4 py-3">{row[0]}</td>
              <td className="px-4 py-3">{row[1]}</td>
              <td className="px-4 py-3">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* DESTRUCTIVE / MECHANICAL TEST EQUIPMENTS */}
  <div className="mb-10">
    <h3 className="text-yellow-400 font-semibold mb-3 tracking-wide uppercase">
      Destructive / Mechanical Test Equipments
    </h3>

    <div className="overflow-x-auto border border-gray-700 rounded-md">
      <table className="min-w-[600px] w-full text-sm">
        <thead className="bg-yellow-400 text-black">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Equipment</th>
            <th className="px-4 py-3 text-left">Capacity</th>
            <th className="px-4 py-3 text-left">Quantity</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {[
            ["UTM (Universal Testing Machine)", "40 TON", "01 No."],
            ["Impact Testing Machine", "-", "01 No."],
            ["Spectrometer", "-", "01 No."],
          ].map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-gray-700 hover:bg-[#1a1a1a]"
            >
              <td className="px-4 py-3">{idx + 1}</td>
              <td className="px-4 py-3">{row[0]}</td>
              <td className="px-4 py-3">{row[1]}</td>
              <td className="px-4 py-3">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* ELECTROPLATING INSTRUMENTS */}
  <div>
    <h3 className="text-yellow-400 font-semibold mb-3 tracking-wide uppercase">
      Electroplating Instruments
    </h3>

    <div className="overflow-x-auto border border-gray-700 rounded-md">
      <table className="min-w-[500px] w-full text-sm">
        <thead className="bg-yellow-400 text-black">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Instrument</th>
            <th className="px-4 py-3 text-left">Quantity</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {[
            ["Salt Spray Chamber", "01 No."],
            ["Coating Thickness Gauge", "02 No."],
          ].map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-gray-700 hover:bg-[#1a1a1a]"
            >
              <td className="px-4 py-3">{idx + 1}</td>
              <td className="px-4 py-3">{row[0]}</td>
              <td className="px-4 py-3">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>


        {/* Products */}
        <section className="bg-[#0f0f0f] border border-gray-700 rounded-md p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 tracking-wide md:tracking-widest">
            Global Presence & Product Range
          </h2>

          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose mb-5">
            SRF serves infrastructure, civil engineering, and automotive
            manufacturing sectors across international markets.
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-xs sm:text-sm tracking-wide uppercase">
            {[
              "Hexagon Head Bolts",
              "Hexagon Nuts",
              "Flat Washers",
              "Stud Bolts",
            ].map((item, idx) => (
              <li
                key={idx}
                className="border border-yellow-400/80 rounded-md p-3 text-center"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm sm:text-base leading-relaxed sm:leading-loose">
            Our commitment lies in building long-term partnerships through
            dependable products and consistent excellence.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Our;
