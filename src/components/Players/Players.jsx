import React from 'react'
import './Players.css'
import profile1 from '../../assets/adin3.jpg'
import profile2 from '../../assets/logo.png'
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
          <strong>IPR Rank: </strong>1.02<br/> 
          <strong>Dominant Hand:</strong> Right <br />
          <strong>Strengths:</strong> Facebook friends with Ben Ratcliffe (WR271)<br/>
          Champion Player of Wednesday 2022 Spring Internal Comp Division 7. <br />
          <strong>Weaknesses: </strong>
        </p>
      </div>
      <div id="profile2">
        <div className="image-cropper">
          <img id='profile-pic2'src={profile2} alt={<FaUserAlt size={200} className='profile-image'/>} />
        </div>
        <h3 className='profile-name'>Thomas Shanley</h3>
        <p className='profile-text'>
        <div className="profile-dotpoints">
        <strong>IPR Rank: </strong><span className='profile-value'>0.34</span><br/> 
        <strong>Dominant Hand:</strong> Left<br />
        <strong>Strengths: </strong> <br />
        <strong>Weaknesses: </strong>Law enforcement
        </div>
        <div className="profile-bio">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error delectus, autem placeat, vel ullam non tempora itaque cumque commodi, voluptatum dignissimos ipsam explicabo dolorum quisquam. Sint ipsam labore nemo?</p>
        </div>
        </p>
      </div>
      <div id="profile3">
        <div className="image-cropper">
         <img id='profile-pic3'src={profile3} alt={<FaUserAlt size={200} className='profile-image'/>} />
        </div>
        <h3 className='profile-name'>Ronan Johnson</h3>
        <p className='profile-text'>
        <strong>IPR Rank: </strong>0.31<br/> 
        <strong>Dominant Hand:</strong> Right <br />
        <strong>Strengths: </strong> <br />
        <strong>Weaknesses: </strong>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Players