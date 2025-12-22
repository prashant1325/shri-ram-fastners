import React from "react";
import { Helmet } from "react-helmet-async";
import Ser from "../Components/Services/Ser";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Services = () => {
  return (
    <>
      {/* 🔥 ADVANCED SEO FOR APPLICATIONS PAGE (INDUSTRY + LOCATION) */}
      <Helmet>
        {/* 🔑 TITLE – INDUSTRY + CITY + STATE */}
        <title>
          Industrial Fastener Applications in Ludhiana, Punjab | Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION – APPLICATION + TRUST */}
        <meta
          name="description"
          content="Shri Ram Fastners provides industrial fastener applications in Ludhiana, Punjab for automotive, railway, solar, power and infrastructure sectors with durable, high-performance fastening solutions."
        />

        {/* 🔍 ADVANCED KEYWORDS (APPLICATION + LOCATION) */}
        <meta
          name="keywords"
          content="
          industrial fastener applications ludhiana,
          fasteners for automotive industry punjab,
          railway fasteners manufacturer punjab,
          solar structure fasteners ludhiana,
          power plant fasteners india,
          infrastructure fasteners supplier punjab,
          heavy machinery fasteners manufacturer
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/services" />
      </Helmet>

      {/* PAGE CONTENT (UNCHANGED) */}
      <Ser />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Services;
