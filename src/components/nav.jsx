import React, { Component } from "react";
import "../styles/navStyles.css";

const Nav = () => {
  return (
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link button" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link button" href="#">
          Proyects
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link button" href="#">
          About Me
        </a>
      </li>
    </ul>
  );
};

export default Nav;
