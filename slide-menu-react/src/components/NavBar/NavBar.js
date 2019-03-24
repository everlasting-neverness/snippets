import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar">
        <span className="open-slide" onClick={this.props.handleSlideBtn}>
          <a href="#">
            <svg width="29" height="29">
              <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
            </svg>
          </a>
        </span>
        <ul className="nav-bar-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
