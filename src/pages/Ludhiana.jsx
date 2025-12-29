import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../Components/Home/Footer";

const Ludhiana = () => {
  return (
    <>
      {/* 🔥 SEO FOR LUDHIANA CITY PAGE */}
      <Helmet>
        <title>
          Nuts & Bolts Manufacturer in Ludhiana | Industrial Fasteners Supplier – Shri Ram Fastners
        </title>

        <meta
          name="description"
          content="Shri Ram Fastners is a leading nuts and bolts manufacturer in Ludhiana, Punjab, supplying industrial fasteners, high tensile bolts, MS & SS fasteners for automotive, railway, solar and infrastructure industries."
        />

        <meta
          name="keywords"
          content="
          nuts and bolts manufacturer in ludhiana,
          industrial fasteners supplier ludhiana,
          high tensile bolts manufacturer ludhiana,
          fasteners manufacturer in ludhiana,
          ms nuts bolts supplier ludhiana,
          custom fasteners manufacturer punjab
          "
        />

        <link
          rel="canonical"
          href="https://www.shriramfastners.in/nuts-bolts-manufacturer-ludhiana"
        />
      </Helmet>

      {/* PAGE CONTENT */}
      <section className="bg-black text-white px-6 md:px-20 py-16">
        <div className="max-w-5xl mx-auto">

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">
            Nuts & Bolts Manufacturer in Ludhiana
          </h1>

          {/* INTRO */}
          <p className="text-lg leading-relaxed mb-6">
            Shri Ram Fastners is a trusted <strong>nuts and bolts manufacturer in Ludhiana</strong>,
            delivering premium-quality industrial fasteners to leading manufacturers and infrastructure
            projects across Punjab. With a strong focus on quality, precision, and durability, we serve
            industries that demand reliable fastening solutions.
          </p>

          {/* INDUSTRIES */}
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
            Industries We Serve in Ludhiana
          </h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Automotive & Auto Components Industry</li>
            <li>Railway & Heavy Engineering Sector</li>
            <li>Solar Structure & Renewable Energy Projects</li>
            <li>Construction & Infrastructure Development</li>
            <li>Industrial Machinery & Fabrication Units</li>
          </ul>

          {/* PRODUCTS */}
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
            Our Fastener Products
          </h2>
          <p className="mb-6">
            We manufacture and supply a wide range of industrial fasteners including
            <strong> hex bolts, nuts, high tensile bolts, MS & SS fasteners, and custom fastening solutions</strong>.
            All products meet strict quality standards to ensure performance and long service life.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition">
                View Our Products
              </button>
            </Link>

            <a
              href="https://wa.me/919463616466?text=Hello%20I%20am%20looking%20for%20nuts%20and%20bolts%20manufacturer%20in%20Ludhiana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-yellow-400 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition">
                Contact via WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Ludhiana;
