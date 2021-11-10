import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import projectImg from "../imgs/Facufy.png";
import "../styles/item.css";

const ProjectItem = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/projects" className="ProItContainer">
          <img
            src={projectImg}
            alt="project img"
            className="projectItem_image"
          />
        </Link>
        <div className="projectItem_info">
          <Link to="#">
            <h3 className="projectItem_title">Project 1</h3>
          </Link>
          <p className="projectItem_desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
            corrupti?
          </p>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default ProjectItem;
