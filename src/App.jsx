import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import Product from "./components/Product.jsx";
import Footer from "./components/Footer.jsx";
import WhyUs from "./components/WhyUs.jsx";
import HomePage2 from "./components/HomePage2.jsx";
import BakingArtSection from "./components/BakingArtSection.jsx";
import DailyProducts from "./components/DailyProducts.jsx";

const App = () => {
  return (
    <div className="py-5 bg-pink-100 font-primary">
      <Navbar />
      <Home />
      <HomePage2 />
      <DailyProducts />
      <Product />
      <WhyUs />
      <BakingArtSection />
      <Footer />
    </div>
  );
};

export default App;
