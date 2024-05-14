
import frontendicon from '../assets/frontendicon.png';
import backendicon from '../assets/backendicon.png';
import toolsicon from '../assets/toolsicon.png';
import softskillicon from '../assets/softskillicon.png';



import AdvApp from '../assets/portfolioImg/AdvApp.png'
import BlissNova from '../assets/portfolioImg/BlissNova.png'
import expenseApp from '../assets/portfolioImg/expenseApp.jpg'
import Instafreak from '../assets/portfolioImg/Instafreak.png'
import InvoiceApp from '../assets/portfolioImg/InvoiceApp.png'
import MalHood from '../assets/portfolioImg/MalHood.png'
import medicalApp from '../assets/portfolioImg/medicalApp.png'
import NasFam from '../assets/portfolioImg/NasFam.png'
import StockMangement from '../assets/portfolioImg/StockMangement.png'
import TheMedicalApp from '../assets/portfolioImg/TheMedicalApp.jpg'


export const SKILLSData = [
    {
        title: "Frontend",
        icon:frontendicon,
        skills: [
            {skill: "HTML5",percentage: "95%"},
            {skill: "CSS3 (Sass/SCSS)",percentage: "90%"},
            {skill: "JavaScript",percentage: "90%"},
            {skill: "ReactJs",percentage: "85%"},
            {skill: "Angular",percentage: "95%"},
        ]

    },

    {
        title: "Backend",
        icon:backendicon,
        skills: [
            {skill: "Spring Boot",percentage: "90%"},
            {skill: "Django",percentage: "95%"},
            {skill: "NodeJs",percentage: "85%"},
            {skill: "ExpressJs",percentage: "75%"},
            
        ]

    },
    {
        title: "Tools",
        icon:toolsicon,
        skills: [
            {skill: "Git & GitHub",percentage: "90%"},
            {skill: "Webpack",percentage: "70%"},
            {skill: "NoSQL DB",percentage: "75%"},
            {skill: "SQL DB",percentage: "90%"},
            
        ]

    },

    {
        title: "SoftSkills",
        icon:softskillicon,
        skills: [
            {skill: "Problem-solving",percentage: "90%"},
            {skill: "Collaboration",percentage: "95%"},
            {skill: "Attention to Details",percentage: "85%"},
            
            
        ]

    }

]



export const WORK_EXPERIENCE =[
    {
        title: "Information Systems Analyst at NRB (1 year)",
        date: "May 2023 - May 2024",
        responsibilities: [
            
            "Address network issues to improve communication between computers and servers effectively.",
            "Analyze existing systems and processes to identify areas for improvement and innovation.",
            "Conduct testing and validation activities to ensure system functionality and user satisfaction.",
            "Provide training and support to end-users, empowering them to leverage system capabilities effectively."
        ]
    },
    {
        title: "Freelancer programmer (2years)",
        date: "2022 - current",
        responsibilities: [
            "Understand client business needs and technical requirements.",
            "Develop tailored solutions using Python, Java, JavaScript.",
            "Utilize frameworks like Django, Flask, React, Angular.",
            "Design and develop responsive websites and web apps.",
            "Integrate front-end interfaces with back-end systems via RESTful APIs.",
            "Create native and cross-platform apps for iOS and Android.",
            "Design and implement SQL and NoSQL databases."
        ]
    },
    {
        title: "Internship at Dream Code Malawi",
        date: "2022 (3 months)",
        responsibilities: [
            "Developed and maintained backend services for a variety of web applications using Python, Django, and PostgreSQL.",
            "Developed backend services for Systems  using Spring Boot.",
            "Optimized backend systems for scalability and performance, implementing caching mechanisms and load balancing techniques to handle increasing user traffic.",
            "Collaborated with frontend developers to integrate backend services with user interfaces, ensuring seamless functionality and performance",
            
        ]
    }

]



export const PortfolioData = [
    {
        title: "NasFam WebApp",
        image: NasFam,
        desc: "Nasfam is a web app designed for streamlined rice production management. It simplifies tasks such as seed selection and harvest tracking, aiming to boost crop yield and sustainability."
    },
    {
        title: "MalHood TV",
        image: MalHood,
        desc: "The website exclusively showcases Malawian movies, offering a diverse collection of films that highlight the culture, talent, and stories of Malawi."
    },
    {
        title: "Medical Service App",
        image: TheMedicalApp,
        desc: "The Medical Service App is a pocket healthcare companion. Book appointments, access medical records, and consult with professionals—all in one place. Convenient, efficient, and aimed at improving  health journey."
    },
    {
        title: "Viral View App",
        image: AdvApp,
        desc: " Meet our Social Marketing Mobile App:one-stop-shop for effortless advertising. Create, manage, and track campaigns with ease. Elevate your online presence and engage your audience like never before."
    },
    
    {
        title: "Invoice WebApp",
        image: BlissNova,
        desc: "Streamline your invoicing process with our intuitive Invoice App."
    }

]