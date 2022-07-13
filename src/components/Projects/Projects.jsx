import React from 'react'
import './proyects.css'
import img from "../../assets/countriesApp.JPG";
import image from "../../assets/terapeando.JPG";

export default function Projects () {

    return (
        <div className='projectscontainer'>
            <h1 className='projectstitle'>Mis proyectos</h1>

            <div className='projectscont'>
            <div className='projects'>
                <img src={img} className='countriesappimg'/>
                <h2 className='projecttitle'>Countries App</h2>
                <p className='projectp'>Proyecto realizado desde el backend hasta el frontend, utilizando Node.js, Express, Sequelize, PostgreSQL para el back-End y Javascript, React-Redux y css para el Front-End. Se consume API externa</p>
                <button className='projectbtn'>Ver Proyecto</button>
            </div>

            <div className='projects'>
                <img src={image} className='countriesappimg'/>
                <h2 className='projecttitle'>Terapeando</h2>
                <p className='projectp'>Proyecto realizado desde el backend hasta el frontend, utilizando Node.js, Express, Sequelize, PostgreSQL para el back-End y Javascript, React-Redux y css para el Front-End. Se consume API externa</p>
                <button className='projectbtn'>Ver Proyecto</button>
            </div>
            </div>
            
        </div>
    )
}