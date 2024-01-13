import React from 'react'
import './Header1.css'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

function Header1() {
  return (
    <div className='header1'>
        <div className='operating-times'>
            <p>Mon-Fri: 8.00AM - 5.00pm</p>
        </div>
        <div className='header1-socials'>
            <hr />
            <a href="">
                <FaFacebookSquare />
            </a>
            <hr />
            <a href="">
                <FaLinkedin />
            </a>
            <hr />
        </div>
    </div>
  )
}

export default Header1