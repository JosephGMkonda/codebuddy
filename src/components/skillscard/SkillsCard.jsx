import React from "react";
import './skillscard.css'

function SkillsCard({title, iconUrl,isActive, onClick}) {
    return(
        <div
        className={`skills-card ${isActive ? "active" : " "}`}
        onClick={() => onClick()}
        >
            <div
            className="skills-icon">

            <img src={iconUrl} alt=""/>
            
             
            </div>
            <span>{title}</span>

            <div>
                
            </div>
            
        </div>


    )
}
export default SkillsCard