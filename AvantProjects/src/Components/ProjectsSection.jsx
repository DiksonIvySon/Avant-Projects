import React from 'react'
import './ProjectsSection.css'

//Image imports
import Picture1 from '../images_projects/Picture1.jpg';
import Picture11 from '../images_projects/Picture11.jpg';
import Picture6 from '../images_projects/Picture6.jpg';
import Picture18 from '../images_projects/Picture18.jpg';
import Picture23 from '../images_projects/Picture23.jpg';
import Picture30 from '../images_projects/Picture30.jpg';
import Picture36 from '../images_projects/Picture36.jpg';
import Picture54 from '../images_projects/Picture54.jpg';
import Picture60 from '../images_projects/Picture60.jpg';


function ProjectsSection() {
return (
    <div className='projectsSection'>
        <div className='heading sectionHeading'>
            <h1>Recent Projects</h1>
            <p>Avant Projects </p>
        </div>
        <div className='projectsSection-container section'>
            <div className='project-info'>
                <h1>Fulfil Your Unique Vision with <br /> <span>AVANT PROJECTS</span></h1>
                <p>
                    Every project differs from one to the next because everyone's vision is unique. 
                    Do you have a unique construction project in mind?
                </p>
                <a href="">
                    <button className='button2'>View More Projects</button>
                </a>
            </div>
            <div className='projects-container'>
                <div className='project'>
                    <img src={Picture1} alt="Project Picture" className="image" />
                    <div className="overlay-container">
                        <div className="text">Polyurethane Floor Coating 
                                         <hr />
                                         at<b> TATA - ISANDO</b>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img src={Picture6} alt="Project Picture" className="image" />
                    <div className="overlay-container">
                        <div className="text">Roofing
                                         <hr />
                                         at<b> mELCO - GERMISTON</b>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img src={Picture11} alt="Project Picture" className="image" />
                    <div className="overlay-container">
                        <div className="text">Concrete
                                         <hr />
                                         at<b> Distell Bethal</b>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img src={Picture23} alt="Project Picture" className="image" />
                    <div className="overlay-container">
                        <div className="text">Brick Paving
                                         <hr />
                                         at<b> Marley</b>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img src={Picture18} alt="Project Picture" className="image" />
                    <div className="overlay-container">
                        <div className="text">Perimeter Wall Build
                                         <hr />
                                         at<b> Tiger Brands</b>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img src={Picture30} alt="Project Picture" className="image" />
                    <div className="overlay-container">
                        <div className="text">Tar Work
                                         <hr />
                                         at<b> Tiger Brands</b>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img src={Picture36} alt="Project Picture" className="image" />
                    <div className="overlay-container">
                        <div className="text">Building Renovation
                                         <hr />
                                         at<b> GEA (now Kelvion)</b>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img src={Picture60} alt="Project Picture" className="image" />
                    <div className="overlay-container">
                        <div className="text">Glass Enclosure Offices
                                         <hr />
                                         at<b> Natures Garden</b>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img src={Picture54} alt="Project Picture" className="image" />
                    <div className="overlay-container">
                        <div className="text">Demolishion 
                                         <hr />
                                         at<b> Seefam</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectsSection