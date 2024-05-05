import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <Link to="/" className="menu-item">Home</Link>
  </li>
  <li>
    <Link to="/skills" className="menu-item">Skills</Link>
  </li>
  <li>
    <Link to="/work-experience" className="menu-item">Work Experience</Link>
  </li>
  <li>
    <Link to="/contact-me" className="menu-item">Contact Me</Link>
  </li>
  <button className="contact-me" onClick={() => {}}>Hire Me</button>
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