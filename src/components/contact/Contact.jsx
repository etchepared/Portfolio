import React from "react";
import "./contact.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import { FileCopy } from "@material-ui/icons";

export default function Contact() {
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
    <div className="contact" id="contact">
      <div className="left">
        <div className="logoContainer">
          <img src="assets/js.png" alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>
        <div className="logoContainer">
          <img src="assets/node.png" alt="Node.js" />
          <h3>Node.js</h3>
        </div>
        <div className="logoContainer">
          <img src="assets/react.svg" alt="React.js" />
          <h3>React.js</h3>
        </div>
        <div className="logoContainer">
          <img src="assets/express.svg" alt="Express" />
          <br />
          <h3>Express</h3>
        </div>
        <div className="logoContainer">
          <img src="assets/redux.svg" alt="Redux" />
          <h3>Redux</h3>
        </div>
        <div className="logoContainer">
          <img src="assets/css.svg" alt="CSS" />
          <h3>CSS</h3>
        </div>
        <div className="logoContainer">
          <img src="assets/html.svg" alt="HTML" />
          <h3>HTML</h3>
        </div>
        <div className="logoContainer">
          <img src="assets/postgresql.svg" alt="PostgreSQL" />
          <h3>PostgreSQL</h3>
        </div>
      </div>
      <div className="right">
        <h2>Contacto</h2>
        <div className="contactLogos">
          {/* LinkedIn */}
          <div className="smLogo">
            <a
              href="https://www.linkedin.com/in/etcheparede/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/linkedin.svg" alt="LinkedIn" />
              <h3>/etcheparede</h3>
            </a>
          </div>
          {/* GitHub */}
          <div className="smLogo">
            <a
              href="https://github.com/etchepared"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/github.png" alt="GitHub" />
              <h3>/etchepared</h3>
            </a>
          </div>
          {/* Gmail */}
          <div className="smLogo">
            <div className="copyMail">
              <CopyToClipboard text="etcheparede@gmail.com">
                <button onClick={handleClick}>
                  <img src="assets/gmail.svg" alt="Gmail" />
                  <h3>etcheparede@gmail.com</h3>
                  <FileCopy className="icon" />
                </button>
              </CopyToClipboard>
            </div>
          </div>
          {/* Whatsapp */}
          <div className="smLogo">
            <a
              href="https://wa.me/+5492964551421"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/whatsapp.svg" alt="Gmail" />
              <h3>+54 9 2964 551421</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
