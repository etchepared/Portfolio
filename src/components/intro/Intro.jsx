import React, { useEffect, useRef } from "react";
import "./intro.css";
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["JavaScript", "Node.js", "React.js"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/miFoto.png" alt="David E. Etchepare" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hola mundo, soy</h2>
          <h1>David E. Etchepare</h1>
          <h3>
            Full Stack Web Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="icon" />
        </a>
      </div>
    </div>
  );
}
