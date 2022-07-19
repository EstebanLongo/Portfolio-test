import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="aboutcontainer" id="about">
      <h1 className="aboutname">Esteban Longo</h1>
      <h2 className="aboutfullstack">Full Stack Developer</h2>
      <p className="aboutp">
        Soy una persona proactiva, de mente analítica, con grandes habilidades
        de comunicación y empatía, gran curiosidad y siempre con ganas de
        aprender nuevas tecnologías. Con pensamiento creativo, resolución de problemas,
        trabajo en equipo, comunicación y autonomía. Día a día intento mejorar mis skills, soy un entusiasta del aprendizaje continuo.
      </p>

      <section id="section05" class="demo">
        <a href="#projects">
          <span></span>Mis proyectos
        </a>
      </section>
    </div>
  );
}
