import React from "react";
import "./navBar.css";

export default function NavBar() {
  return (
    <>
      <ul className="navbarlist">
        <li className="navbaritems">
          <a className='anchornav' href="#about">SOBRE MI</a>
        </li>
        <li className="navbaritems">
          <a className='anchornav' href="#skills">SKILLS</a>
        </li>
        <li className="navbaritems">
          <a className='anchornav' href="#projects">PROYECTOS</a>
        </li>
        <li className="navbaritems">
          <a className='anchornav' href="#contact">CONTACTO</a>
        </li>
      </ul>
    </>
  );
}
