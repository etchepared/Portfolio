import React from "react";
import "./portfolio.scss";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="top">
        <h1>Proyectos</h1>
      </div>
      <div className="container">
        <div className="item">
          <img src="assets/Lok.png" alt="https://pffrontend-fafd3.web.app/" />
          <h3>Lok Ecommerce</h3>
        </div>

        <div className="item">
          <img
            src="assets/pokepedia.png"
            alt="https://pokemonclient.herokuapp.com/"
          />
          <h3>PokePedia</h3>
        </div>
      </div>
      <a href="#contact">
        <KeyboardArrowDown className="icon" />
      </a>
    </div>
  );
}
