import React from 'react';
import './CallToAction.CSS';
import callToAct_background from '../images/callToAct_background.jpg';

function CallToAction() {
  return (
    <div className='CallToAction' style={{backgroundImage: `url(${callToAct_background})`}} >
        <div className='overlay'></div>
        <div className='callToAct-content'>
            <h1>Ready To Start A New Project With Us?</h1>
            <p>We strive to build lasting friendships and business relations based on a quality service.</p>
            <a href="">
                <button className='button1'>Contact Us</button>
            </a>
        </div>
    </div>
  )
}

export default CallToAction