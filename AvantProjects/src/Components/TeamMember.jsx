import React from 'react';
import './TeamMember.css';
import tra_person from '../images/tra_person.png';




function TeamMember() {

  return (
    <div className='team-member'>
        <div className="card">
            <div className='team-member-image'>
                <img src={tra_person} alt="Team member image" />
            </div>
            <div className="container">
                <h2>Andre Van Tonder</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>15 years of construction industry experience</p>
            </div>
        </div>
    </div>
  )
}

export default TeamMember