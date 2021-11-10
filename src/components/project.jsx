import React, { Component } from "react";
import { swiper } from "../";

const Project = () => {
  return (
    <div>
      <div className="container">
        <h1>Projects</h1>
        <div className="projects_allItems">
          <swiper></swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
