import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="aboutcontainer">
        <p className="abouttitle">Hola, soy</p>
        <h1 className="aboutname">Esteban Longo</h1>
        <h2 className="aboutfullstack">Full Stack Developer</h2>
        <p className="aboutp">
          Día a día intento mejorar mis skills, soy un entusiasta del
          aprendisaje continuo. Aquí podras encontrar mis proyectos en las
          cuales utilizo tecnologias como
          Javascript/React/Redux/Redux-toolkit/Tailwind para el Front-End y
          Node.js/Express/Sequelize/PostgreSQL para el Back-End.
        </p>
            
            <section id="section05" class="demo">
            <a href="#section06"><span></span>Mis proyectos</a>
        </section>
            
          
      </div>
  );
}
