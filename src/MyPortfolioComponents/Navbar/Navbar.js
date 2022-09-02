import React from "react";
import "./Navbar.css";
import Logo from "./Logo.png";
import { NavLink } from "react-router-dom";
import List from "./NavbarList";

const Navbar = () => {
  return (
    <>
      <div className="navbar-box">
        <div className="logo">
          <img src={Logo} alt="Web" id="logo-img" />
          <h3 id="name">Portfolio</h3>
        </div>
        <i className="fa-solid fa-bars fa-4x"></i>
        <div className="pages">
          {List.map((e) => {
            return (
              <div className=" tag" key={e.id}>
                <NavLink to={"/" + e.title}>{e.title}</NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
