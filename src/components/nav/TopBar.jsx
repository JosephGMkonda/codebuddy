import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './nav.css'
import MobileView from './MobileView'

function TopBar() {


    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };



    return ( 

    
    
        <>
      <MobileView isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="container">
          <div className="Logo" style={{ fontSize: '1.7em', fontStyle: 'italic' }}>
            Joseph Mkonda
          </div>

          <ul>
            <li>
              <Link className="menu-item" 
              activeClass="active" 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500} 
              >
                Home
              </Link>
            </li>
            <li>
              <Link className="menu-item"
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}  
              >
                Skills
              </Link>
            </li>
            <li>
              <Link className="menu-item"
              to="work-experience" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}  

              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link className="menu-item" 
               to="contact-me" 
               spy={true} 
               smooth={true} 
               offset={-100} 
               duration={500}  
              
              >
                Contact Me
              </Link>
            </li>
            <Link className="contact-me" to="contact-me" 
               spy={true} 
               smooth={true} 
               offset={-100} 
               duration={500} >
              Hire Me
            </Link>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span class={'material-symbols-outlined'} style={{ fontSize: '1.8rem' }}>
              {openMenu ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>
    </>


    );

}
export default TopBar