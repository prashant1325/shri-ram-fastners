import React from "react";
import { Helmet } from "react-helmet-async";
import OurCar from "../Components/Product/OurCar";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Products = () => {
  return (
    <>
      {/* ✅ SEO FOR PRODUCTS PAGE */}
      <Helmet>
        <title>Industrial Fasteners Products | Nuts & Bolts Manufacturer</title>

        <meta
          name="description"
          content="Explore a wide range of industrial fasteners including nuts, bolts, and high tensile fastening solutions manufactured by Shri Ram Fastners for multiple industries."
        />

        <meta
          name="keywords"
          content="industrial fasteners products, nuts and bolts manufacturer, high tensile bolts, fasteners supplier india, fastening solutions"
        />

        <link
          rel="canonical"
          href="https://www.shriramfastners.in/products"
        />
      </Helmet>

      {/* ✅ EXISTING CONTENT (UNCHANGED) */}
      <OurCar />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Products;
