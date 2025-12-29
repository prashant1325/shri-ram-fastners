import React from "react";
import { Helmet } from "react-helmet-async";

function Seo() {
  return (
    <Helmet>
      {/* 🔑 GLOBAL META TITLE */}
      <title>
        Nuts & Bolts Manufacturer in India | Industrial Fasteners Supplier – Shri Ram Fastners
      </title>

      {/* 🧠 GLOBAL META DESCRIPTION */}
      <meta
        name="description"
        content="Shri Ram Fastners is a trusted industrial fasteners manufacturer in India. We supply nuts, bolts, washers, anchors, screws, studs and threaded rods across Delhi, Mumbai, Pune, Chennai, Bengaluru, Hyderabad, Ahmedabad, Ludhiana and 500+ cities."
      />

      {/* 🌍 CANONICAL URL */}
      <link rel="canonical" href="https://www.shriramfastners.in/" />

      {/* 🌐 OPEN GRAPH (DEFAULT) */}
      <meta property="og:title" content="Nuts & Bolts Manufacturer in India – Shri Ram Fastners" />
      <meta
        property="og:description"
        content="Leading manufacturer and supplier of industrial fasteners, nuts and bolts across India."
      />
      <meta property="og:url" content="https://www.shriramfastners.in/" />
      <meta property="og:type" content="website" />

      {/* 🐦 TWITTER DEFAULT */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Nuts & Bolts Manufacturer in India – Shri Ram Fastners"
      />
      <meta
        name="twitter:description"
        content="PAN India supplier of industrial fasteners including nuts, bolts, anchors, screws and washers."
      />

      {/* 🧩 ORGANIZATION SCHEMA (GLOBAL AUTHORITY) */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Shri Ram Fastners",
          "url": "https://www.shriramfastners.in/",
          "logo": "https://www.shriramfastners.in/logo.png",
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
  );
}

export default Seo;
