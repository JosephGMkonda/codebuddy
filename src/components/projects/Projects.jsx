import React, { useRef } from 'react';
import './Project.css';
import { PortfolioData } from '../../utils/Data';
import Slider from "react-slick";

function Projects() {
    const slideRef = useRef();

    const set = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1, // Typo: It should be "slidesToScroll"
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
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
            
            <div className="experience-arrow-right" onClick={slideRight}>
                <span className="material-symbols-outlined">chevron_right</span>
            </div>
            
            <div className="experience-arrow-left" onClick={slideLeft}>
                <span className="material-symbols-outlined">chevron_left</span>
            </div>

            <Slider ref={slideRef} {...set}>
                {PortfolioData.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </Slider>
        </section>
    );
}

export default Projects;
