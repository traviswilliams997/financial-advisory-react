import React from 'react'
import logo from './images/logo.png'

const Navbar = () => {
  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
              <img src ={logo} alt='logo' />
            </a>
            
        </nav>
        
    </div>
  )
}

export default Navbar