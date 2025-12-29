import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Home/Footer";

const Phone = () => {
  return (
    <>
      {/* 🔥 ULTRA-ADVANCED SEO FOR CONTACT PAGE (LOCAL + NEAR ME + TRUST) */}
      <Helmet>
        {/* 🔑 TITLE – CONTACT + LUDHIANA + NEAR ME */}
        <title>
          Contact Nuts & Bolts Manufacturer in Ludhiana | Fasteners Supplier Near Me Punjab – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION – HIGH CONVERSION + LOCAL TRUST */}
        <meta
          name="description"
          content="Contact Shri Ram Fastners, a trusted nuts and bolts manufacturer in Ludhiana, Punjab. Call or visit us for industrial fasteners, high tensile bolts, MS & SS fasteners and custom fastening solutions with fast delivery across Punjab and India."
        />

        {/* 🔍 ADVANCED KEYWORDS – CONTACT + NEAR ME + LOCATION */}
        <meta
          name="keywords"
          content="
          contact nuts and bolts manufacturer in ludhiana,
          nut bolt supplier near me,
          fasteners supplier contact punjab,
          industrial fasteners manufacturer ludhiana contact,
          high tensile bolts supplier punjab,
          custom fasteners manufacturer contact,
          fasteners shop near me
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/phone" />

        {/* 🧩 LOCAL BUSINESS + CONTACT SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Shri Ram Fastners",
            "url": "https://www.shriramfastners.in/phone",
            "description": "Contact page for nuts, bolts and industrial fasteners manufacturer in Ludhiana, Punjab",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ludhiana",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            },
            "areaServed": [
              "Ludhiana",
              "Jalandhar",
              "Amritsar",
              "Patiala",
              "Mohali",
              "Bathinda",
              "Punjab"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Punjabi"]
            }
          }
          `}
        </script>
      </Helmet>

      {/* PAGE CONTENT (UNCHANGED) */}
      <Contact />
      <Footer />
    </>
  );
};

export default Phone;
