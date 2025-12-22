import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Bathinda = () => {
  return (
    <>
      <Helmet>
        <title>
          Nuts & Bolts Manufacturer in Bathinda | Industrial Fasteners Supplier Punjab
        </title>

        <meta
          name="description"
          content="Shri Ram Fastners supplies nuts, bolts and industrial fasteners to Bathinda, Punjab, supporting infrastructure, power and manufacturing industries."
        />

        <meta
          name="keywords"
          content="nuts and bolts manufacturer in bathinda, industrial fasteners bathinda, fasteners supplier punjab"
        />

        <link
          rel="canonical"
          href="https://www.shriramfastners.in/nuts-bolts-manufacturer-bathinda"
        />
      </Helmet>

      <div className="bg-black text-white pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Nuts & Bolts Manufacturer in Bathinda, Punjab
          </h1>

          <p className="mb-4">
            Shri Ram Fastners delivers industrial-grade nuts, bolts and fasteners
            to Bathinda for power, infrastructure and heavy engineering projects.
          </p>

          <p className="mb-4">
            We manufacture high tensile and customized fasteners that meet
            stringent industrial standards.
          </p>

          <p className="mb-6">
            Businesses in Bathinda trust Shri Ram Fastners for quality, reliability
            and strong supply across Punjab.
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

export default Bathinda;
