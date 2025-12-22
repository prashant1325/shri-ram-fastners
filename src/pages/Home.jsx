import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Home/Hero/Hero";
import Featured from "../Components/Home/Featured/Featured";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <>
      {/* 🔥 STRONG LOCAL + INDUSTRIAL SEO FOR HOME PAGE */}
      <Helmet>
        {/* 🔑 TITLE – MOST IMPORTANT FOR RANKING */}
        <title>
          Nuts & Bolts Manufacturer in Ludhiana | Industrial Fasteners Supplier Punjab – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION – HIGH CLICK-THROUGH */}
        <meta
          name="description"
          content="Shri Ram Fastners is a leading nuts and bolts manufacturer in Ludhiana, Punjab. We supply industrial fasteners, high tensile bolts, MS & SS fasteners to automotive, railway and infrastructure industries across Punjab and India."
        />

        {/* 🔍 ADVANCED KEYWORDS (LOCAL + BUYER INTENT) */}
        <meta
          name="keywords"
          content="
          nuts and bolts manufacturer in ludhiana,
          nuts bolts supplier ludhiana,
          industrial fasteners manufacturer in ludhiana,
          fasteners supplier in punjab,
          high tensile bolts manufacturer ludhiana,
          ms nuts bolts supplier punjab,
          stainless steel fasteners ludhiana,
          custom fasteners manufacturer punjab,
          automotive fasteners ludhiana,
          railway fasteners supplier punjab
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/" />
      </Helmet>

      {/* PAGE CONTENT (UNCHANGED) */}
      <div>
        <Hero />
        <Featured />
        <WhyUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
