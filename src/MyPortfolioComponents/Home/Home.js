import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import "./Home.css";
import Photo from "./Photo.png";
import Think from "./Think.png";

const Home = () => {
  return (
    <>
      <div className="container-home">
        <img src={Photo} alt="myProfile" className="profile-img" />
        <img src={Think} alt="thinking" className="cloud-img" />
        <span id="think"> Hi !</span>
        <div className="info">
          <h2 className="h2-home">I am Web Developer </h2>
          <h2 className="h2-home">Aditya Jawanjal</h2>
          <h3>A passionate Front-end Web Developer.</h3>
          <button type="button" id="hire" className="btn">
            <a href="mailto:adityajawanjal01@gmail.com"> Hire Me</a>
          </button>
          <button type="button" id="contact" className="btn">
            <a href="mailto:adityajawanjal01@gmail.com">Contact Me</a>
          </button>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
