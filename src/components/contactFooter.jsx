import React, { Component } from "react";
import { Link } from 'react-router-dom';

const FooterCont = ({
  heading = "col_heading",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) => {
  return (
    <div>
      <h1>{heading}</h1>
      <ul>
          {
              links.map((item, index) => {
                  <li key={index}>
                      {item.type === 'Link' ? {
                          
                      }}
                  </li>
              })
          }
      </ul>
    </div>
  );
};

export default FooterCont;
