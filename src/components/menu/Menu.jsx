import React from "react";
import "./menu.css";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Inicio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Proyectos</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  );
}
