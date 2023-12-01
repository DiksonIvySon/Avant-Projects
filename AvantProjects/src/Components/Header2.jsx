import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header2.css';
import logo from '../images/logo.jpeg' 

function Header2() {
  const [toggleHam_icon, setToggleHam_icon] = useState("close");
  const [verticalMenu, setVerticalMenu] = useState("hide");
  const [logoState, setLogoState] = useState("company-logo");

  const HandleToggleHam = () => {
    if (toggleHam_icon === "close") {
        setToggleHam_icon("open");
        setVerticalMenu("")
        setLogoState("company-logo-hide")
    }
    else {
        setToggleHam_icon("close");
        setVerticalMenu("hide")
        setLogoState("company-logo")
    }
  }

  return (
    <div className='header2'>
        <div className={logoState}>
            <img src={logo} alt="logo image" />
        </div>
        <div id="main-nav" className={verticalMenu} >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="">Services</Link></li>
                <li><Link to="">Projects</Link></li>
                <li><Link to="contact">Contact</Link></li>
          </ul>
            <div className='get_a_quote-button'>
                <a href="">
                    <button className='button1'>Get A Quote</button>
                </a>
            </div>
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