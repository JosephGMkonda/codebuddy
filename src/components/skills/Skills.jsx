import React, {useState} from 'react'
import './skills.css'
import { SKILLSData } from '../../utils/Data'
import SkillsCard from '../skillscard/SkillsCard'
import SkillsInfoCard from '../skillsinfocard/SkillsInfoCard'


function Skills(){
    const [selectedSkills,setSelectedSkills] = useState(SKILLSData[0])

    const handleSelectedSkills = (data) => {
        setSelectedSkills(data)
    }

    return(
        <section id="skills" className="skills-container">
            <h5>Technical Proficiency</h5>

            <div className="skills-content">
                <div className="skills">
                {SKILLSData.map(item => (
                        <SkillsCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActivate={selectedSkills.title == item.title}
                            onClick={() => {
                                handleSelectedSkills(item);

                            }}
                        />
                    ))}
              
                
                </div>
                <div className='skills-info'>
                    <SkillsInfoCard
                    heading={selectedSkills.title}
                    skills ={selectedSkills.skills}
                    />

                </div>

            </div>
            
        </section>
    )
}

export default Skills