import React, { useState } from 'react';
import './Header2.css';
import logo from '../images/logo.jpeg'

function Header2() {
  const [toggleHam_icon, setToggleHam_icon] = useState("close");

  const HandleToggleHam = () => {
    if (toggleHam_icon === "close") {
        setToggleHam_icon("open");
    }
    else {
        setToggleHam_icon("close");
    }
  }

  return (
    <div className='header2'>
        <div className='company-logo'>
            <img src={logo} alt="logo image" />
        </div>
        <div id='main-nav' className='responsive'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className='get_a_quote-button'>
            <a href="">
                <button>Get A Quote</button>
            </a>
        </div>
        <div id="nav-icon" className={toggleHam_icon} onClick={HandleToggleHam}>
            <span></span>
            <span></span>
            <span></span>
         </div>
    </div>
  )
}

export default Header2