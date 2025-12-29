import React from "react";
import { Helmet } from "react-helmet-async";
import Ser from "../Components/Services/Ser";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Services = () => {
  return (
    <>
      {/* ================= ADVANCED SERVICES PAGE SEO ================= */}
      <Helmet>
        {/* 🔑 META TITLE (SERVICE + PAN INDIA INTENT) */}
        <title>
          Industrial Fasteners Manufacturing & Supply Services in India | Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION (SERVICES + INDUSTRIES + INDIA) */}
        <meta
          name="description"
          content="Shri Ram Fastners provides industrial fasteners manufacturing, bulk supply and custom fastening services across India. Serving automotive, railway, solar, power, construction and infrastructure industries with high tensile, MS and stainless steel fasteners."
        />

        {/* 🔍 KEYWORDS (SUPPORTIVE – GOOGLE SAFE) */}
        <meta
          name="keywords"
          content="
          industrial fasteners services india,
          fasteners manufacturing services,
          bulk fasteners supplier india,
          custom fasteners manufacturer india,
          automotive fasteners supplier,
          railway fasteners manufacturer,
          solar fasteners supplier india,
          construction fasteners manufacturer,
          high tensile bolts supplier india
          "
        />

        {/* 🌍 CANONICAL */}
        <link
          rel="canonical"
          href="https://www.shriramfastners.in/services"
        />

        {/* 🌐 OPEN GRAPH */}
        <meta
          property="og:title"
          content="Industrial Fasteners Manufacturing & Supply Services in India – Shri Ram Fastners"
        />
        <meta
          property="og:description"
          content="Trusted provider of industrial fasteners manufacturing, bulk supply and custom fastening solutions across India."
        />
        <meta
          property="og:url"
          content="https://www.shriramfastners.in/services"
        />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Industrial Fasteners Manufacturing & Supply Services in India"
        />
        <meta
          name="twitter:description"
          content="PAN India fasteners manufacturing and supply services for automotive, railway, solar and infrastructure industries."
        />

        {/* 🧩 SERVICE + ORGANIZATION SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Industrial Fasteners Manufacturing & Supply Services",
            "provider": {
              "@type": "Organization",
              "name": "Shri Ram Fastners",
              "url": "https://www.shriramfastners.in/"
            },
            "areaServed": "IN",
            "description": "Manufacturing, bulk supply and custom industrial fasteners services across India"
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      {/* ================= PAGE CONTENT ================= */}
      <Ser />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Services;
