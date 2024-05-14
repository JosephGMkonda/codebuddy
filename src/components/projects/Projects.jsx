import React, { useRef } from 'react';
import './Project.css';
import { PortfolioData } from '../../utils/Data';
import Slider from "react-slick";


function Projects() {
    const slideRef = useRef();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
      };
        
       

    const slideRight = () => {
        slideRef.current.slickNext();
    };

    const slideLeft = () => {
        slideRef.current.slickPrev();
    };

    const Project = ({ project }) => {
        const goToGitHubRepo = (githubLink) => {
            window.open(githubLink, "_blank"); 
        };

        return (
            <div key={project.title} className="project-card">
                <div className="container">
                    <div className="wrapper">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className={
                                project.title === "NasFam WebApp" ? "nasfam-image" :
                                project.title === "MalHood TV" ? "malhood-image" :
                                project.title === "Viral View App" ? "ViralView-image" :
                                project.title === "Expense Mobile App" ? "Expense-image" : 
                                project.title === "Invoice WebApp" ? "InvoiceApp": ""
                            }
                        />
                        <div className="project-text">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <button onClick={() => goToGitHubRepo(project.githubLink)}>GitHub Link</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="projects">
            <h5 className="Myworks">My Works</h5>
            
           

            <Slider {...settings}>
                {PortfolioData.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </Slider>
        </section>
    );
}

export default Projects;
