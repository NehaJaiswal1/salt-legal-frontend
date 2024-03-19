

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar-left">THE SALT LEGAL</h2>
      <div className="navbar-div-a">
        <Link to="#">HOME</Link>
        <Link to="#">FEATURE</Link>
        <Link to="#">PACKAGE</Link>
        <Link to="#">TEMPLATE</Link>
        <Link to="#">ABOUT</Link>
       
        
      </div>

      <div className="nav-div">
        <button>
           SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Navbar;
