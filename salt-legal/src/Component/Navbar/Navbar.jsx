

import React from "react";
import "./Navbar.css";
import { Link,useNavigate  } from "react-router-dom";



const Navbar = () => {

  const navigate = useNavigate();
  
  return (
    <div className="navbar">
      <h2 className="navbar-left">THE SALT LEGAL</h2>
      <div className="navbar-div-a">
        <Link to="/">HOME</Link>
        <Link to="/feature">FEATURES</Link>
        <Link to="/package">PACKAGES</Link>
        <Link to="/templates">TEMPLATES</Link>
        <Link to="/templates">NEWSLETTERS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact-us">CONTACT US</Link>
        
      </div>

      <div className="nav-div">
      <button onClick={() => navigate("/login")}>
           LOGIN
        </button>
        <button onClick={() => navigate("/register")}>
           REGISTER
        </button>
      </div>
    </div>
  );
};

export default Navbar;
