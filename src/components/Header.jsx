import React from 'react';
import '../style/Header.css';
import Logo from '../assets/imgs/logo-1.png';

const Header = () => {
  return (
    <div className="header">
        <img 
            src={Logo} 
            alt="Calvin Waid Fitness Logo" 
            className='logo'
        />
        <ul 
            className='menu'
        >
            <li className="home">Home</li>
            <li className="programs">Programs</li>
            <li className="about">About</li>
            <li className="plans">Plans</li>
            <li className="testimonials">Testimonials</li>
        </ul>
    </div>
  )
}

export default Header