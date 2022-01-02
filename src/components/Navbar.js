import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({toggle}) => {
  return (
    <div className="nav">
      <div className="nav_logo">
        <Link to="/" className="logo">
          Resto Indo
        </Link>
      </div>
      <i className="menu_bars" onClick={toggle} />
      <div className="space"></div>
      <div className="navbar">
        <Link to="/home" className="navbar_links">
            Home
        </Link>
        <Link to="/about" className="navbar_links">
            About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
