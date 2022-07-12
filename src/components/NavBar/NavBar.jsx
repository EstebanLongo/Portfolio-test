import React from 'react'
import './navBar.css'

export default function NavBar () {

    return (
        <>
            <ul className='navbarlist'>
                <li className='navbaritems'>HOME</li>
                <li className='navbaritems'>SOBRE MI</li>
                <li className='navbaritems'>SKILLS</li>
                <li className='navbaritems'>CURRICULUM</li>
                <li className='navbaritems'>CONTACTO</li>
            </ul>
        </>
    )
}