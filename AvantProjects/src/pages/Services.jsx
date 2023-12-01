import React from 'react'
import './Services.css';

import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Banner from '../Components/Banner';
import PageHeading from '../Components/PageHeading';
import ServicesSection from '../Components/ServicesSection';
import CallToAction from '../Components/CallToAction';
import FooterSection from '../Components/FooterSection';

import working from '../images/working.jpeg';

function Services() {
  return (
    <div className='services '>
        <Header1 />
        <Header2 />
        <Banner />
        <div className='services-heading'>
            <PageHeading />
        </div>
        <div className='section'>
            <div className='industrial-section'>
                <div className='industrial-info'>
                    <h1>Avant Projects</h1>
                    <h1 className='industrial-specialists'>Industrial Construction Specialists</h1>
                    <h2>With  over <span>870+</span> satisfied clients</h2>
                    <p>
                        We have built a solid reputation over the past 35 years in Gauteng by providing 
                        excellent construction services at reasonable costs. We have construction managers 
                        who are prepared to take on your next construction project.
                    </p>
                    <button className='button1'>Contact Us</button>
                </div>
                <div className='industrial-images'>
                    <div className='industrial-image1'>
                        <img src={working}  alt="industrial image" />
                    </div>
                    <div className='industrial-image2'>
                        <img src={working} alt="industrial image" />
                    </div>
                </div>
            </div>
        </div>
        <div className='servicesBody'> 
        <ServicesSection />
        <CallToAction />
        <FooterSection />
        </div>
    </div>
  )
}

export default Services