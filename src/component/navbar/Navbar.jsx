import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import arrow from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <div className="links">
          <NavLink to="/">Events</NavLink>
          <NavLink to="/">My Tickets</NavLink>
          <NavLink to="/">About Project</NavLink>
        </div>
        <button className="nav-btn">
          My Tickets <img src={arrow} alt="" />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
