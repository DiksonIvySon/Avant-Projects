import React from 'react';
import { Link } from "react-router-dom";
import banner from '../images/banner.jpeg';
import './Banner.css';

import logo from '../images/logo.png';

function Banner() {
  return (
    <div className='banner section'>
        <img src={banner} alt="banner image" />
        <div className='first-page-slogan'>
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
    </div>
  )
}

export default Banner