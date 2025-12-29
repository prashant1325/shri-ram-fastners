import React from "react";
import { Helmet } from "react-helmet-async";
import Intro from "../Components/About/Intro";
import Our from "../Components/About/our";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const About = () => {
  return (
    <>
      {/* ================= ADVANCED ABOUT PAGE SEO ================= */}
      <Helmet>
        {/* 🔑 META TITLE (PAN INDIA + BRAND AUTHORITY) */}
        <title>
          About Shri Ram Fastners | Leading Nuts & Bolts Manufacturer in India
        </title>

        {/* 🧠 META DESCRIPTION (TRUST + INDUSTRIES + PRODUCTS) */}
        <meta
          name="description"
          content="Shri Ram Fastners is a leading nuts and bolts manufacturer in India, based in Ludhiana, Punjab. We specialize in industrial fasteners including bolts, nuts, washers, anchors, screws, studs and threaded rods for automotive, railway, solar, construction and infrastructure industries."
        />

        {/* 🔍 KEYWORDS (SUPPORTIVE – GOOGLE SAFE) */}
        <meta
          name="keywords"
          content="
          about shri ram fastners,
          nuts and bolts manufacturer in india,
          industrial fasteners manufacturer punjab,
          fasteners manufacturing company india,
          high tensile bolts manufacturer,
          automotive fasteners india,
          railway fasteners supplier,
          construction fasteners manufacturer,
          industrial bolts nuts supplier india
          "
        />

        {/* 🌍 CANONICAL URL */}
        <link
          rel="canonical"
          href="https://www.shriramfastners.in/about"
        />

        {/* 🌐 OPEN GRAPH (SOCIAL + GOOGLE DISCOVERY) */}
        <meta
          property="og:title"
          content="About Shri Ram Fastners | Industrial Fasteners Manufacturer in India"
        />
        <meta
          property="og:description"
          content="Trusted manufacturer and supplier of industrial fasteners, nuts and bolts across India."
        />
        <meta
          property="og:url"
          content="https://www.shriramfastners.in/about"
        />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Shri Ram Fastners | Nuts & Bolts Manufacturer in India"
        />
        <meta
          name="twitter:description"
          content="Leading manufacturer of industrial fasteners, nuts and bolts serving PAN India."
        />

        {/* 🧩 ORGANIZATION SCHEMA (AUTHORITY SIGNAL) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shri Ram Fastners",
            "url": "https://www.shriramfastners.in/",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ludhiana",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            },
            "areaServed": "IN",
            "description": "Manufacturer and supplier of industrial fasteners, nuts and bolts across India"
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      {/* ================= PAGE CONTENT ================= */}
      <Intro />
      <Our />
      <WhyUs />
      <Footer />
    </>
  );
};

export default About;
