import React from 'react'
import logo from './images/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
              <img src ={logo} alt='logo' />
            </a>
            <div className='hamburger'>
                <FaBars />
            </div>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Testimonials</a>
                    <a href='/'>Demo</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar