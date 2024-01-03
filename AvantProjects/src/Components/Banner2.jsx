import React from 'react';
import './Banner2.css'; 
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

function Banner2({heading, pageTitleProp}) {
  return (
    <div className='banner2'>
        <div className='banner2-heading-container'>
        <div className='pageHeading-container'>
          <div className='pageHeading'>
                <h1>{heading}</h1>
                <p>Pty Ltd Gauteng</p>
            </div>
          </div>
        </div>
        <div className='banner2-link section'>
            <Link to="/">Home</Link>
            <div className='banner2-icon'>
                <FontAwesomeIcon icon={faGreaterThan} />
            </div>
            <p>{pageTitleProp}</p>
        </div>
        <hr className='banner2-long-line'/>
    </div>
  )
}

export default Banner2