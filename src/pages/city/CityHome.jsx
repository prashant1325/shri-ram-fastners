import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Hero from "../../Components/Home/Hero/Hero";
import Featured from "../../Components/Home/Featured/Featured";
import WhyUs from "../../Components/Home/WhyUs/WhyUs";
import Footer from "../../Components/Home/Footer";

const CityHome = () => {
  const { city } = useParams();

  // Format city name (hyphen → space, capitalize)
  const cityName = city
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const baseUrl = "https://www.shriramfastners.in";

  return (
    <>
      {/* ================= CITY SEO ================= */}
      <Helmet>
        {/* 🔑 META TITLE */}
        <title>
          Nuts & Bolts Manufacturer in {cityName} | Fasteners Supplier – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION */}
        <meta
          name="description"
          content={`Leading nuts, bolts, anchor bolts, studs, threaded rods, washers, U-bolts manufacturer & supplier in ${cityName}. Wholesale & bulk industrial fasteners with fast delivery.`}
        />

        {/* 🔍 KEYWORDS */}
        <meta
          name="keywords"
          content={`nuts bolts manufacturer in ${cityName}, fasteners supplier ${cityName}, anchor bolts ${cityName}, nut bolt near me ${cityName}, industrial fasteners ${cityName}`}
        />

        {/* 🌍 CANONICAL */}
        <link
          rel="canonical"
          href={`${baseUrl}/${city}`}
        />

        {/* 🌐 OPEN GRAPH */}
        <meta
          property="og:title"
          content={`Fasteners Manufacturer in ${cityName} – Shri Ram Fastners`}
        />
        <meta
          property="og:description"
          content={`Trusted supplier of nuts, bolts & industrial fasteners in ${cityName}. Bulk & wholesale supply available.`}
        />
        <meta
          property="og:url"
          content={`${baseUrl}/${city}`}
        />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Nuts & Bolts Supplier in ${cityName}`}
        />
        <meta
          name="twitter:description"
          content={`Industrial fasteners supplier serving ${cityName} with PAN India delivery.`}
        />

        {/* 🧩 LOCAL BUSINESS SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shri Ram Fastners",
            "url": "${baseUrl}/${city}",
            "logo": "${baseUrl}/logo.png",
            "description": "Manufacturer and supplier of nuts, bolts, anchor bolts, studs and industrial fasteners in ${cityName}",
            "areaServed": {
              "@type": "City",
              "name": "${cityName}"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${cityName}",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9463616466",
              "contactType": "sales",
              "areaServed": "IN"
            }
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      {/* PAGE CONTENT (SAME AS HOME) */}
      <div>
        <Hero />
        <Featured />
        <WhyUs />
        <Footer />
      </div>
    </>
  );
};

export default CityHome;
