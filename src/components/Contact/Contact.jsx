import React from 'react'
import { Link } from "react-router-dom";
import './contact.css'

export default function Contact () {

    return (
        <div className='contactcontainer' id='contact'>
            <h1 className='contactitle'>Contactame</h1>
            <p className='contactp'>Te invito a ver mis perfiles y contactarme</p>

            <div className='contactcards'>
                
                <a className='anchor' target="_blank" href='https://www.linkedin.com/in/esteban-longo/'>

                <div className='linkedin'>
                    <p className='contactcardstitle'>LinkedIn</p>
                    <img src='https://thumbs.dreamstime.com/b/icono-vectorial-del-logo-de-linkedin-en-estilo-dise%C3%B1o-moderno-para-sitio-web-y-aplicaci%C3%B3n-m%C3%B3vil-logotipo-la-ilustraci%C3%B3n-sitios-169698579.jpg' className='img'/>
                </div>
                </a>

                <a className='anchor' target="_blank" href='https://github.com/EstebanLongo'>
                <div className='github'>
                    <p className='contactcardstitle'>GitHub</p>
                    <img className='githubimg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFSIO_dsJJiOX3Sntwxpw6lUIJKI0ueBlRpcQ3q57xVOw4-bCAQ2eX0v_5v2sf5CIiNA&usqp=CAU'/>
                </div>
                </a>
            </div>
        </div>
    )
}