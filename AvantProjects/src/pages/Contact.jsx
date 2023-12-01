import React, { useState } from 'react';
import './Contact.css';

import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Banner from '../Components/Banner';
import PageHeading from '../Components/PageHeading';
import FooterSection from '../Components/FooterSection';

import call from '../icons/call.png';
import location from '../icons/location.png';
import email from '../icons/email.png';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    }

  return (
    <div className='contact-page'>
        <Header1 />
        <Header2 />
        <Banner />
        <div className='section'>
            <div className='contact-page-heading'>
                <PageHeading />
            </div>
            <div className='contact-page-paragraph'>
                <p>
                    We pride ourselves in our detailed quotations, superior service and highest quality of work. 
                    By using our existing expertise and experience, we will determine the cause of failure, 
                    with the ultimate objective to provide the cause.
                </p>
            </div>
            <div className='contact-page-contacts'>
                <div className='contact-choices'>
                    <div className='choice'>
                        <div className='contact-icon'>
                            <img src={call} alt="" />
                        </div>
                        <div className='contact-info'>
                            <h3>Telephone</h3>
                            <p>+27 463 374 9272</p>
                        </div>
                    </div>
                    <div className='choice'>
                        <div className='contact-icon'>
                            <img src={email} alt="" />
                        </div>
                        <div className='contact-info'>
                            <h3>Email</h3>
                            <p>avant@global.ac.za</p>
                        </div>
                    </div>
                    <div className='choice'>
                        <div className='contact-icon'>
                            <img src={location} alt="" />
                        </div>
                        <div className='contact-info'>
                            <h3>Head Office</h3>
                            <p>35 Heidelberg Road, Elspark, Germiston</p>
                        </div>
                    </div>
                </div>
                <div className='quick-email-contact'>
                    <div className='sectionHeading heading'>
                        <h1>Get in Touch</h1>
                        <p>Please provide a brief message</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-inputs'>
                            <label>Name:
                                <br />
                                <input 
                                type="text" 
                                value={name}
                                placeholder='Enter your name or company name here'
                                onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>Email:
                                <br />
                                <input 
                                type="text" 
                                placeholder='Enter your email or company email here'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>Subject:
                                <br />
                                <input 
                                type="text" 
                                value={name}
                                placeholder='Enter the type of service you require here'
                                onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <br /> 
                        <div className='textarea'>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" cols="20" rows="10" placeholder='Please tell us more about the type of service you require here'></textarea> 
                        </div>
                        <div className='form-button'>
                            <input type="submit" className='button2'/>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        <FooterSection />
    </div>
  )
}

export default Contact