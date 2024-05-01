import React from 'react'
import './mobileView.css'


const  MobileView =({isOpen, toggleMenu}) =>{
    return (
        <div 
        className={`menu-btn ${isOpen ? "active" : ""}`}
        onClock={toggleMenu}
        >

<div className="container-mobile">
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

           

        </div>

        </div>

    )
}
export default MobileView;
