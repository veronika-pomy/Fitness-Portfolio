import React, { useState } from 'react';
import '../style/Header.css';
import Logo from '../assets/imgs/logo-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

// TODO: add close btn to the mobile menu

const Header = () => {

  const mobileScreen = window.innerWidth <= 768 ? true: false;
  const [ isMenuOpen, setOpenMenu ] = useState(false);

  return (
    <div className="header">
        <img 
            src={Logo} 
            alt="Calvin Waid Fitness Logo" 
            className='logo'
        />
        {(isMenuOpen === false && mobileScreen === true) ? 
          <div
            onClick={() => setOpenMenu(true)}
          >
            <FontAwesomeIcon icon={faBars} className='mobile-menu-bars' />
          </div>
          :
          <ul 
            className='menu'
          >
            <li className="home">
              <Link spy={true} span={true} smooth={true} to='hero' activeClass='active' onClick={() => setOpenMenu(false)}>Home</Link>
            </li>
            <li className="programs">
              <Link spy={true} span={true} smooth={true} to='programs' onClick={() => setOpenMenu(false)}>Programs</Link>
            </li>
            <li className="about">
              <Link spy={true} span={true} smooth={true} to='about' onClick={() => setOpenMenu(false)}>About</Link>
            </li>
            <li className="plans">
              <Link spy={true} span={true} smooth={true} to='plans' onClick={() => setOpenMenu(false)}>Plans</Link>
            </li>
            <li className="testimonials">
              <Link spy={true} span={true} smooth={true} to='testimonials' onClick={() => setOpenMenu(false)}>Testimonials</Link>
            </li>
        </ul>
        }
    </div>
  )
}

export default Header;