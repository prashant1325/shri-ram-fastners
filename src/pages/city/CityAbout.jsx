import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Intro from "../../Components/About/Intro";
import Our from "../../Components/About/our";
import WhyUs from "../../Components/Home/WhyUs/WhyUs";
import Footer from "../../Components/Home/Footer";
import { cities } from "../../data/cities";

const CityAbout = () => {
  const { city } = useParams();

  /* ================= CITY VALIDATION ================= */
  if (!cities.includes(city)) {
    return <Navigate to="/" replace />;
  }

  /* ================= FORMAT CITY NAME ================= */
  const cityName = city
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const baseUrl = "https://www.shriramfastners.in";

  return (
    <>
      {/* ================= CITY ABOUT SEO ================= */}
      <Helmet>
        <title>
          About Shri Ram Fastners in {cityName} | Nuts & Bolts Manufacturer
        </title>

        <meta
          name="description"
          content={`Know about Shri Ram Fastners – trusted manufacturer and supplier of nuts, bolts, anchor bolts, studs, threaded rods, washers and industrial fasteners in ${cityName}. Serving construction, automotive & industrial sectors.`}
        />

        <meta
          name="keywords"
          content={`about shri ram fastners ${cityName}, nuts bolts manufacturer ${cityName}, fasteners supplier ${cityName}, anchor bolts ${cityName}, industrial fasteners near me ${cityName}`}
        />

        <link rel="canonical" href={`${baseUrl}/${city}/about`} />

        <meta property="og:title" content={`About Shri Ram Fastners in ${cityName}`} />
        <meta
          property="og:description"
          content={`Industrial fasteners manufacturer serving ${cityName} with quality and reliability.`}
        />
        <meta property="og:url" content={`${baseUrl}/${city}/about`} />
        <meta property="og:type" content="website" />

        {/* 🧩 ORGANIZATION SCHEMA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shri Ram Fastners",
            "url": "${baseUrl}/${city}/about",
            "description": "Manufacturer and supplier of nuts, bolts and industrial fasteners in ${cityName}",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${cityName}",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "${cityName}"
            }
          }
          `}
        </script>
      </Helmet>
      {/* ================= SEO END ================= */}

      {/* ================= CITY CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">
          About Shri Ram Fastners in {cityName}
        </h1>

        <section className="space-y-4 text-gray-700 text-lg">
          <p>
            Shri Ram Fastners is a well-established <strong>nuts and bolts manufacturer in {cityName}</strong>,
            supplying high-quality industrial fasteners to construction, infrastructure,
            manufacturing and automotive industries.
          </p>

          <p>
            With years of experience in the fasteners industry, we provide
            <strong> nuts, bolts, anchor bolts, studs, threaded rods, washers and U-bolts</strong>
            to clients across {cityName} and nearby industrial zones.
          </p>

          <p>
            Our commitment to quality standards, competitive pricing and on-time delivery
            has made Shri Ram Fastners a trusted <strong>industrial fasteners supplier in {cityName}</strong>.
          </p>

          <p>
            Whether you require bulk quantities or customized fasteners,
            our team ensures professional support and reliable service in {cityName}.
          </p>
        </section>
      </main>

      {/* ================= EXISTING UI SECTIONS ================= */}
      <Intro />
      <Our />
      <WhyUs />
      <Footer />
    </>
  );
};

export default CityAbout;
