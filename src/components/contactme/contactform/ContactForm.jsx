import React, {useRef,useState} from 'react'
import './contactform.css'
import emailjs from '@emailjs/browser';

function ContactForm(){
    const form = useRef();
    const [error, setError] = useState(null)


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_b9rq5yl', 'template_fwembqr', form.current, {
            publicKey: 'KavkinF3i8DYCdquw',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setError(false)

            },
            (error) => {
              console.log('FAILED...', error.text);
              setError(true)
              
            },
          );
      };

    return(
        <div className="contact-form-content">
            <form ref={form} onSubmit={sendEmail}>
                <div className="name-container">
                    <input type="text" name="fname" placeholder="First Name"/>
                    <input type="text" name="lname" placeholder="Last Name"/>

                </div>

                <input type="email" name="email" placeholder="Email"/>

                <textarea type="text" name="message" placeholder="Message" rows={3}/>

                <button>SEND</button>
                {error === false ? "Email sent Successfully wait for response." : ""}

            </form>
            
        </div>

    )
}

export default ContactForm  