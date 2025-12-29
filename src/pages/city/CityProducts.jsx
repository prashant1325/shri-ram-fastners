import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import OurCar from "../../Components/Product/OurCar";
import WhyUs from "../../Components/Home/WhyUs/WhyUs";
import Footer from "../../Components/Home/Footer";

const CityProducts = () => {
  const { city } = useParams();

  // Format city name (hyphen → space)
  const cityName = city
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const baseUrl = "https://www.shriramfastners.in";

  return (
    <>
      {/* ================= CITY PRODUCTS SEO ================= */}
      <Helmet>
        {/* 🔑 META TITLE */}
        <title>
          Nuts Bolts Anchor Bolts in {cityName} | Fasteners Supplier – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION */}
        <meta
          name="description"
          content={`Buy nuts, bolts, anchor bolts, studs, threaded rods, washers, U-bolts, screws, rivets and industrial fasteners in ${cityName}. Trusted fasteners manufacturer & wholesale supplier with fast delivery.`}
        />

        {/* 🔍 KEYWORDS */}
        <meta
          name="keywords"
          content={`nuts bolts supplier ${cityName}, anchor bolts ${cityName}, studs threaded rods ${cityName}, washers U-bolts screws ${cityName}, industrial fasteners near me ${cityName}`}
        />

        {/* 🌍 CANONICAL */}
        <link
          rel="canonical"
          href={`${baseUrl}/${city}/products`}
        />

        {/* 🌐 OPEN GRAPH */}
        <meta
          property="og:title"
          content={`Fasteners Products in ${cityName} – Shri Ram Fastners`}
        />
        <meta
          property="og:description"
          content={`Complete range of nuts, bolts, anchor bolts, studs, threaded rods and fasteners available in ${cityName}.`}
        />
        <meta
          property="og:url"
          content={`${baseUrl}/${city}/products`}
        />
        <meta property="og:type" content="website" />

        {/* 🐦 TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Fasteners Products in ${cityName}`}
        />
        <meta
          name="twitter:description"
          content={`Industrial fasteners supplier serving ${cityName} with PAN India delivery.`}
        />

        {/* 🧩 PRODUCT COLLECTION SCHEMA (CITY LEVEL) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Industrial Fasteners in ${cityName}",
            "url": "${baseUrl}/${city}/products",
            "description": "Buy nuts, bolts, anchor bolts, studs, threaded rods, washers, U-bolts, screws, rivets and industrial fasteners in ${cityName}",
            "provider": {
              "@type": "Organization",
              "name": "Shri Ram Fastners",
              "url": "${baseUrl}/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "${cityName}",
                "addressCountry": "IN"
              }
            },
            "mainEntity": [
              {"@type": "Product", "name": "Nuts"},
              {"@type": "Product", "name": "Bolts"},
              {"@type": "Product", "name": "Anchor Bolts"},
              {"@type": "Product", "name": "Studs"},
              {"@type": "Product", "name": "Threaded Rods"},
              {"@type": "Product", "name": "Washers"},
              {"@type": "Product", "name": "U-Bolts"},
              {"@type": "Product", "name": "Screws"},
              {"@type": "Product", "name": "Rivets"},
              {"@type": "Product", "name": "Pins"},
              {"@type": "Product", "name": "Nails"},
              {"@type": "Product", "name": "Staples"},
              {"@type": "Product", "name": "Key Stock"},
              {"@type": "Product", "name": "Cables"},
              {"@type": "Product", "name": "Retaining Rings"}
            ],
            "areaServed": {
              "@type": "City",
              "name": "${cityName}"
            }
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      {/* ================= PAGE CONTENT (SAME AS PRODUCTS) ================= */}
      <OurCar />
      <WhyUs />
      <Footer />
    </>
  );
};

export default CityProducts;
