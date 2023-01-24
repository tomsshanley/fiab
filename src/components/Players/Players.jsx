import React from 'react'
import './Players.css'
import profile1 from '../../assets/adin3.jpg'
import profile2 from '../../assets/tom.jpg'
import profile3 from '../../assets/logo.png'
import { FaUserAlt } from 'react-icons/fa'


const Players = () => {
  return (
    <div id="players">
      <h1 id='players-title'>PLAYERS</h1>
      <div className='player-profiles'>
      <div id="profile1">
        <div className="image-cropper">
        <img id='profile-pic1'src={profile1} alt={<FaUserAlt size={200} className='profile-image'/>} />
        </div>
        <h3 className='profile-name'>Adin Baxter</h3>
        <p className='profile-text'>
          <strong>IPR Rank: </strong>1.22<br/> 
          <strong>Dominant Hand:</strong> Right <br />
          <strong>Strengths:</strong> Facebook friends with Ben Ratcliffe (WR271)<br/>
          Champion Player of Wednesday 2022 Spring Internal Comp Division 7. <br />
          <strong>Weaknesses: </strong>Female Receptionists
        </p>
      </div>
      <div id="profile2">
        <div className="image-cropper">
          <img id='profile-pic2'src={profile2} alt={<FaUserAlt size={200} className='profile-image'/>} />
        </div>
        <h3 className='profile-name'>Thomas Shanley</h3>
        <p className='profile-text'>
        <div className="profile-dotpoints">
        <strong>IPR Rank: </strong><span className='profile-value'>0.57</span><br/> 
        <strong>Dominant Hand:</strong> Left<br />
        <strong>Strengths: </strong>High mobilty, and he got a new racquet for christmas<br />
        <strong>Weaknesses: </strong>Law enforcement and trivia questions
        </div>
        <div className="profile-bio">
          <p></p>
        </div>
        </p>
      </div>
      <div id="profile3">
        <div className="image-cropper">
         <img id='profile-pic3'src={profile3} alt={<FaUserAlt size={200} className='profile-image'/>} />
        </div>
        <h3 className='profile-name'>Ronan Johnson</h3>
        <p className='profile-text'>
        <strong>IPR Rank: </strong>0.7<br/> 
        <strong>Dominant Hand:</strong> Right <br />
        <strong>Strengths: </strong>Sponsored by Marwan El Shorbagy <br />
        <strong>Weaknesses: </strong>Thought he was Sponsored by Mohamed El Shorbagy
        </p>
      </div>
      </div>
    </div>
  )
}

export default Players