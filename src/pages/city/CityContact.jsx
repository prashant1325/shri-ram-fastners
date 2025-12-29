import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Home/Footer";
import { cities } from "../../data/cities";

const CityContact = () => {
  const { city } = useParams();

  // 🔒 City validation
  if (!cities.includes(city)) {
    return <Navigate to="/" replace />;
  }

  // Format city name
  const cityName = city
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const baseUrl = "https://www.shriramfastners.in";

  return (
    <>
      {/* 🔥 CITY CONTACT PAGE SEO */}
      <Helmet>
        {/* 🔑 TITLE */}
        <title>
          Contact Nuts & Bolts Manufacturer in {cityName} | Fasteners Supplier Near Me – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION */}
        <meta
          name="description"
          content={`Contact Shri Ram Fastners, a trusted nuts and bolts manufacturer and industrial fasteners supplier in ${cityName}. Call us for bulk orders, custom fasteners and fast delivery.`}
        />

        {/* 🔍 KEYWORDS */}
        <meta
          name="keywords"
          content={`
            contact nuts bolts manufacturer in ${cityName},
            fasteners supplier near me ${cityName},
            industrial fasteners contact ${cityName},
            nut bolt dealer ${cityName},
            custom fasteners manufacturer ${cityName}
          `}
        />

        {/* 🌍 CANONICAL */}
        <link
          rel="canonical"
          href={`${baseUrl}/${city}/contact`}
        />

        {/* 🌐 OPEN GRAPH */}
        <meta
          property="og:title"
          content={`Contact Fasteners Supplier in ${cityName} – Shri Ram Fastners`}
        />
        <meta
          property="og:description"
          content={`Get in touch with Shri Ram Fastners for nuts, bolts and industrial fasteners supply in ${cityName}.`}
        />
        <meta
          property="og:url"
          content={`${baseUrl}/${city}/contact`}
        />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Contact Fasteners Supplier in ${cityName}`}
        />
        <meta
          name="twitter:description"
          content={`Industrial fasteners manufacturer & supplier serving ${cityName}.`}
        />

        {/* 🧩 LOCAL BUSINESS + CONTACT SCHEMA (CITY LEVEL) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shri Ram Fastners",
            "url": "${baseUrl}/${city}/contact",
            "description": "Contact page for nuts, bolts and industrial fasteners manufacturer in ${cityName}",
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
              "contactType": "sales",
              "telephone": "+91-9463616466",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          }
          `}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT (SAME AS PHONE PAGE) ================= */}
      <Contact />
      <Footer />
    </>
  );
};

export default CityContact;
