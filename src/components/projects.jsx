import React, { Component } from "react";
import { Swiper } from "swiper/react";
import projects from "../Assets/projects";
import ProjectItem from "./projectItem";

const Project = () => {
  return (
    <div>
      <div className="container">
        <h1>Projects</h1>
        <div className="projects_allItems">
          <Swiper>
            {projects.map((project, index) => {
              if (index >= 5) return;
              return <ProjectItem />;
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
