import React from 'react';
import banner from '../images/banner.jpeg';
import './Banner.css';

function Banner() {
  return (
    <div className='banner section'>
        <img src={banner} alt="banner image" />
    </div>
  )
}

export default Banner