import React from "react";
import "./navbar.scss";
import { Person, Mail, LinkedIn } from "@material-ui/icons";

export default function NavBar({ menuOpen, setMenuOpen }) {
  return (
    <div className="navbarTop">
      <div className={"navbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <div className="logoContainer">
              <span id="nameLogo">David E. Etchepare</span>
            </div>
            <div className="itemContainer">
              <Person className="icon" />
              <span>+54 9 2964 551421</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon" /> <span>etcheparede@gmail.com</span>
            </div>
            <div className="itemContainer">
              <LinkedIn className="icon" /> <span>/etcheparede</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
