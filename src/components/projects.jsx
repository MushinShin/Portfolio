import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import projects from "../Assets/projects";
import ProjectItem from "./projectItem";
import "../styles/projects.css";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

const Project = () => {
  return (
    <div className="projectSectionStyle">
      <div className="container">
        <h1 className="Project-Section">Projects</h1>
        <div className="projects_allItems">
          <Swiper
            className="swiperItem"
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 3) return;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    desc={project.desc}
                    img={project.img}
                    link={project.link}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
