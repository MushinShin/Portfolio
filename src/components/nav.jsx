import React, { Component, useState } from "react";
import "../styles/navStyles.css";
import "boxicons";

// useState devuelve un array con 2 valores, 1- valor de estado 2-funcion para actualizar estado
const Nav = () => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? "show" : ""}`} id="sidebar">
      <nav className="nav">
        <div>
          <div className="nav_logo">
            <box-icon name="home-circle"></box-icon>
            <span className="nav_icon-text">Home</span>
          </div>

          <div
            id="nav-toggle"
            className={`nav_toggle ${expanded ? "rotate" : ""}`}
            onClick={handleClick}
          >
            <box-icon name="right-arrow"></box-icon>
          </div>

          <div className="nav_projects">
            <box-icon name="planet"></box-icon>
            <span className="nav_icon-text">Projects</span>
          </div>
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
