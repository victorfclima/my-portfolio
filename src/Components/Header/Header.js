import React from "react";
import "./styles.css";
import "./media.css";

function Header() {
  return (
    <div className="main-header">
      <h1>
        <span className="chevron">&lt;</span>
        VICTOR FRANÇA
        <span className="chevron">/</span>
        <span className="chevron">&gt;</span>
      </h1>
      <p>Front-End Developer</p>
    </div>
  );
}

export default Header;
