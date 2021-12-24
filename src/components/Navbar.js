import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Global.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="nav_logo">
        <Link to="/" className="logo">
          Resto Indo
        </Link>
      </div>
      <div className="space"></div>
      <div className="navbar">
        <Link to="/" className="navbar_links">
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
