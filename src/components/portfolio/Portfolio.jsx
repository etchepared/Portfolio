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
          <div className="project"></div>
          <img src="assets/Lok.png" alt="https://pffrontend-fafd3.web.app/" />
          <h3>Lok Ecommerce</h3>
          <div className="links">
            <div className="repo-link">
              <a
                href="https://github.com/maxisosa89/PF_backend_ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                Repo back
              </a>
            </div>
            <div className="repo-link">
              <a
                href="https://github.com/nicolasmayorquinduran/frontend_PF"
                target="_blank"
                rel="noreferrer"
              >
                Repo front
              </a>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="project"></div>
          <img
            src="assets/pokepedia.png"
            alt="https://pokepedia-vite.netlify.app/"
          />
          <h3>PokePedia</h3>
          <div className="links">
            <div className="repo-link">
              <a
                href="https://github.com/etchepared/apipokepedia"
                target="_blank"
                rel="noreferrer"
              >
                Repo back
              </a>
            </div>
            <div className="repo-link">
              <a
                href="https://github.com/etchepared/PI-client-vite"
                target="_blank"
                rel="noreferrer"
              >
                Repo front
              </a>
            </div>
            <div className="deploy-link">
              <a
                href="https://pokepedia-vite.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Deploy
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="project"></div>
          <img src="assets/ABM.png" alt="abm app" />
          <h3>ABM Challenge</h3>
          <div className="links">
            <div className="repo-link">
              <a
                href="https://github.com/etchepared/abm-challenge"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <a className="down" href="#contact">
        <KeyboardArrowDown className="icon" />
      </a>
    </div>
  );
}
