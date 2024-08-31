import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        Logo
      </a>

      <nav className="navbar">
        <a href="home">Home</a>
        <a href="about">About</a>
        <a href="services">Services</a>
        <a href="portfolio">Portfolio</a>
        <a href="contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
