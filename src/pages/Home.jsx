import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Home/Hero/Hero";
import Featured from "../Components/Home/Featured/Featured";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <>
      {/* SEO FOR HOME PAGE */}
      <Helmet>
        <title>Fasteners Manufacturer in India | Shri Ram Fastners</title>

        <meta
          name="description"
          content="Shri Ram Fastners is a trusted fasteners manufacturer in India, supplying premium industrial fasteners, nuts, bolts and high tensile fastening solutions with reliable quality and delivery."
        />

        <meta
          name="keywords"
          content="fasteners manufacturer in india, industrial fasteners supplier, nuts and bolts manufacturer, high tensile bolts supplier, custom fasteners manufacturer"
        />

        <link rel="canonical" href="https://www.shriramfastners.in/" />
      </Helmet>

      {/* PAGE CONTENT */}
      <div>
        <Hero />
        <Featured />
        <WhyUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
