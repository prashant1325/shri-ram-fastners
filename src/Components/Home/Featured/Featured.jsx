import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import nutImg1 from "../../../assets/img/nut1.jpg";
import nutImg2 from "../../../assets/img/nut2.jpg";
import nutImg3 from "../../../assets/img/nut3.jpg";
import nutImg4 from "../../../assets/img/nut4.jpg";
import nutImg5 from "../../../assets/img/nut5.jpeg";
import nutImg6 from "../../../assets/img/nut6.jpeg";
import nutImg7 from "../../../assets/img/nut7.jpeg";

import FeatureCard from "./FeatureCard";

const Featured = () => {
  const nutsData = [
    {
      id: 0,
      img: nutImg1,
      name: "Wedge Anchor",
      desc: "Used for strong and secure anchoring in concrete structures.",
    },
    {
      id: 1,
      img: nutImg2,
      name: "Hex Bolts",
      desc: "High-strength bolts used in construction and machinery.",
    },
    {
      id: 2,
      img: nutImg3,
      name: "Helicoil Threaded Inserts",
      desc: "Repairs damaged threads and increases fastening life.",
    },
    {
      id: 3,
      img: nutImg4,
      name: "Phillips Pan Head Machine Screws",
      desc: "Ideal for electrical panels and machine assemblies.",
    },
    {
      id: 4,
      img: nutImg5,
      name: "Fender Washers",
      desc: "Distributes load evenly and prevents surface damage.",
    },
    {
      id: 5,
      img: nutImg6,
      name: "U-Bolt",
      desc: "Commonly used to secure pipes and round objects.",
    },
    {
      id: 6,
      img: nutImg7,
      name: "Stud Bolts",
      desc: "Heavy-duty bolts for flanges and pressure systems.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-4 py-12 bg-black overflow-hidden">
      <h1
        className="text-white font-bold text-3xl sm:text-5xl text-center mb-4"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        Premium <span className="text-yellow-400">Fasteners</span> Collection
      </h1>

      <p className="text-white text-center text-base sm:text-lg max-w-3xl mx-auto mb-10 px-2">
        Discover a curated selection of premium fasteners designed for strength,
        durability, and precision across industrial applications.
      </p>

      <Slider {...settings}>
        {nutsData.map((item) => (
          <FeatureCard
            key={item.id}
            img={item.img}
            name={item.name}
            desc={item.desc}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Featured;
