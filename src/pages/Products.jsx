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
  {/* 🔑 META TITLE (ALL PRODUCTS + PAN INDIA) */}
  <title>
    Nuts Anchor Bolts Studs Threaded Rods | Fasteners Supplier India – Shri Ram Fastners
  </title>

  {/* 🧠 META DESCRIPTION (14 PRODUCTS + TOP CITIES + BUYER INTENT) */}
  <meta
    name="description"
    content="Buy nuts, anchor bolts, studs, threaded rods, washers, U-bolts, screws, rivets, pins, nails, staples, key stock, cables, retaining rings from Shri Ram Fastners. Industrial fasteners supplier serving Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Pune, Ahmedabad, Ludhiana, Kolkata, Jaipur, Surat, Nagpur, Indore & 50+ cities."
  />

  {/* 🔍 KEYWORDS (ALL 14 PRODUCTS + CITIES – CONVERSION FOCUSED) */}
  <meta
    name="keywords"
    content="
    nuts anchor bolts manufacturer india, studs threaded rods supplier, washers U-bolts screws,
    rivets pins nails staples, key stock cables retaining rings, industrial fasteners delhi mumbai,
    nuts bolts bengaluru chennai hyderabad pune ahmedabad ludhiana, fasteners jaipur surat nagpur indore,
    anchor bolts supplier navi mumbai coimbatore vadodara ghaziabad, buy threaded rods online india
    "
  />

  {/* 🌍 CANONICAL */}
  <link rel="canonical" href="https://www.shriramfastners.in/products" />

  {/* 🌐 OPEN GRAPH */}
  <meta property="og:title" content="Industrial Fasteners Catalog | Nuts Bolts Anchors India" />
  <meta
    property="og:description"
    content="Complete range: nuts, anchor bolts, studs, U-bolts, screws, rivets for 50+ cities. Fast delivery."
  />
  <meta property="og:url" content="https://www.shriramfastners.in/products" />
  <meta property="og:type" content="website" />

  {/* 🐦 TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fasteners Products: Nuts Bolts Anchors | Shri Ram Fastners" />
  <meta name="twitter:description" content="Nuts, studs, threaded rods, U-bolts, rivets across India." />

  {/* 🧩 ENHANCED COLLECTION + PRODUCT SCHEMA (RICH SNIPPETS) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Industrial Fasteners Products - Shri Ram Fastners",
      "url": "https://www.shriramfastners.in/products",
      "description": "Complete catalog of nuts, anchor bolts, studs, threaded rods, washers, U-bolts, screws, rivets, pins, nails, staples, key stock, cables, retaining rings",
      "provider": {
        "@type": "Organization",
        "name": "Shri Ram Fastners",
        "url": "https://www.shriramfastners.in/",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ludhiana",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        }
      },
      "mainEntity": [
        {"@type": "Product", "name": "Anchor Bolts", "category": "Fasteners"},
        {"@type": "Product", "name": "Nuts", "category": "Fasteners"},
        {"@type": "Product", "name": "Studs", "category": "Fasteners"},
        {"@type": "Product", "name": "Threaded Rods", "category": "Fasteners"},
        {"@type": "Product", "name": "Washers", "category": "Fasteners"},
        {"@type": "Product", "name": "U-Bolts", "category": "Fasteners"},
        {"@type": "Product", "name": "Screws", "category": "Fasteners"},
        {"@type": "Product", "name": "Rivets", "category": "Fasteners"},
        {"@type": "Product", "name": "Pins", "category": "Fasteners"},
        {"@type": "Product", "name": "Nails", "category": "Fasteners"},
        {"@type": "Product", "name": "Staples", "category": "Fasteners"},
        {"@type": "Product", "name": "Key Stock", "category": "Fasteners"},
        {"@type": "Product", "name": "Cables", "category": "Fasteners"},
        {"@type": "Product", "name": "Retaining Rings", "category": "Fasteners"}
      ],
      "areaServed": ["Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Ludhiana", "Kolkata", "Jaipur", "Surat", "Nagpur", "Indore"]
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
