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
          <div
            id="nav-toggle"
            className={`nav_toggle ${expanded ? "rotate" : ""}`}
            onClick={handleClick}
          >
            <box-icon name="right-arrow" color="black"></box-icon>
          </div>

          <ul className="nav_list">
            <a href="#" className="nav_link">
              <box-icon
                name="home-circle"
                className="nav_icon"
                color="white"
              ></box-icon>
              {expanded && <span className="nav_text">Home</span>}
            </a>
            <a href="#" className="nav_link">
              <box-icon
                name="planet"
                className="nav_icon"
                color="white"
              ></box-icon>
              {expanded && <span className="nav_text">Projects</span>}
            </a>
          </ul>
        </div>

        <div className="profil">
          <div className="profil_img">
            <box-icon name="mail-send" color="white"></box-icon>
          </div>
          <div className="profile_desc">
            {expanded && <a href="#">FacundoFrancia25@outlook.com</a>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
