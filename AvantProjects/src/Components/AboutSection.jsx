import React from 'react';
import grayBackground from '../images/grayBackground.jpg';
import working from '../images/working.jpeg'
import './AboutSection.css';

function AboutSection() {
  return (
    <div className='aboutSection section'>
        <div className='sectionHeading'>
            <h1>About Us</h1>
            <p>Avant Projects </p>
        </div>
        <div className='about'>
            <div className='about-image'>
                <div className='image img-background-shadow'>  
                </div>
                <div className='image'>
                    <img className='about-main-photo' src={working} alt="about image" />
                </div>
            </div>
            <div className='about-info'>
                <h3>Avant Projects Pty Ltd</h3>
                <p>
                    Our team of qualified and experienced professionals can be trusted, 
                    with all your Commercial, Industrial, and Residential projects.
                    <br />
                    <br />
                    When you choose Avant Projects, you are getting experienced, qualified, 
                    and innovative expertise. We have the knowledge and creativity, to turn 
                    your ideas into a reality. Your satisfaction is our number one priority. 
                    We strongly believe in building relationships, which last.
                </p>
                <a href="">
                    <button className='button2'>Read More About Us</button>
                </a>
            </div>
        </div>
        <div className='about-stats'>
            <div>
                <h1>35 +</h1>
                <p>Years Of Experience</p>
            </div>
            <div>
                <h1>1300 +</h1>
                <p>Projects Completed</p>
            </div>
            <div>
                <h1>870 +</h1>
                <p>Satisfied Clients</p>
            </div>
            <div>
                <h1>45 +</h1>
                <p>Active Workers</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection