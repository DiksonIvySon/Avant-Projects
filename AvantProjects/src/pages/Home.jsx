import { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

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
