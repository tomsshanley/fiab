import React from 'react'
import './Fixture.css'

const Fixture = () => {
  return (
    <div className='fixture'>
      <h1 className='fixture-title'>FIXTURE</h1>
      <iframe title='Squash Fixture' className='embed-website' src='https://www.xpointsports.com/division/15847/draw#1'/>
    </div>
  )
}

export default Fixture
