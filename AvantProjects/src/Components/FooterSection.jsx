import React from 'react';
import { Link } from "react-router-dom";
import './FooterSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import logo from '../images/logo.jpeg';
import linkedIn from '../icons/linkedIn.png';
import facebook from '../icons/facebook.png';

function FooterSection() {
  return (
    <div className='footerSection'>
        <div className='section'>
            <div className='top-footer-section1'>
                <div className='footer-logo'>
                    <img src={logo} alt="Avant Projects logo" />
                </div>
                <div className='footer-company-verification'>
                    <h2>Business Registration</h2>
                    <p>Registration No: 1990/735267/13</p>
                    <p>SARS Tax No: 632772649</p>
                    <p>Level 1 (135% B-BBEE Procurement Recognition)</p>
                </div>
                <div>
                    <h2>Avant Projects</h2>
                    <p>
                        We have built a solid reputation over the past 35 years 
                        in Gauteng by providing excellent construction services 
                        at reasonable costs.
                    </p>
                    <a href="">
                        <button className='button1'>Get A Quote</button>
                    </a>
                </div>
            </div>
            <hr className='footer-long-line'/>
            <div className='top-footer-section2'>
                <div>
                    <h2>Contact Info</h2>
                    <div>
                        <p><span>Email:</span> avant@global.ac.za</p>
                        <p><span>Phone:</span> 099 896 6789</p>
                        <p><span>Office Hours: Monday/Friday <br /> 8:00AM -5:00PM</span></p>
                    </div>
                </div>
                <div className='quick-links'>
                    <h2>Quick Links</h2>
                    <div className='footer-links'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
                <div className='useful-links'>
                    <h2>Useful Links</h2>
                    <div className='footer-links footer-links-images'>
                        <a href="">
                            <img src={facebook} alt="facebook logo" />
                        </a>
                        <a href="">
                            <img src={linkedIn} alt="LinkedIn logo" />
                        </a>
                    </div>
                    <div className='web-dev'>
                        <p>
                            Website designed, developed and maintained by 
                            <br />
                            <a href="">
                                <h3>Dikson Manganye</h3>   
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom-footer'>
                <p><b>Copyright © 2023 Avant Projects (Pty) Ltd Gauteng</b></p>
        </div>
    </div>
  )
}

export default FooterSection