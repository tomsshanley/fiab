import React, {useState} from 'react'
import {Link} from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'

import logo from '../../assets/logo.png'
import './Nav.css'

const Nav = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  return (
    <div className='header '>
      <nav className="navbar grid">
        {/* Logo */}
        <a href='/' className='logo'>
          <img src={logo} alt='logo' />
          <h1 id='title'>FIAB</h1>
        </a>
        
        {/* Hamburger function */}
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to="showcase" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>home</Link>
          </li>
          <li className='nav-item'>
            <Link to="players" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>players</Link>
          </li>
          <li className='nav-item'>
            <Link to="fixture" spy={true} smooth={true} offset={-95} duration={500} onClick={closeMenu}>fixture</Link>
          </li>
          <li className='nav-item'>
            <Link to="ladder" spy={true} smooth={true} offset={-95} duration={500} onClick={closeMenu}>ladder</Link>
          </li>
          <li className='nav-item'>
            <Link to="contact" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav