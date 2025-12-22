import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../Components/Contact/Contact"; 
import Footer from "../Components/Home/Footer";

const Phone = () => {
  return (
    <>
      {/* ✅ SEO FOR CONTACT PAGE */}
      <Helmet>
        <title>Contact Shri Ram Fastners | Fasteners Manufacturer in India</title>

        <meta
          name="description"
          content="Contact Shri Ram Fastners for industrial fasteners, nuts, bolts and custom fastening solutions. Get in touch with our team for reliable quality and timely delivery."
        />

        <meta
          name="keywords"
          content="contact shri ram fastners, fasteners manufacturer contact, industrial fasteners supplier india, nuts and bolts manufacturer contact"
        />

        <link
          rel="canonical"
          href="https://www.shriramfastners.in/phone"
        />
      </Helmet>

      {/* ✅ EXISTING CONTENT (UNCHANGED) */}
      <Contact />
      <Footer />
    </>
  );
};

export default Phone;
