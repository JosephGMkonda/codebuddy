import React, { useState } from 'react';

import './nav.css'
import MobileView from './MobileView'

function TopBar() {


    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return ( 

        <>
        <MobileView isOpen={openMenu} toggleMenu={toggleMenu}/>
    

    <nav className="nav-wrapper">
        <div className="container">
            <div className="Logo" style={{ fontSize: '1.7em', fontStyle: 'italic' }}>
                Joseph Mkonda

            </div>

            <ul>
                <li>
                    <a className="menu-item">Home</a>
                </li>
                <li>
                    <a className="menu-item">Skills</a>
                </li>
                <li>
                    <a className="menu-item">Work Experience</a>
                </li>
                <li>
                    <a className="menu-item">Projects</a>
                </li>
                <li>
                    <a className="menu-item">Contact Me</a>
                </li>

                <button className="contact-me" onClick={() =>{}}>Hire Me</button>
            </ul>

            <button className="menu-btn" onClick = {toggleMenu}>
              <span 
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem"}}
              >
                
             {openMenu ? "close" : "menu"}

              </span>


            </button>

        </div>

    </nav>

    </>

    );

}
export default TopBar