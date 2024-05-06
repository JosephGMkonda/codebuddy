import React, {useRef} from 'react'
import './workexperience.css'
import ExperienceCard from '../experiencecard/ExperienceCard'
import {WORK_EXPERIENCE} from '../../utils/Data'
import Slider from "react-slick";


function WorkExperience(){
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesTosScroll: 1,
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

    }

    const slightRight = () => {
        sliderRef.current.slickNext();
    }

    const slightLeft = () => {
        sliderRef.current.slickPrev();
    }
    return(
        <section id="work-experience"  className="work-experience-container">
            <h5>Work Experience</h5>
            <div className="experience-content">

                <div className="arrow-right" onClick={slightRight}>
                    <span class="material-symbols-outlined">chevron_right</span>

                </div>

                <div className="arrow-left" onClick={slightLeft}>
                    <span class="material-symbols-outlined">chevron_left</span>

                </div>


                <Slider ref={sliderRef} {...settings} >
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item}/>
            ))}
            </Slider>


            </div>
        </section>

    )
}
export default WorkExperience