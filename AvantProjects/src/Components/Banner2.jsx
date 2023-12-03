import React from 'react';
import './Banner2.css'; 
import { Link } from "react-router-dom";

import PageHeading from './PageHeading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

function Banner2() {
  return (
    <div className='banner2'>
        <div className='banner2-heading-container'>
            <PageHeading />
        </div>
        <div className='banner2-link section'>
            <Link to="/">Home</Link>
            <div className='banner2-icon'>
                <FontAwesomeIcon icon={faGreaterThan} />
            </div>
            <p>Services</p>
        </div>
        <hr className='banner2-long-line'/>
    </div>
  )
}

export default Banner2