import React from "react";
import { Helmet } from "react-helmet-async";
import OurCar from "../Components/Product/OurCar";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Products = () => {
  return (
    <>
      {/* 🔥 ADVANCED SEO FOR PRODUCTS PAGE (LEAD-FOCUSED) */}
      <Helmet>
        {/* 🔑 TITLE – HIGH BUYER INTENT */}
        <title>
          Nuts & Bolts Manufacturer in Ludhiana | Industrial Fasteners Supplier Punjab – Shri Ram Fastners
        </title>

        {/* 🧠 META DESCRIPTION – CONVERSION + LOCATION */}
        <meta
          name="description"
          content="Shri Ram Fastners is a leading nuts and bolts manufacturer in Ludhiana, Punjab, offering industrial fasteners, high tensile bolts, MS & SS fasteners for automotive, railway, solar and infrastructure industries across Punjab and India."
        />

        {/* 🔍 ADVANCED KEYWORDS (PRODUCT + CITY + STATE) */}
        <meta
          name="keywords"
          content="
          nuts and bolts manufacturer in ludhiana,
          industrial fasteners manufacturer ludhiana,
          nuts bolts supplier punjab,
          high tensile bolts manufacturer punjab,
          ms nuts bolts supplier ludhiana,
          stainless steel fasteners ludhiana,
          custom fasteners manufacturer punjab,
          automotive fasteners supplier punjab,
          railway fasteners manufacturer india
          "
        />

        {/* 🌍 CANONICAL */}
        <link rel="canonical" href="https://www.shriramfastners.in/products" />
      </Helmet>

      {/* PAGE CONTENT (UNCHANGED) */}
      <OurCar />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Products;
