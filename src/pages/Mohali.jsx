import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Mohali = () => {
  return (
    <>
      <Helmet>
        <title>
          Nuts & Bolts Manufacturer in Mohali | Industrial Fasteners Supplier Punjab
        </title>

        <meta
          name="description"
          content="Shri Ram Fastners supplies industrial nuts, bolts and fasteners to Mohali, Punjab for automotive, construction and engineering sectors."
        />

        <meta
          name="keywords"
          content="nuts and bolts manufacturer in mohali, fasteners supplier mohali, industrial fasteners punjab"
        />

        <link
          rel="canonical"
          href="https://www.shriramfastners.in/nuts-bolts-manufacturer-mohali"
        />
      </Helmet>

      <div className="bg-black text-white pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Nuts & Bolts Manufacturer in Mohali, Punjab
          </h1>

          <p className="mb-4">
            Shri Ram Fastners offers premium fastening solutions to industries in
            Mohali with a focus on strength, precision and durability.
          </p>

          <p className="mb-4">
            Our fasteners are used in automotive manufacturing, infrastructure
            projects and heavy engineering applications.
          </p>

          <p className="mb-6">
            Companies in Mohali rely on us for consistent quality and timely
            delivery across Punjab.
          </p>

          <div className="flex gap-6">
            <Link to="/products" className="text-yellow-400 underline">
              View Products
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

export default Mohali;
