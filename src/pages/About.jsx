import React from "react";
import { Helmet } from "react-helmet-async";
import Intro from "../Components/About/Intro";
import Our from "../Components/About/our";
import WhyUs from "../Components/Home/WhyUs/WhyUs";
import Footer from "../Components/Home/Footer";

const About = () => {
  return (
    <>
      {/* SEO FOR ABOUT PAGE */}
      <Helmet>
        <title>About Shri Ram Fastners | Industrial Fasteners Manufacturer</title>

        <meta
          name="description"
          content="Learn about Shri Ram Fastners, a trusted industrial fasteners manufacturer known for quality, precision engineering, and reliable fastening solutions across industries."
        />

        <meta
          name="keywords"
          content="about shri ram fastners, fasteners manufacturer company, industrial fasteners manufacturer india, nuts and bolts manufacturer"
        />

        <link rel="canonical" href="https://www.shriramfastners.in/about" />
      </Helmet>

      {/* PAGE CONTENT */}
      <Intro />
      <Our />
      <WhyUs />
      <Footer />
    </>
  );
};

export default About;
