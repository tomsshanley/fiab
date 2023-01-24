import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact'>
      <h3>Contact</h3>
      <form action="POST">
        <div className="form-group">
          <label htmlFor='name'>Name: </label>
          <input type="text" className='form-control'/>
        </div>
        <div className="form-group">
          <label htmlFor='exampleInputEmail'>Email: </label>
          <input type="text" className='form-control'/>
        </div>
        <div className="form-group">
          <label htmlFor='message'>Message: </label>
          <input type="text" className='form-control'/>
        </div>
      </form>
      <p>&#169; FIAB Management Inc. 2022</p>
    </div>
  )
}

export default Contact