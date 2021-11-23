import React, { Component } from "react";
import "../styles/aboutItemStyle.css";
import Fade from "react-reveal/Fade";

const InfoItem = ({
  title = "this is title",
  items = ["HTML", "CSS", "JS", "TYPESCRIPT"],
}) => {
  return (
    <Fade Left>
      <div className="aboutItem">
        <h1 className="title">{title}</h1>
        <div className="items">
          {items.map((item, index) => (
            <div className="item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default InfoItem;
