import { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

import working from '../images/working.jpeg'
import logo from '../images/logo.png';

import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Banner from '../Components/Banner';
import PageHeading from '../Components/PageHeading';
import AboutSection from '../Components/AboutSection';
import ServicesSection from '../Components/ServicesSection';
import CallToAction from '../Components/CallToAction';
import ProjectsSection from '../Components/ProjectsSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import QuestionSection from '../Components/QuestionSection';
import FooterSection from '../Components/FooterSection';

function Home() {
  

  return (
    <>
    <div className='firstPage'>
      <Header1 />
      <Header2 />
      <Banner/>
      <div className='first-page-slogan '>
        <div className='slogan-container'>
          <h1 className='slogan1'>Building The Future</h1>
          <h1 className='slogan2'>Restoring The Past</h1>
        </div>
        <div className='slogan-intro-container'>
          <div className='slogan-container-image'>
            <img src={logo} alt="" />
          </div>
          <div className='slogan-intro'>
            <p className='slogan-paragraph'>
              Our guiding principles are based on the goal of continuously exceeding our clients' expectations 
              via dependable response times, evident dedication, and genuine interest in the construction industry.
            </p>
            <Link to="/contact">
              <button className='contact-button button2'>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
      {/*<div className='home-heading'>
        <PageHeading />
  </div>*/}
      <div className='homeBody'>
        <AboutSection />
        <ServicesSection />
        <CallToAction />
        <ProjectsSection />
        <TestimonialsSection />
        <QuestionSection />
        <FooterSection />
      </div>
    </div>
    </>
  )
}

export default Home
