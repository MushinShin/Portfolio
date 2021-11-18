import React, { Component } from "react";
import InfoItem from "./aboutInfoItem";

const AboutInfo = () => {
  return (
    <div className="about_info_items">
      <div className="about_info_item">
        <h1 className="about_info-h">My Skills</h1>
        <InfoItem
          title="Front-End"
          items={["HTML", "CSS", "JS", "TYPESCRIPT", "REACT"]}
        />
        <InfoItem title="Back-End" items={["C#", "SQL", "Dynamics CRM"]} />
      </div>
    </div>
  );
};

export default AboutInfo;
