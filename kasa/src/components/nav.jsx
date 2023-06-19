import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navHeader">
      <NavLink to="/" className="homeNavLink">
        Accueil
      </NavLink>
      <NavLink to="/about" className="aboutNavLink">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;
