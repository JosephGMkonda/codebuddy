import React from 'react'
import './contactinfocard.css'



function ContactInfoCard({iconUrl, text}){
    return(
        <div className="contact-detail-card">
            <div className="icon">
                <img src={iconUrl} alt={text}/>

            </div>

            <p>{text}</p>
            
        </div>
    )
}

export default ContactInfoCard