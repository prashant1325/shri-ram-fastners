import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Home/Footer";

const Phone = () => {
  return (
    <>
      {/* 🔥 ADVANCED SEO FOR CONTACT PAGE (LOCAL + TRUST) */}
      <Helmet>
        {/* 🔑 TITLE – LOCAL BUYER INTENT */}
        <title>
          Contact Nuts & Bolts Manufacturer in Ludhiana | Shri Ram Fastners Punjab
        </title>

        {/* 🧠 META DESCRIPTION – CONVERSION FOCUSED */}
        <meta
          name="description"
          content="Contact Shri Ram Fastners, a trusted nuts and bolts manufacturer in Ludhiana, Punjab. Reach us for industrial fasteners, high tensile bolts and custom fastening solutions with reliable delivery across Punjab and India."
        />

        {/* 🔍 ADVANCED KEYWORDS (CONTACT + LOCATION) */}
        <meta
          name="keywords"
          content="
          contact nuts and bolts manufacturer in ludhiana,
          fasteners supplier contact punjab,
          industrial fasteners manufacturer ludhiana contact,
          high tensile bolts supplier punjab,
          custom fasteners manufacturer contact
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/phone" />
      </Helmet>

      {/* PAGE CONTENT (UNCHANGED) */}
      <Contact />
      <Footer />
    </>
  );
};

export default Phone;
