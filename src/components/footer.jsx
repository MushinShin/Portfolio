import React, { Component } from "react";
import FooterCont from "./contactFooter";
import "../styles/footerStyles.css";

const Footer = () => {
  return (
    <div>
      <div className="containerFooter">
        <div className="footer_col1">
          <h1 className="footer_col1_title">Facundo Francia</h1>
        </div>
        <div className="footer_col2">
          <FooterCont />
        </div>
        <div className="footer_col3">
          <FooterCont />
        </div>
        <div className="footer_col4">
          <FooterCont />
        </div>
      </div>
    </div>
  );
};

export default Footer;
