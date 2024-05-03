import React from 'react'
import './contactme.css'
import ContactInfoCard from '../contactinfocard/ContactInfoCard'
import Email from '../../assets/emailicon.png'
import Phone from '../../assets/phoneicon.png'
import GitHub from '../../assets/githubicon.png'

function ContactMe(){
    return(
       <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard
                iconUrl = {Email}
                 text = "josephmkonda1@gmail.com"

                />

                <ContactInfoCard
                iconUrl = {Phone}
                 text = "08889457565/0992786170"

                />

                
                <ContactInfoCard
                iconUrl = {GitHub}
                 text = "https://github.com/JosephGMkonda"

                />

            </div>
            <div style={{flex: 1}}></div>

        </div>
         
       </section>

    )
}

export default ContactMe