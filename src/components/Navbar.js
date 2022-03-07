import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login";
import "./Login.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="hotel" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        {showloginButton ? null : (
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/bookingForm">Book Now</Link>
            </li>
          </ul>
        )}

        <div className="g-signin">
          <Login
            showloginButton={showloginButton}
            setShowloginButton={setShowloginButton}
            showlogoutButton={showlogoutButton}
            setShowlogoutButton={setShowlogoutButton}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
