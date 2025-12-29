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
  {/* 🔑 META TITLE (AUTHORITY + KEY PRODUCTS + PAN INDIA) */}
  <title>
    About Shri Ram Fastners | Nuts Bolts Anchor Bolts Manufacturer India
  </title>

  {/* 🧠 META DESCRIPTION (TRUST + 50 CITIES + INDUSTRIES) */}
  <meta
    name="description"
    content="Learn about Shri Ram Fastners, Ludhiana-based manufacturer of nuts, bolts, anchor bolts, studs, threaded rods, washers, U-bolts serving Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Pune, Ahmedabad, Ludhiana, Kolkata, Jaipur, Surat, Nagpur, Indore & 50+ cities for automotive, construction, railway industries."
  />

  {/* 🔍 KEYWORDS (BRAND + PRODUCTS + INDUSTRIES + CITIES) */}
  <meta
    name="keywords"
    content="
    about shri ram fastners, nuts bolts manufacturer india, anchor bolts supplier ludhiana,
    industrial fasteners punjab, high tensile bolts automotive, railway fasteners supplier,
    construction nuts washers, studs threaded rods manufacturer, fasteners delhi mumbai bengaluru chennai pune,
    industrial bolts supplier jaipur surat nagpur indore, U-bolts screws rivets india
    "
  />

  {/* 🌍 CANONICAL */}
  <link rel="canonical" href="https://www.shriramfastners.in/about" />

  {/* 🌐 OPEN GRAPH */}
  <meta property="og:title" content="About Shri Ram Fastners | Industrial Fasteners India" />
  <meta
    property="og:description"
    content="Trusted nuts, bolts, anchor bolts manufacturer serving 50+ cities including Delhi, Mumbai, Ludhiana."
  />
  <meta property="og:url" content="https://www.shriramfastners.in/about" />
  <meta property="og:type" content="website" />

  {/* 🐦 TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Shri Ram Fastners | Nuts Bolts India" />
  <meta name="twitter:description" content="Leading fasteners manufacturer for automotive, construction across India." />

  {/* 🧩 ENHANCED ORGANIZATION SCHEMA (50 CITIES + EXPERTISE) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Shri Ram Fastners",
      "url": "https://www.shriramfastners.in/",
      "logo": "https://www.shriramfastners.in/logo.png",
      "description": "Leading manufacturer of industrial fasteners including nuts, anchor bolts, studs, threaded rods, washers, U-bolts for automotive, railway, construction industries",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ludhiana",
        "addressLocality": "Ludhiana",
        "addressRegion": "Punjab",
        "postalCode": "141001",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9463616466",
        "contactType": "sales"
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
      "knowsAbout": ["Industrial Fasteners", "Nuts and Bolts", "Anchor Bolts", "Automotive Fasteners", "Construction Hardware"],
      "founder": {
        "@type": "Person",
        "name": "Shri Ram Fastners Team"
      }
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
