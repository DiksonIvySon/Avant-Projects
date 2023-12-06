import React, { useState } from 'react';
import './Projects.css';

import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Banner2 from '../Components/Banner2';
import CallToAction from '../Components/CallToAction';
import FooterSection from '../Components/FooterSection';


import hard_hat from '../images/hard_hat.png';
import working from '../images/working.jpeg';

function Projects() {

  return (
    <div className='projects-page'>
        <Header1 />
        <Header2 />
        <Banner2 />
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
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>TATA - ISANDO</h1>
                <p>Polyurethane floor coating</p>
                <div class="scroll-container">
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>Tiger Brands</h1>
                <p>Built the perimeter wall</p>
                <div class="scroll-container">
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>Marley</h1>
                <p>Break Paving</p>
                <div class="scroll-container">
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>GEA</h1>
                <p>Complete new plant (concrete, structural steel, insulation and mezzanine)</p>
                <div class="scroll-container">
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>Seeffam</h1>
                <p>Press machine foundation and bund walls</p>
                <div class="scroll-container">
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                </div>
            </div> 
            <div className='projects-page-project'>
                <h1>Seeffam</h1>
                <p>Torch on waterproofing</p>
                <div class="scroll-container">
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                </div>
            </div>
            <div className='projects-page-project'>
                <h1>Marly</h1>
                <p>Power floated concrete</p>
                <div class="scroll-container">
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                </div>
            </div>
            <div className='projects-page-project'>
                <h1>McCain</h1>
                <p>Plints cast floor repair and steel work</p>
                <div class="scroll-container">
                    <img src={working} alt="" />
                    <img src={working} alt="" />
                    <img src={working} alt="" />
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