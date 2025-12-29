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
  {/* 🔑 META TITLE (SERVICES + PRODUCTS + PAN INDIA) */}
  <title>
    Fasteners Manufacturing Supply Services | Nuts Bolts Anchors India – Shri Ram Fastners
  </title>

  {/* 🧠 META DESCRIPTION (SERVICES + PRODUCTS + 50 CITIES + INDUSTRIES) */}
  <meta
    name="description"
    content="Industrial fasteners manufacturing, bulk supply, custom fabrication services for nuts, anchor bolts, studs, threaded rods, U-bolts, washers serving automotive, construction, railway industries in Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Pune, Ahmedabad, Ludhiana, Kolkata, Jaipur, Surat, Nagpur, Indore & 50+ cities."
  />

  {/* 🔍 KEYWORDS (SERVICES + PRODUCTS + INDUSTRIES + CITIES) */}
  <meta
    name="keywords"
    content="
    fasteners manufacturing services india, bulk nuts bolts supply, custom anchor bolts fabrication,
    threaded rods U-bolts production, industrial washers supplier, automotive fasteners services,
    construction rivets manufacturing, railway screws supplier, solar fasteners delhi mumbai bengaluru,
    fasteners services chennai hyderabad pune ahmedabad ludhiana jaipur surat nagpur indore coimbatore
    "
  />

  {/* 🌍 CANONICAL */}
  <link rel="canonical" href="https://www.shriramfastners.in/services" />

  {/* 🌐 OPEN GRAPH */}
  <meta property="og:title" content="Fasteners Manufacturing & Supply Services PAN India" />
  <meta
    property="og:description"
    content="Bulk supply, custom manufacturing of nuts, anchor bolts, studs, U-bolts for 50+ cities."
  />
  <meta property="og:url" content="https://www.shriramfastners.in/services" />
  <meta property="og:type" content="website" />

  {/* 🐦 TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Industrial Fasteners Services | Shri Ram Fastners" />
  <meta name="twitter:description" content="Manufacturing, bulk supply services across India." />

  {/* 🧩 MULTIPLE SERVICE + ORGANIZATION SCHEMA (RICH RESULTS) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Industrial Fasteners Manufacturing & Supply",
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
      "areaServed": [
        "Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Ludhiana",
        "Kolkata", "Jaipur", "Surat", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam",
        "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Lucknow", "Agra", "Faridabad",
        "Meerut", "Nashik", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad",
        "Dhanbad", "Amritsar", "Navi Mumbai", "Prayagraj", "Howrah", "Ranchi", "Gwalior",
        "Jabalpur", "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Chandigarh",
        "Guwahati", "Solapur", "Hubli-Dharwad", "Mysore", "Tiruppur", "Salem"
      ],
      "description": "Bulk manufacturing and supply services for nuts, anchor bolts, studs, threaded rods, U-bolts, washers, screws, rivets for automotive, construction, railway industries",
      "offers": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Bulk Fasteners Supply"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Fasteners Manufacturing"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Industrial Fasteners Fabrication"}}
      ]
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
