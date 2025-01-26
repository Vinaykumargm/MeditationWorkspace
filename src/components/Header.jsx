//import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/meditation">Do Meditation</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/static-experiences">Experiences</Link>
          </li>
          <li>
            <Link to="/dynamic-experiences">Share Experience</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
