import React from 'react'
import './home.css'
import profile from '../../assets/profile.jpg';
import angular from '../../assets/angularIcon.png';
import java from '../../assets/javaicon.png';
import js from '../../assets/jsicon.png';
import python from '../../assets/pythonicon.png';
import reactjs from '../../assets/reactjsicon.png';
import springboot from '../../assets/springboot.png';


function Home() {
    return(
      <section className='home-container'>
        <div className='home-content'>
            <h2>Welcome to My Coding Playground: Where Imagination Meets Innovation!</h2>
            <p>Passionate about problem-solving and clean code, 
                I craft software that exceeds expectations. 
                Dive into my world of innovation!</p>

        </div>
        
        <div className='home-img'>

        <div>

        <div className='tech-icon'>
        <img src={java} alt=""/>    
        </div>
        <img src={profile} alt=''/>
        </div>
         
         <div>
        <div className='tech-icon'>
        <img src={js} alt=""/>    
        </div>

        <div className='tech-icon'>
        <img src={angular} alt=""/>    
        </div>

        <div className='tech-icon'>
        <img src={python} alt=""/>    
        </div>

        <div className='tech-icon'>
        <img src={reactjs} alt=""/>    
        </div>
        <div className='tech-icon'>
        <img src={springboot} alt=""/>    
        </div>




        </div>
        
        </div>
        
      </section>

    )
}
export default Home;