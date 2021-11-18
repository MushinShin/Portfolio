import React, { Component } from "react";

const InfoItem = ({ title = "this is title", items = ["HTML", "CSS"] }) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoItem;
