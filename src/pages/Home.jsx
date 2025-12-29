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
  {/* 🔑 META TITLE (PAN INDIA + KEY PRODUCTS) */}
  <title>
    Nuts Bolts Anchor Bolts Manufacturer India | Fasteners Supplier – Shri Ram Fastners
  </title>

  {/* 🧠 META DESCRIPTION (50 CITIES + PRODUCTS) */}
  <meta
    name="description"
    content="Leading nuts bolts manufacturer supplying anchor bolts, studs, threaded rods, washers, U-bolts, screws, rivets across Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Pune, Ahmedabad, Ludhiana, Kolkata, Jaipur, Surat, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Pimpri-Chinchwad, Patna, Vadodara, Ghaziabad, Lucknow, Agra, Faridabad, Meerut, Nashik, Kalyan-Dombivli, Vasai-Virar, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Navi Mumbai, Prayagraj, Howrah, Ranchi, Gwalior, Jabalpur, Coimbatore, Vijayawada, Jodhpur, Madurai, Raipur, Chandigarh, Guwahati, Solapur, Hubli-Dharwad, Mysore – Fast delivery PAN India."
  />

  {/* 🔍 KEYWORDS (PRODUCTS + 50 CITIES – NON-SPAMMY) */}
  <meta
    name="keywords"
    content="nuts bolts manufacturer india, anchor bolts supplier, studs threaded rods, washers U-bolts screws rivets, fasteners Delhi Mumbai Bengaluru Chennai Hyderabad Pune Ahmedabad Ludhiana Kolkata Jaipur Surat Nagpur Indore Thane Bhopal Visakhapatnam Pimpri Patna Vadodara Ghaziabad Lucknow Agra Faridabad Meerut Nashik Kalyan Varanasi Aurangabad Amritsar Navi Mumbai Ranchi Gwalior Jabalpur Coimbatore Vijayawada Jodhpur Madurai Raipur Chandigarh Guwahati, nut bolt near me India"
  />

  {/* 🌍 CANONICAL */}
  <link rel="canonical" href="https://www.shriramfastners.in/" />

  {/* 🌐 OPEN GRAPH */}
  <meta property="og:title" content="Nuts Bolts Fasteners Supplier PAN India – Shri Ram Fastners" />
  <meta
    property="og:description"
    content="Industrial fasteners: nuts, anchor bolts, studs, U-bolts for 50+ cities including Delhi, Mumbai, Bengaluru, Chennai, Ludhiana."
  />
  <meta property="og:url" content="https://www.shriramfastners.in/" />
  <meta property="og:type" content="website" />

  {/* 🐦 TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Nuts Bolts Supplier India – Shri Ram Fastners" />
  <meta name="twitter:description" content="Anchor bolts, studs, threaded rods across 50 industrial cities." />

  {/* 🧩 EXPANDED SCHEMA (ORGANIZATION + 50 CITIES) */}
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
        "Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Ludhiana",
        "Kolkata", "Jaipur", "Surat", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam",
        "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Lucknow", "Agra", "Faridabad",
        "Meerut", "Nashik", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad",
        "Dhanbad", "Amritsar", "Navi Mumbai", "Prayagraj", "Howrah", "Ranchi", "Gwalior",
        "Jabalpur", "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Chandigarh",
        "Guwahati", "Solapur", "Hubli-Dharwad", "Mysore", "Tiruppur", "Salem"
      ],
      "description": "PAN India manufacturer of nuts, bolts, anchor bolts, studs, threaded rods, washers for industrial applications"
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
