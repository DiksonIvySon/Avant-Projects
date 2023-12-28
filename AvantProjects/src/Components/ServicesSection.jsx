import React from 'react';
import { Link } from "react-router-dom";
import './ServicesSection.css';
import commercial from '../icons/commercial.png';
import industrial from '../icons/industrial.png';
import infrastructural from '../icons/infrastructural.png';
import residential from '../icons/residential.png';


function ServicesSection() {
  return (
    <div className='services-section'>
        <div className='section'>
            <div className='services-info'>
                <div className='sectionHeading heading'>
                    <h1>Our Services</h1>
                    <p>Avant Projects </p>
                </div>
                <p>
                    To the best of our abilities and in good faith, we strive to carry out the obligations and tasks 
                    related to our mission. In order to fulfill the aspiration of a national company and establish a 
                    company culture that values respect for one another, we must first construct a platform that will 
                    allow us to reach and serve everyone in South Africa.
                </p>
                <Link to="/services">
                    <button className='button1 '>View Services in Detail</button>
                </Link>
            </div>
            <div className='services-sectors'>
                <div>
                    <div className='sector-image-container'>
                        <img src={residential} alt="construction sector" />
                    </div>
                    <h3>
                        Residential Construction
                    </h3>
                    <p>
                        Constructing a single or multi-family house for beauty, comfort, utility, and durability. 
                        We believe residential buildings should provide a comfortable and safe space.
                    </p>
                </div>
                <div className='industrial-construction'>
                    <div className='sector-image-container'>
                        <img src={industrial} alt="construction sector" />
                    </div>
                    <h3>Industrial Construction</h3>
                    <p>
                        building, repairing, renovating, and maintaining infrastructures such as factories, power plants, 
                        warehouses, and other highly specialized facilities.
                    </p>
                    <div className='specialization'>
                        <p>Specialization</p>
                    </div>
                </div>
                <div>
                    <div className='sector-image-container'>
                        <img src={infrastructural} alt="construction sector" />
                    </div>
                    <h3>Infrastructural Construction</h3>
                    <p>
                        construction, renovation, and maintenance of public and private physical structures such as roads, 
                        paving, tar and walls.
                    </p>
                </div>
                <div>
                    <div className='sector-image-container'>
                        <img src={commercial} alt="construction sector" />
                    </div>
                    <h3>Commercial Construction</h3>
                    <p>
                        building, or renovating commercial structures that can be leased or sold as office spaces, storage 
                        shelters, or even warehouses.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesSection