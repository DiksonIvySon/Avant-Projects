import React from 'react';
import './TeamMember.css';
import tra_person from '../images/tra_person.png';




function TeamMember() {
  return (
    <div className='team-member'>
        <div class="card">
            <div className='team-member-image'>
                <img src={tra_person} alt="Team member image" />
            </div>
            <div class="container">
                <h2>Andre Van Tonder</h2>
                <p class="title">CEO &amp; Founder</p>
                <p>Some text that describes me.</p>
            </div>
        </div>
    </div>
  )
}

export default TeamMember