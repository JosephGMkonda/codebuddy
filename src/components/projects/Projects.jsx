import React from 'react'
import './Project.css'
import AdvApp from '../../assets/portfolioImg/AdvApp.png'
import BlissNova from '../../assets/portfolioImg/BlissNova.png'
import expenseApp from '../../assets/portfolioImg/expenseApp.jpg'
import Instafreak from '../../assets/portfolioImg/Instafreak.png'
import InvoiceApp from '../../assets/portfolioImg/InvoiceApp.png'
import MalHood from '../../assets/portfolioImg/MalHood.png'
import medicalApp from '../../assets/portfolioImg/medicalApp.png'
import NasFam from '../../assets/portfolioImg/NasFam.png'
import StockMangement from '../../assets/portfolioImg/StockMangement.png'
import TheMedicalApp from '../../assets/portfolioImg/TheMedicalApp.jpg'




function Projects(){
    return(
        <section id="projects">
            <div>
                <h1>My Projects</h1>

                <div className="containerPortfolio">
                    <div className="filter-button">
                        <button className="btn">All</button>
                        <button className="btn">Products</button>
                        <button className="btn">Mobile</button>
                        <button className="btn">Web App</button>

                    </div>

                    <div className="portfolio-gallery">
                        <div className='port-box'>
                            <div className='port-image'>
                            <img src={NasFam} alt='expenseapp' style={{ Width: '300px', height: '300px' }} />
                            </div>

                            <div class="port-content">
                                <h3>NasFam WebApp</h3>
                                <p>
                                    
                        "Nasfam" is a web app designed for streamlined rice 
                        production management. It simplifies tasks such as seed 
                        selection and harvest tracking, aiming to boost crop yield 
                        and sustainability.
                                </p>

                                <a href='https://github.com/JosephGMkonda/Nasfam'>GitHub</a>



                            </div>




                        </div>

                        <div className='port-box'>
                            <div className='port-image'>
                            <img src={MalHood} alt='expenseapp' style={{ Width: '300px', height: '300px' }} />
                            </div>

                            <div class="port-content">
                                <h3>MalHood TV</h3>
                                <p>
                                The website exclusively showcases Malawian movies, offering a diverse 
                                collection of films that highlight the culture, talent, and stories of Malawi. 
                                    
                    
                                </p>

                                <a href='https://github.com/JosephGMkonda/MalHood-TV'>GitHub</a>



                            </div>




                        </div>


                        <div className='port-box'>
                            <div className='port-image'>
                            <img src={TheMedicalApp} alt='expenseapp' style={{ Width: '300px', height: '300px' }} />
                            </div>

                            <div class="port-content">
                                <h3>Medical Service App</h3>
                                <p>
                                The Medical Service App is a pocket healthcare companion. 
                                Book appointments, access medical records, and consult with professionals—all in one place. 
                                Convenient, efficient, and aimed at improving  health journey.
                                </p>

                                <a href='https://github.com/JosephGMkonda/MedicalServiceApp'>GitHub</a>



                            </div>




                        </div>



                        <div className='port-box'>
                            <div className='port-image'>
                            <img src={AdvApp} alt='expenseapp' style={{ Width: '300px', height: '300px' }} />
                            </div>

                            <div class="port-content">
                                <h3>Viral View App</h3>
                                <p>
                                    
                                Meet our Social Marketing Mobile App: 
                                Your one-stop-shop for effortless advertising. 
                                Create, manage, and track campaigns with ease. 
                                Elevate your online presence and engage your audience like never before.
                                </p>

                                <a href='https://github.com/JosephGMkonda/viralviewFrontend'>GitHub</a>



                            </div>




                        </div>



                        <div className='port-box'>
                            <div className='port-image'>
                            <img src={expenseApp} alt='expenseapp' style={{ Width: '300px', height: '300px' }} />
                            </div>

                            <div class="port-content">
                                <h3>Expense Mobile App</h3>
                                <p>
                                Introducing our Personal Budgeting App: Take control of your finances effortlessly. 
                                Set budgets, track expenses, and achieve your financial goals—all in one place. 
                                Simplify your money management and make smarter financial decisions with ease
                                    
                        
                                </p>

                                <a href='https://github.com/JosephGMkonda/EaseExpense'>GitHub</a>



                            </div>




                        </div>


                    
                        <div className='port-box'>
                        
                            <div className='port-image'>
                            <img src={BlissNova} alt='expenseapp' style={{ Width: '300px', height: '300px' }} />
                            </div>

                            <div class="port-content">
                                <h3>Invoice WebApp</h3>
                                <p>
                                Streamline your invoicing process with our intuitive Invoice App.
                                </p>

                                <a href='https://github.com/JosephGMkonda/Nasfam'>GitHub</a>



                            </div>




                        </div>





                      


                       

                       

                    </div>

                </div>
            </div>
        </section>

    )
}

export default Projects