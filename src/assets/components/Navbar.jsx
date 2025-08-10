// src/components/Navbar.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; // Add this file for your dark custom styles

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">W.G. Chenitha Nethvin</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">My Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
