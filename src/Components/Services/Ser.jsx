import React from "react";

// Images
import carwheel from "../../assets/img/carwheel.avif";
import solar from "../../assets/img/solar.webp";
import webstr from "../../assets/img/webstr.webp";
import railway from "../../assets/img/railway.jpg";
import petro from "../../assets/img/petro.jpg";
import transformer from "../../assets/img/tranformer.jpg";

const servicesList = [
  { id: 1, title: "Automotive Industry", img: carwheel },
  { id: 2, title: "Solar Module Mounting Structure", img: solar },
  { id: 3, title: "Pre Engineered Building Structure", img: webstr },
  { id: 4, title: "Railways Industry", img: railway },
  { id: 5, title: "Electrical & Petro-Chemical Industry", img: petro },
  { id: 6, title: "Power Industry", img: transformer },
];

const Ser = () => {
  return (
    <div className="bg-black text-white py-20 px-4">
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold text-center text-yellow-400 mb-14">
        Product <span className="text-white">Applications</span>
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {servicesList.map((service) => (
          <div key={service.id} className="text-center group">
            
            {/* Image with Glow */}
            <div className="
              w-full h-64 md:h-72 lg:h-80
              rounded-2xl overflow-hidden
              border-2 border-yellow-400
              shadow-xl
              transition duration-300
              group-hover:shadow-[0_0_25px_rgba(253,224,71,0.8)]
            ">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="
              mt-5 text-yellow-300 font-semibold
              text-lg md:text-xl
              transition duration-300
              group-hover:text-yellow-400
            ">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ser;
