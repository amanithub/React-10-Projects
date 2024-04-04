import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  
  return (
    <nav className={`${styles.Navbar} container`}>
    <div className='logo'>
        <img src='./logo.png' alt='logo'></img>
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
    </ul>
    </nav>
  )
}

export default Navbar