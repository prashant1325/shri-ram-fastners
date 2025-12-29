import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";

/* ================= NORMAL PAGES ================= */
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

/* ================= COMPONENTS ================= */
import BuyForm from "./Components/Product/BuyForm";

/* ================= CITY PAGES ================= */
import CityHome from "./pages/city/CityHome";
import CityAbout from "./pages/city/CityAbout";
import CityProducts from "./pages/city/CityProducts";
import CityServices from "./pages/city/CityServices";
import CityContact from "./pages/city/CityContact";

function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <ScrollToTop />

      {/* Spacer for fixed navbar */}
      <div className="pt-28">
        <Routes>

          {/* ======= STATIC ROUTES ======= */}
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

          {/* ======= CITY ROUTES (LAST) ======= */}
          <Route path="/:city/about" element={<CityAbout />} />
          <Route path="/:city/products" element={<CityProducts />} />
          <Route path="/:city/services" element={<CityServices />} />
          <Route path="/:city/contact" element={<CityContact />} />
          <Route path="/:city" element={<CityHome />} />

        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
