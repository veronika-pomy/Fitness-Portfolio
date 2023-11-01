import React from 'react';
import '../style/Hero.css'
import Header from'./Header.jsx';
import Promo from'./Promo.jsx';
import Experience from './Experience';
import Buttons from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-hero">
            <Header />
            <Promo />
            <Experience />
            <Buttons />
        </div>
        <div className="right-hero">
          <button className="btn btn-main">
            Contact Now
          </button>
          <div className="certificate">
            <FontAwesomeIcon icon={faCertificate} className='hero-icon'/>
            <span>Certified</span>
            <span>Personal</span>
            <span>Trainer</span>
          </div>
        </div>
    </div>
  )
}

export default Hero;