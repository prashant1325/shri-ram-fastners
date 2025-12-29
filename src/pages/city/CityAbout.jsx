import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Intro from "../../Components/About/Intro";
import Our from "../../Components/About/our";
import WhyUs from "../../Components/Home/WhyUs/WhyUs";
import Footer from "../../Components/Home/Footer";

const CityAbout = () => {
  const { city } = useParams();

  // Format city name (hyphen → space, capitalize)
  const cityName = city
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const baseUrl = "https://www.shriramfastners.in";

  return (
    <>
      {/* ================= CITY ABOUT SEO ================= */}
      <Helmet>
        {/* 🔑 META TITLE */}
        <title>
          About Shri Ram Fastners in {cityName} | Nuts & Bolts Manufacturer
        </title>

        {/* 🧠 META DESCRIPTION */}
        <meta
          name="description"
          content={`Know about Shri Ram Fastners – trusted manufacturer and supplier of nuts, bolts, anchor bolts, studs, threaded rods, washers and industrial fasteners in ${cityName}. Serving construction, automotive & industrial sectors.`}
        />

        {/* 🔍 KEYWORDS */}
        <meta
          name="keywords"
          content={`about shri ram fastners ${cityName}, nuts bolts manufacturer ${cityName}, fasteners supplier ${cityName}, anchor bolts ${cityName}, industrial fasteners near me ${cityName}`}
        />

        {/* 🌍 CANONICAL */}
        <link
          rel="canonical"
          href={`${baseUrl}/${city}/about`}
        />

        {/* 🌐 OPEN GRAPH */}
        <meta
          property="og:title"
          content={`About Shri Ram Fastners in ${cityName}`}
        />
        <meta
          property="og:description"
          content={`Learn about Shri Ram Fastners – industrial fasteners manufacturer serving ${cityName} with quality and reliability.`}
        />
        <meta
          property="og:url"
          content={`${baseUrl}/${city}/about`}
        />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`About Fasteners Supplier in ${cityName}`}
        />
        <meta
          name="twitter:description"
          content={`Trusted nuts & bolts manufacturer supplying industrial fasteners in ${cityName}.`}
        />

        {/* 🧩 LOCAL BUSINESS / ORGANIZATION SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shri Ram Fastners",
            "url": "${baseUrl}/${city}/about",
            "logo": "${baseUrl}/logo.png",
            "description": "Manufacturer and supplier of nuts, bolts, anchor bolts and industrial fasteners in ${cityName}",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${cityName}",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "${cityName}"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9463616466",
              "contactType": "sales",
              "areaServed": "IN"
            },
            "knowsAbout": [
              "Industrial Fasteners",
              "Nuts and Bolts",
              "Anchor Bolts",
              "Automotive Fasteners",
              "Construction Hardware"
            ]
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      {/* ================= PAGE CONTENT (SAME AS ABOUT) ================= */}
      <Intro />
      <Our />
      <WhyUs />
      <Footer />
    </>
  );
};

export default CityAbout;
