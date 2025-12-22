import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Home/Hero/Hero";
import Featured from "../Components/Home/Featured/Featured";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <>
      {/* 🔥 ULTRA-ADVANCED LOCAL + REGIONAL SEO FOR HOME PAGE */}
      <Helmet>
        {/* 🔑 TITLE – OPTIMIZED FOR LUDHIANA + NEAR ME + PUNJAB */}
        <title>
          Nuts & Bolts Manufacturer in Ludhiana | Nut Bolt Supplier Near Me Punjab – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION – LOCAL + BUYER INTENT + TRUST */}
        <meta
          name="description"
          content="Shri Ram Fastners is a trusted nuts and bolts manufacturer in Ludhiana, Punjab, supplying industrial fasteners, high tensile bolts, MS & SS fasteners to automotive, railway, solar and infrastructure industries across Punjab and nearby regions."
        />

        {/* 🔍 ADVANCED KEYWORDS – LOCAL, NEAR ME & REGIONAL */}
        <meta
          name="keywords"
          content="
          nuts and bolts manufacturer in ludhiana,
          nut bolt supplier near me,
          nuts bolts supplier ludhiana,
          industrial fasteners manufacturer ludhiana,
          fasteners shop near me,
          high tensile bolts manufacturer ludhiana,
          ms nuts bolts supplier punjab,
          stainless steel fasteners ludhiana,
          custom fasteners manufacturer punjab,
          automotive fasteners ludhiana,
          railway fasteners supplier punjab,
          nuts and bolts supplier in punjab
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/" />

        {/* 🧩 LOCAL BUSINESS SCHEMA – VERY IMPORTANT FOR “NEAR ME” */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shri Ram Fastners",
            "url": "https://www.shriramfastners.in/",
            "telephone": "+91-9463616466",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ludhiana",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            },
            "areaServed": [
              "Ludhiana",
              "Jalandhar",
              "Amritsar",
              "Patiala",
              "Mohali",
              "Bathinda",
              "Punjab"
            ],
            "sameAs": [
              "https://www.google.com/maps"
            ]
          }
          `}
        </script>
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
