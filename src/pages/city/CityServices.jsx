import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Ser from "../../Components/Services/Ser";
import WhyUs from "../../Components/Home/WhyUs/WhyUs";
import Footer from "../../Components/Home/Footer";

const CityServices = () => {
  const { city } = useParams();

  // Format city name (hyphen → space)
  const cityName = city
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const baseUrl = "https://www.shriramfastners.in";

  return (
    <>
      {/* ================= CITY SERVICES SEO ================= */}
      <Helmet>
        {/* 🔑 META TITLE */}
        <title>
          Fasteners Manufacturing & Supply Services in {cityName} | Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION */}
        <meta
          name="description"
          content={`Industrial fasteners manufacturing, bulk supply and custom fabrication services for nuts, anchor bolts, studs, threaded rods, U-bolts, washers in ${cityName}. Serving construction, automotive & infrastructure industries.`}
        />

        {/* 🔍 KEYWORDS */}
        <meta
          name="keywords"
          content={`fasteners services ${cityName}, bulk nuts bolts supply ${cityName}, custom anchor bolts ${cityName}, industrial fasteners manufacturer ${cityName}, fasteners fabrication near me ${cityName}`}
        />

        {/* 🌍 CANONICAL */}
        <link
          rel="canonical"
          href={`${baseUrl}/${city}/services`}
        />

        {/* 🌐 OPEN GRAPH */}
        <meta
          property="og:title"
          content={`Fasteners Services in ${cityName} – Shri Ram Fastners`}
        />
        <meta
          property="og:description"
          content={`Bulk supply and custom manufacturing of industrial fasteners in ${cityName}.`}
        />
        <meta
          property="og:url"
          content={`${baseUrl}/${city}/services`}
        />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Fasteners Services in ${cityName}`}
        />
        <meta
          name="twitter:description"
          content={`Industrial fasteners manufacturing & supply services in ${cityName}.`}
        />

        {/* 🧩 SERVICE SCHEMA (CITY LEVEL) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Industrial Fasteners Manufacturing & Supply",
            "provider": {
              "@type": "Organization",
              "name": "Shri Ram Fastners",
              "url": "${baseUrl}/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "${cityName}",
                "addressCountry": "IN"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "${cityName}"
            },
            "description": "Bulk supply, custom manufacturing and fabrication of nuts, anchor bolts, studs, threaded rods, U-bolts, washers and industrial fasteners in ${cityName}",
            "offers": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bulk Fasteners Supply" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Fasteners Manufacturing" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Fasteners Fabrication" } }
            ]
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      {/* ================= PAGE CONTENT (SAME AS SERVICES) ================= */}
      <Ser />
      <WhyUs />
      <Footer />
    </>
  );
};

export default CityServices;
