import React, { Component } from "react";
import Banner from "../imgs/banner.png";
import "../styles/heroStyles.css";

const Hero = () => {
  return (
    <section className="block block--dark block--skewed-left">
      <div className="grid grid--1x2">
        <header className="block__header hero__content">
          <h1 className="block__heading">Hi! Welcome To my Portfolio</h1>
          <p className="hero__tagline">Facundo Francia</p>
        </header>
        <img className="hero__image" src={Banner} alt="" />
      </div>
    </section>
  );
};

export default Hero;
