import React from "react";
import { Helmet } from "react-helmet-async";
import Intro from "../Components/About/Intro";
import Our from "../Components/About/our";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const About = () => {
  return (
    <>
      {/* 🔥 ADVANCED SEO FOR ABOUT PAGE (TRUST + LOCAL AUTHORITY) */}
      <Helmet>
        {/* 🔑 TITLE – BRAND + LOCATION AUTHORITY */}
        <title>
          About Shri Ram Fastners | Nuts & Bolts Manufacturer in Ludhiana, Punjab
        </title>

        {/* 🧠 META DESCRIPTION – TRUST + INDUSTRIAL SIGNAL */}
        <meta
          name="description"
          content="Shri Ram Fastners is a trusted nuts and bolts manufacturer in Ludhiana, Punjab, specializing in industrial fasteners, high tensile bolts and precision fastening solutions for automotive, railway and infrastructure industries."
        />

        {/* 🔍 ADVANCED KEYWORDS (BRAND + LOCATION + INDUSTRY) */}
        <meta
          name="keywords"
          content="
          about shri ram fastners,
          nuts and bolts manufacturer in ludhiana,
          industrial fasteners manufacturer punjab,
          high tensile bolts manufacturer ludhiana,
          fasteners manufacturing company india,
          automotive fasteners punjab,
          railway fasteners manufacturer
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/about" />
      </Helmet>

      {/* PAGE CONTENT (UNCHANGED) */}
      <Intro />
      <Our />
      <WhyUs />
      <Footer />
    </>
  );
};

export default About;
