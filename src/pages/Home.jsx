import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Home/Hero/Hero";
import Featured from "../Components/Home/Featured/Featured";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <>
      {/* ================= ADVANCED INDIA SEO ================= */}
      <Helmet>
        {/* 🔑 META TITLE (PAN INDIA + BUYER INTENT) */}
        <title>
          Nuts & Bolts Manufacturer in India | Industrial Fasteners Supplier – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION (CITIES + PRODUCTS + TRUST) */}
        <meta
          name="description"
          content="Shri Ram Fastners is a leading nuts and bolts manufacturer in India. We supply industrial fasteners, bolts, nuts, washers, anchors, screws, studs and threaded rods across Delhi, Mumbai, Pune, Chennai, Bengaluru, Hyderabad, Ahmedabad, Ludhiana and 500+ cities."
        />

        {/* 🔍 KEYWORDS (SUPPORTIVE – NOT SPAMMY) */}
        <meta
          name="keywords"
          content="
          nuts and bolts manufacturer in india,
          industrial fasteners supplier india,
          nut bolt supplier near me,
          bolts manufacturer delhi,
          fasteners supplier mumbai,
          nuts bolts pune,
          industrial fasteners chennai,
          bolts supplier bengaluru,
          fasteners manufacturer ludhiana,
          anchors screws washers india
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/" />

        {/* 🌐 OPEN GRAPH (SOCIAL + GOOGLE DISCOVERY) */}
        <meta property="og:title" content="Nuts & Bolts Manufacturer in India – Shri Ram Fastners" />
        <meta
          property="og:description"
          content="Manufacturer and supplier of industrial fasteners, nuts, bolts, anchors, screws and washers across major cities in India."
        />
        <meta property="og:url" content="https://www.shriramfastners.in/" />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuts & Bolts Manufacturer in India – Shri Ram Fastners" />
        <meta
          name="twitter:description"
          content="PAN India supplier of industrial fasteners including nuts, bolts, anchors, screws and washers."
        />

        {/* 🧩 ORGANIZATION + LOCAL BUSINESS SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shri Ram Fastners",
            "url": "https://www.shriramfastners.in/",
            "logo": "https://www.shriramfastners.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9463616466",
              "contactType": "sales",
              "areaServed": "IN"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ludhiana",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            },
            "areaServed": [
              "Delhi",
              "Mumbai",
              "Pune",
              "Chennai",
              "Bengaluru",
              "Hyderabad",
              "Ahmedabad",
              "Ludhiana"
            ],
            "description": "Leading manufacturer and supplier of industrial fasteners, nuts and bolts across India"
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      {/* PAGE CONTENT */}
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
