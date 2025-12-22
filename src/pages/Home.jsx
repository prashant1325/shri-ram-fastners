import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Home/Hero/Hero";
import Featured from "../Components/Home/Featured/Featured";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <>
      {/* ================= ULTRA ADVANCED HOME SEO ================= */}
      <Helmet>
        {/* 🔑 TITLE (CLEAN + HIGH BUYER INTENT) */}
        <title>
          Nuts & Bolts Manufacturer in Ludhiana | Industrial Fasteners Supplier Punjab – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION (CTR + TRUST + LOCAL) */}
        <meta
          name="description"
          content="Shri Ram Fastners is a trusted nuts and bolts manufacturer in Ludhiana, Punjab. We supply industrial fasteners, high tensile bolts, MS & SS fasteners for automotive, railway, solar and infrastructure industries across Punjab."
        />

        {/* 🔍 KEYWORDS (SUPPORTIVE ONLY – SAFE LENGTH) */}
        <meta
          name="keywords"
          content="
          nuts and bolts manufacturer in ludhiana,
          nuts bolts supplier ludhiana,
          nut bolt supplier near me,
          industrial fasteners manufacturer punjab,
          high tensile bolts manufacturer ludhiana,
          ms nuts bolts supplier punjab,
          stainless steel fasteners ludhiana
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/" />

        {/* 🌐 OPEN GRAPH */}
        <meta property="og:title" content="Nuts & Bolts Manufacturer in Ludhiana – Shri Ram Fastners" />
        <meta
          property="og:description"
          content="Leading manufacturer and supplier of industrial fasteners, nuts and bolts in Ludhiana, Punjab."
        />
        <meta property="og:url" content="https://www.shriramfastners.in/" />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuts & Bolts Manufacturer in Ludhiana – Shri Ram Fastners" />
        <meta
          name="twitter:description"
          content="Industrial fasteners, nuts and bolts manufactured and supplied across Punjab."
        />

        {/* 🧩 LOCAL BUSINESS SCHEMA (NEAR-ME SIGNAL) */}
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
            "areaServed": "Punjab",
            "description": "Manufacturer and supplier of industrial fasteners, nuts and bolts in Ludhiana, Punjab"
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

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
