import React from "react";
import { Helmet } from "react-helmet-async";
import Ser from "../Components/Services/Ser";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Services = () => {
  return (
    <>
      {/* SEO FOR APPLICATIONS PAGE */}
      <Helmet>
        <title>Fastener Applications | Industrial Fastening Solutions</title>

        <meta
          name="description"
          content="Discover industrial fastener applications across automotive, railway, solar, power and infrastructure sectors with reliable fastening solutions from Shri Ram Fastners."
        />

        <meta
          name="keywords"
          content="fastener applications, industrial fastening solutions, fasteners for automotive, railway fasteners, solar structure fasteners"
        />

        <link rel="canonical" href="https://www.shriramfastners.in/services" />
      </Helmet>

      {/* PAGE CONTENT */}
      <Ser />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Services;
