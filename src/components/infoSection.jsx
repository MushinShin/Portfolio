import React, { Component } from "react";
import InfoItem from "./aboutInfoItem";

const AboutInfo = () => {
  return (
    <div className="about_info_items">
      <div className="about_info_item">
        <h1 className="about_info-h">My Skills</h1>
        <InfoItem />
      </div>
    </div>
  );
};

export default AboutInfo;
