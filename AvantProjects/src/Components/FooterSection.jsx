import React from 'react';
import './FooterSection.css';
import logo from '../images/logo.jpeg';
import linkedIn from '../icons/linkedIn.png';
import facebook from '../icons/facebook.png';

function FooterSection() {
  return (
    <div className='footerSection'>
        <div className='section'>
            <div className='top-footer'>
                <div className='footer-info'>
                    <div className='footer-logo'>
                        <img src={logo} alt="Avant Projects logo" />
                    </div>
                    <a href="">
                        <button className='button1'>Get A Quote</button>
                    </a>
                    <div className='web-dev'>
                        <p>
                            Website designed, developed and maintained by
                        </p>
                        <a href="">
                            <h3>Dikson Manganye</h3>
                        </a>
                    </div>
                </div>
                <div className='quick-links'>
                    <h2>Quick Links</h2>
                    <div className='footer-links'>
                        <a href="">Home</a>
                        <hr />
                        <a href="">About Us</a>
                        <hr />
                        <a href="">Services</a>
                        <hr />
                        <a href="">Projects</a>
                        <hr />
                        <a href="">Contact Us</a>
                        <hr />
                    </div>
                </div>
                <div className='useful-links'>
                    <h2>Quick Links</h2>
                    <div className='footer-links'>
                        <a href="">Privacy Policy</a>
                        <hr />
                        <a href="">Terms and Conditions</a>
                        <hr />
                        <a href="">Company Verification</a>
                        <hr />
                    </div>
                </div>
                <div className='socials'>
                    <h2>Follow Us On</h2>
                    <div className='footer-links'>
                        <a href="">
                            <img src={facebook} alt="Facebook link icon" />
                        </a>
                        <a href="">
                            <img src={linkedIn} alt="linkedIn link icon" />
                        </a>
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