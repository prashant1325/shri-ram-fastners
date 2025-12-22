import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../Components/Home/Footer";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import { Link } from "react-router-dom";

const Jalandhar = () => {
  return (
    <>
      <Helmet>
        <title>
          Nuts & Bolts Manufacturer in Jalandhar | Industrial Fasteners Supplier Punjab
        </title>

        <meta
          name="description"
          content="Shri Ram Fastners is a trusted nuts and bolts manufacturer supplying industrial fasteners, high tensile bolts and custom fastening solutions to industries in Jalandhar, Punjab."
        />

        <meta
          name="keywords"
          content="nuts and bolts manufacturer in jalandhar, nut bolt supplier jalandhar, industrial fasteners jalandhar, fasteners manufacturer punjab"
        />

        <link
          rel="canonical"
          href="https://www.shriramfastners.in/nuts-bolts-manufacturer-jalandhar"
        />
      </Helmet>

      <div className="bg-black text-white pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Nuts & Bolts Manufacturer in Jalandhar, Punjab
          </h1>

          <p className="mb-4">
            Shri Ram Fastners is a leading manufacturer and supplier of nuts,
            bolts and industrial fasteners serving Jalandhar and nearby regions
            of Punjab. We deliver precision-engineered fastening solutions for
            automotive, railway, infrastructure and heavy engineering industries.
          </p>

          <p className="mb-4">
            Our product range includes high tensile bolts, MS & SS fasteners,
            custom fastening solutions and bulk industrial fasteners manufactured
            to meet Indian and international standards.
          </p>

          <p className="mb-6">
            Businesses in Jalandhar rely on Shri Ram Fastners for consistent
            quality, timely delivery and competitive pricing for all fastening
            requirements.
          </p>

          <div className="flex gap-4 mb-10">
            <Link to="/products" className="text-yellow-400 underline">
              View Our Products
            </Link>
            <Link to="/phone" className="text-yellow-400 underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <WhyUs />
      <Footer />
    </>
  );
};

export default Jalandhar;
