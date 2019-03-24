import React from "react";
import "./SideMenu.css";

function SideMenu(props) {
  return (
    <section className={`side-menu ${props.navBarActive ? "visible" : ""}`}>
      <a href="#" className="btn-close" onClick={props.handleSlideBtn}>
        &times;
      </a>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </section>
  );
}

export default SideMenu;
