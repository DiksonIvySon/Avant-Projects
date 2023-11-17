import { useState } from 'react';
import './Home.css';
import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Banner from '../Components/Banner';
import PageHeading from '../Components/PageHeading';
import AboutSection from '../Components/AboutSection';

function Home() {
  

  return (
    <>
    <div className='firstPage'>
      <Header1 />
      <Header2 />
      <Banner />
      <div className='slogan-container'>
        <div className='sloganBox'>
          <h1 className='slogan1'>Building The Future</h1>
          <h1 className='slogan2'>Restoring The Past</h1>
          <p className='slogan-paragraph'>
            Our guiding principles are based on the goal of continuously exceeding our clients' expectations 
            via dependable response times, evident dedication, and genuine interest in the construction industry.
          </p>
          <a href="">
            <button className='contact-button'>Contact Us</button>
          </a>
        </div>
      </div>
      <div className='heading'>
        <PageHeading />
      </div>
      <AboutSection />
    </div>
    </>
  )
}

export default Home
