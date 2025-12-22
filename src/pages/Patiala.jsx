import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Patiala = () => {
  return (
    <>
      <Helmet>
        <title>
          Nuts & Bolts Manufacturer in Patiala | Industrial Fasteners Supplier Punjab
        </title>

        <meta
          name="description"
          content="Shri Ram Fastners supplies nuts, bolts and industrial fasteners to Patiala, Punjab for manufacturing, construction and engineering industries."
        />

        <meta
          name="keywords"
          content="nuts and bolts manufacturer in patiala, industrial fasteners patiala, fasteners supplier punjab"
        />

        <link
          rel="canonical"
          href="https://www.shriramfastners.in/nuts-bolts-manufacturer-patiala"
        />
      </Helmet>

      <div className="bg-black text-white pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Nuts & Bolts Manufacturer in Patiala, Punjab
          </h1>

          <p className="mb-4">
            Shri Ram Fastners provides industrial fasteners, nuts and bolts to
            Patiala with assured quality and industrial-grade performance.
          </p>

          <p className="mb-4">
            Our products include high tensile bolts, MS & SS fasteners and custom
            fastening solutions for diverse industrial needs.
          </p>

          <p className="mb-6">
            Businesses in Patiala trust us for reliable supply and engineering
            excellence across Punjab.
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

export default Patiala;
