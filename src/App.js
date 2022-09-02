import React from "react";
import "./App.css";
import Navbar from "./MyPortfolioComponents/Navbar/Navbar";
import Home from "./MyPortfolioComponents/Home/Home";
import About from "./MyPortfolioComponents/About/About";
import Services from "./MyPortfolioComponents/Services/Services";
import Projects from "./MyPortfolioComponents/Projects/Projects";
import Contact from "./MyPortfolioComponents/Contact/Contact";

import { Routes, Route } from "react-router-dom";
import Footer from "./MyPortfolioComponents/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route exact path={"/Home"} element={<Home />} />
        <Route exact path={"/About"} element={<About />} />
        <Route exact path={"/Services"} element={<Services />} />
        <Route exact path={"/Projects"} element={<Projects />} />
        <Route exact path={"/Contact"} element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
