import React from "react";
import { Helmet } from "react-helmet-async";
import OurCar from "../Components/Product/OurCar";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Products = () => {
  return (
    <>
      {/* ================= ADVANCED PRODUCTS PAGE SEO ================= */}
      <Helmet>
        {/* 🔑 META TITLE (PAN INDIA + PRODUCT INTENT) */}
        <title>
          Industrial Fasteners Manufacturer in India | Nuts, Bolts & Anchors – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION (PRODUCT RANGE + CITIES + BUYER INTENT) */}
        <meta
          name="description"
          content="Shri Ram Fastners is a leading industrial fasteners manufacturer in India. We manufacture and supply nuts, bolts, washers, anchors, screws, studs and threaded rods across Delhi, Mumbai, Pune, Chennai, Bengaluru, Hyderabad, Ahmedabad, Ludhiana and 500+ cities."
        />

        {/* 🔍 KEYWORDS (SUPPORTIVE – GOOGLE SAFE) */}
        <meta
          name="keywords"
          content="
          industrial fasteners manufacturer india,
          nuts and bolts manufacturer india,
          bolts supplier india,
          fasteners supplier delhi,
          nuts bolts mumbai,
          industrial fasteners pune,
          anchors screws washers india,
          high tensile bolts manufacturer india,
          stainless steel fasteners supplier,
          custom fasteners manufacturer india
          "
        />

        {/* 🌍 CANONICAL */}
        <link
          rel="canonical"
          href="https://www.shriramfastners.in/products"
        />

        {/* 🌐 OPEN GRAPH */}
        <meta
          property="og:title"
          content="Industrial Fasteners Manufacturer in India – Shri Ram Fastners"
        />
        <meta
          property="og:description"
          content="Manufacturer and supplier of nuts, bolts, anchors, screws, washers and industrial fasteners across India."
        />
        <meta
          property="og:url"
          content="https://www.shriramfastners.in/products"
        />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Industrial Fasteners Manufacturer in India – Shri Ram Fastners"
        />
        <meta
          name="twitter:description"
          content="PAN India supplier of nuts, bolts, anchors, screws, washers and industrial fasteners."
        />

        {/* 🧩 PRODUCT COLLECTION SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Industrial Fasteners Products",
            "url": "https://www.shriramfastners.in/products",
            "description": "Collection of industrial fasteners including nuts, bolts, washers, anchors, screws and threaded rods manufactured by Shri Ram Fastners",
            "provider": {
              "@type": "Organization",
              "name": "Shri Ram Fastners",
              "url": "https://www.shriramfastners.in/"
            }
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      {/* ================= PAGE CONTENT ================= */}
      <OurCar />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Products;
