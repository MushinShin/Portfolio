import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import projectImg from "../imgs/Facufy.png";
import projectLink from "../Assets/projects";
import "../styles/item.css";

const ProjectItem = ({
  img = projectImg,
  title = "Project Name",
  desc = "sodjasopjd asjdasoj doasjdasjd oasjpoas jasdjas pojaspo dasojd aso jdasopjd asopjd aposjd",
  link = "project link",
}) => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/projects" className="ProItContainer">
          <img src={img} alt="project img" className="projectItem_image" />
        </Link>
        <div className="projectItem_info">
          <Link className="projectItem_link" to="#">
            <h3 className="projectItem_title">{title}</h3>
          </Link>
          <p className="projectItem_desc">{desc}</p>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default ProjectItem;
