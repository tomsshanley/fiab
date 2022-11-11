import React from 'react'
import './Players.css'
// import profile1 from '../../assets/rj.png'
import { FaUserAlt } from 'react-icons/fa'


const Players = () => {
  return (
    <div id="players">
      <h1 id='players-title'>PLAYERS</h1>
      <div className='player-profiles'>
      <div id="profile1">
        {/* <img className='profile-image' src={profile1}></img> */}
        <FaUserAlt size={200} className='profile-image'/>
        <h3 className='profile-name'>Players Name</h3>
        <p className='profile-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum esse doloribus beatae porro aperiam at aliquam soluta repellat incidunt. Animi alias ducimus ut voluptate nisi repellendus mollitia ex aliquam.
        </p>
      </div>
      <div id="profile2">
        <FaUserAlt size={200} className='profile-image'/>
        <h3 className='profile-name'>Players Name</h3>
        <p className='profile-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum esse doloribus beatae porro aperiam at aliquam soluta repellat incidunt. Animi alias ducimus ut voluptate nisi repellendus mollitia ex aliquam.
        </p>
      </div>
      <div id="profile3">
        <FaUserAlt size={200} className='profile-image'/>
        <h3 className='profile-name'>Players Name</h3>
        <p className='profile-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum esse doloribus beatae porro aperiam at aliquam soluta repellat incidunt. Animi alias ducimus ut voluptate nisi repellendus mollitia ex aliquam.
        </p>
      </div>
      </div>
    </div>
  )
}

export default Players