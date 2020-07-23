import React from "react";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import "./styles.css";
import "./media.css";

function About() {
  return (
    <div className="about-page">
      <Nav />
      <Header />
      <div className="main-page">
        <h1 className="decorated">
          <span>ABOUT</span>
        </h1>
      </div>
    </div>
  );
}

export default About;
