import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Phone from "./pages/Phone";
import Signup from "./pages/Signup";
import BuySuccess from "./pages/BuySuccess";
import SellYourCar from "./pages/SellYourCar";
import SellSuccess from "./pages/SellSuccess";
import ServiceForm from "./pages/ServiceForm";
import { HelmetProvider } from 'react-helmet-async';

// Components
import BuyForm from "./Components/Product/BuyForm";
import Ludhiana from "./pages/Ludhiana";


function App() {
  return (
    <>
    <HelmetProvider>
      <Navbar />
      <ScrollToTop />

      {/* Spacer for fixed navbar */}
      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/buy" element={<BuyForm />} />
          <Route path="/buy-success" element={<BuySuccess />} />
          <Route path="/sell-car" element={<SellYourCar />} />
          <Route path="/sell-success" element={<SellSuccess />} />
          <Route path="/service-form" element={<ServiceForm />} />
        </Routes>
        
      </div>
       </HelmetProvider>
    </>
    
  );
}

export default App;
