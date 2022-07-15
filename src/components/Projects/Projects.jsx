import React from 'react'
import './proyects.css'
import img from "../../assets/countriesApp.JPG";
import image from "../../assets/terapeando.JPG";
import terapeando from "../../assets/terapeandoApp.PNG"

export default function Projects () {

    return (
        <div className='projectscontainer' id='projects'>
            <h1 className='projectstitle'>Mis proyectos</h1>

            <div className='projectscont'>
            <div className='projects'>
                <img src={img} className='countriesappimg'/>
                <h2 className='projecttitle'>Countries App</h2>
                <p className='projectp'>Proyecto realizado desde el backend hasta el frontend, utilizando Node.js, Express, Sequelize, PostgreSQL para el back-End y Javascript, React-Redux y css para el Front-End. Se consume API externa</p>
                <button className='projectbtn'>
                <a href='https://countries-pi-esteban.vercel.app/' target="_blank" className='btnanchor'>Ver Proyecto</a>
                </button>
            </div>

            <div className='projects'>
                <img src={terapeando} className='countriesappimg'/>
                <h2 className='projecttitle'>Terapeando</h2>
                <p className='projectp'>Proyecto realizado desde el backend hasta el frontend, utilizando Node.js, Express, Sequelize, PostgreSQL para el back-End y Javascript, React-Redux y css para el Front-End. Se consume API externa</p>
                <button className='projectbtn'>
                <a href='https://terapeando.vercel.app/' target="_blank" className='btnanchor'>Ver Proyecto</a>
                </button>
            </div>

            <div className='projects'>
                <img src={terapeando} className='countriesappimg'/>
                <h2 className='projecttitle'>Movies App</h2>
                <p className='projectp'>Proyecto realizado desde el backend hasta el frontend, utilizando Node.js, Express, Sequelize, PostgreSQL para el back-End y Javascript, React-Redux y css para el Front-End. Se consume API externa</p>
                <button className='projectbtn'>
                <a href='https://movies-el-app.vercel.app/' target="_blank" className='btnanchor'>Ver Proyecto</a>
                </button>
            </div>
            </div>
            
        </div>
    )
}