import React from "react";
import "../Styles/style.css";
import "../Styles/bootstrap/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center;">
      <div className="container d-flex justify-content-between align-items-center w-full">
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink to="/profile">Home</NavLink>
            </li>
            <li>
              <NavLink to="/specno-quiz-content">Introduction</NavLink>
            </li>
            <li>
              <NavLink to="/specno-quiz">About me</NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">Projects</NavLink>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
