import React, { Component } from "react";
import { Swiper } from "swiper/react";

const Project = () => {
  return (
    <div>
      <div className="container">
        <h1>Projects</h1>
        <div className="projects_allItems">
          <Swiper></Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
