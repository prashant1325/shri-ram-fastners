import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Amritsar = () => {
  return (
    <>
      <Helmet>
        <title>
          Nuts & Bolts Manufacturer in Amritsar | Industrial Fasteners Supplier Punjab
        </title>

        <meta
          name="description"
          content="Shri Ram Fastners supplies industrial fasteners, nuts and bolts to Amritsar, Punjab, serving automotive, railway and infrastructure industries."
        />

        <meta
          name="keywords"
          content="nuts and bolts manufacturer in amritsar, fasteners supplier amritsar, industrial fasteners punjab"
        />

        <link
          rel="canonical"
          href="https://www.shriramfastners.in/nuts-bolts-manufacturer-amritsar"
        />
      </Helmet>

      <div className="bg-black text-white pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Nuts & Bolts Manufacturer in Amritsar, Punjab
          </h1>

          <p className="mb-4">
            Shri Ram Fastners delivers high-quality industrial nuts, bolts and
            fasteners to businesses in Amritsar. Our fastening solutions are
            designed for strength, durability and precision.
          </p>

          <p className="mb-4">
            We supply high tensile fasteners, stainless steel bolts and customized
            solutions for industrial and infrastructure applications.
          </p>

          <p className="mb-6">
            Manufacturers and contractors in Amritsar rely on us for consistent
            quality and dependable supply across Punjab.
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

export default Amritsar;
