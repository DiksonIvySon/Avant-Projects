import React, { useState } from 'react';
import './Projects.css';

import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Banner2 from '../Components/Banner2';
import FooterSection from '../Components/FooterSection';

//NATURES GARDEN PICTURES
import picture57 from '../images_projects/Picture57.jpg';
import picture58 from '../images_projects/Picture58.jpg';
import picture60 from '../images_projects/Picture60.jpg';
//TATA PICTURES
import picture0 from '../images_projects/Picture0.jpg';
import picture1 from '../images_projects/Picture1.jpg';
import picture3 from '../images_projects/Picture3.png';
//TIGER BRANDS PICTURES
import picture19 from '../images_projects/Picture19.jpg';
import picture20 from '../images_projects/Picture20.jpg';
import picture18 from '../images_projects/Picture18.jpg';
//MARLEY PICTURES (BREAK PAVING)
import picture21 from '../images_projects/Picture21.jpg';
import picture22 from '../images_projects/Picture22.jpg';
import picture23 from '../images_projects/Picture23.jpg';
//GEA PICTURES
import picture40 from '../images_projects/Picture40.jpg';
import picture39 from '../images_projects/Picture39.jpg';
import picture41 from '../images_projects/Picture41.jpg';
//SEEFFAM PICTURES
import picture51 from '../images_projects/Picture51.jpg';
import picture52 from '../images_projects/Picture52.jpg';
import picture53 from '../images_projects/Picture53.jpg';
//SEEFFAM PICTURES 
import picture7 from '../images_projects/Picture7.jpg';
import picture8 from '../images_projects/Picture8.jpg';
import picture9 from '../images_projects/Picture9.jpg';
//MARLEY PICTURES
import picture26 from '../images_projects/Picture26.jpg';
import picture27 from '../images_projects/Picture27.jpg';
import picture28 from '../images_projects/Picture28.jpg';
//MCCAIN PICTURES
import picture48 from '../images_projects/Picture48.jpg';
import picture49 from '../images_projects/Picture49.jpg';
import picture50 from '../images_projects/Picture50.jpg';
//GEA PICTURES
import picture42 from '../images_projects/Picture42.jpg';
import picture43 from '../images_projects/Picture43.jpg';
import picture44 from '../images_projects/Picture44.jpg';


function Projects(props) {

  return (
    <div className='projects-page'>
        <Header1 />
        <Header2 />
        <Banner2 heading="Projects"/>
        <div className='projects-page-projects-container section'>
            <div className='project-page-paragraph'>
                <p >
                    We pride ourselves in our detailed quotations, superior service and highest quality of work. 
                    By using our existing expertise and experience, we will determine the cause of failure, 
                    with the ultimate objective to provide the cause.
                </p>
            </div>
            <div className='projects-page-project'>
                <h1>Nature Garden</h1>
                <p>Glass enclosure for divided office spaces</p>
                <div class="scroll-container">
                    <img src={picture57} alt="Project Picture" />
                    <img src={picture58} alt="Project Picture" />
                    <img src={picture60} alt="Project Picture" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>TATA - ISANDO</h1>
                <p>Polyurethane floor coating</p>
                <div class="scroll-container">
                    <img src={picture0} alt="Project Picture" />
                    <img src={picture1} alt="Project Picture" />
                    <img src={picture3} alt="Project Picture" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>Tiger Brands</h1>
                <p>Built the perimeter wall</p>
                <div class="scroll-container">
                    <img src={picture19} alt="Project Picture" />
                    <img src={picture20} alt="Project Picture" />
                    <img src={picture18} alt="Project Picture" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>Marley</h1>
                <p>Brick Paving</p>
                <div class="scroll-container">
                    <img src={picture21} alt="Project Picture" />
                    <img src={picture22} alt="Project Picture" />
                    <img src={picture23} alt="Project Picture" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>GEA</h1>
                <p>Complete new plant (concrete, structural steel, insulation and mezzanine)</p>
                <div class="scroll-container">
                    <img src={picture40} alt="Project Picture" />
                    <img src={picture39} alt="Project Picture" />
                    <img src={picture41} alt="Project Picture" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>Seeffam</h1>
                <p>Press machine foundation and bund walls</p>
                <div class="scroll-container">
                    <img src={picture51} alt="Project Picture" />
                    <img src={picture52} alt="Project Picture" />
                    <img src={picture53} alt="Project Picture" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>Seeffam</h1>
                <p>Waterproofing</p>
                <div class="scroll-container">
                    <img src={picture7} alt="Project Picture" />
                    <img src={picture8} alt="Project Picture" />
                    <img src={picture9} alt="Project Picture" />
                </div>
            </div>
            <div className='projects-page-project'>
                <h1>Marly</h1>
                <p>Power floated concrete</p>
                <div class="scroll-container">
                    <img src={picture26} alt="Project Picture" />
                    <img src={picture27} alt="Project Picture" />
                    <img src={picture28} alt="Project Picture" />
                </div>
            </div>
            <div className='projects-page-project'>
                <h1>McCain</h1>
                <p>Plints cast floor repair and steel work</p>
                <div class="scroll-container">
                    <img src={picture48} alt="Project Picture" />
                    <img src={picture49} alt="Project Picture" />
                    <img src={picture50} alt="Project Picture" />
                </div>
            </div>
            <div className='projects-page-project'>
                <h1>GEA</h1>
                <p>Mezzanine floor cast and hand rails</p>
                <div class="scroll-container">
                    <img src={picture42} alt="Project Picture" />
                    <img src={picture43} alt="Project Picture" />
                    <img src={picture44} alt="Project Picture" />
                </div>
            </div>
        </div>
        <div className='projects-page-callToAction section'>
            <h1>Fulfil Your Unique Vision with Avant Projects</h1>
            <p>
                Every project differs from one to the next because everyone's 
                vision is unique. Do you have a construction project in mind?
            </p>
            <button className='button2'>Contact Us</button>
        </div>
        <FooterSection />
    </div>
  )
}

export default Projects