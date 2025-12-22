import React from "react";
import { Helmet } from "react-helmet-async";
import Ser from "../Components/Services/Ser";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Services = () => {
  return (
    <>
      {/* 🔥 ULTRA-ADVANCED SEO FOR APPLICATIONS PAGE (INDUSTRY + LOCAL AUTHORITY) */}
      <Helmet>
        {/* 🔑 TITLE – APPLICATION + LUDHIANA + PUNJAB */}
        <title>
          Industrial Fastener Applications in Ludhiana | Automotive, Railway & Solar Fasteners Punjab – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION – INDUSTRY USE + TRUST */}
        <meta
          name="description"
          content="Shri Ram Fastners delivers reliable industrial fastener applications in Ludhiana, Punjab for automotive, railway, solar, power and infrastructure sectors using high tensile, MS and stainless steel fastening solutions across Punjab and India."
        />

        {/* 🔍 ADVANCED KEYWORDS – APPLICATION + NEAR ME + LOCATION */}
        <meta
          name="keywords"
          content="
          industrial fastener applications ludhiana,
          fasteners for automotive industry punjab,
          railway fasteners manufacturer punjab,
          solar structure fasteners ludhiana,
          power plant fasteners supplier india,
          infrastructure fasteners supplier punjab,
          heavy machinery fasteners manufacturer,
          industrial fasteners near me
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/services" />

        {/* 🧩 SERVICE + LOCAL BUSINESS SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Industrial Fastener Applications",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Shri Ram Fastners",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ludhiana",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              }
            },
            "areaServed": [
              "Ludhiana",
              "Jalandhar",
              "Amritsar",
              "Patiala",
              "Mohali",
              "Bathinda",
              "Punjab"
            ]
          }
          `}
        </script>
      </Helmet>

      {/* PAGE CONTENT (UNCHANGED) */}
      <Ser />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Services;
