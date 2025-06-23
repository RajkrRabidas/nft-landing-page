import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import Marquee from "./components/marque/Marquee";
import Popular from "./components/Popular/Popular";
import Seller from "./components/Seller/Seller";
import Work from "./components/Work/Work";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="main">
      <div className="glowing"></div>
        <Navbar />
        <Home />
        <Marquee/>
        <Popular/>
        <Seller/>
        <Work/>
        <Community/>
        <Footer/>
    </div>
  );
};

export default App;
