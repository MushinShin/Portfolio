import React, { Component } from "react";
import "../styles/navStyles.css";
import "../js/toggle.js";
import "boxicons";

const Nav = () => {
  return (
    <div className="sidebar" id="sidebar">
      <nav className="nav">
        <div>
          <div className="nav_logo">
            <box-icon name="home-circle"></box-icon>
            <span className="nav_icon-text">Home</span>
          </div>

          <div className="nav_toggle" id="nav-toggle">
            <box-icon name="right-arrow"></box-icon>
          </div>

          <div className="nav_projects">
            <box-icon name="planet"></box-icon>
          </div>
          <ul className="nav_list">
            <a href="#" className="nav_link">
              <span className="nav_text">Test</span>
            </a>
          </ul>
        </div>
        <div className="profil">
          <div className="profil_img">
            <box-icon name="mail-send"></box-icon>
          </div>
          <div className="profile_desc">
            <p>Facundo Francia</p>
            <a href="#">FacundoFrancia25@outlook.com</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
