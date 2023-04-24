import React from "react";
import "./navbar.css";
import { Person, Mail, LinkedIn } from "@material-ui/icons";
import Swal from "sweetalert2";
import { FileCopy } from "@material-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function NavBar({ menuOpen, setMenuOpen }) {
  const handleClick = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Email copiado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
              <div className="copyMail">
                <CopyToClipboard text="etcheparede@gmail.com">
                  <button onClick={handleClick}>
                    <Mail className="icon" /> <span>etcheparede@gmail.com</span>
                    <FileCopy className="icon" />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className="itemContainer">
              <a
                href="https://www.linkedin.com/in/etcheparede/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="icon" /> <span>/etcheparede</span>
              </a>
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
