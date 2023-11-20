import React from 'react';
import Headshot from '../assets/imgs/headshot.png';
import Background from '../assets/imgs/hero-background.png';
import '../style/Hero.css'
import Header from'./Header.jsx';
import Promo from'./Promo.jsx';
import Experience from './Experience';
import Buttons from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="hero-container">
        <div className="left-hero">
            <Header />
            <Promo />
            <Experience />
            <Buttons />
        </div>
        <div className="right-hero">
          <button className="btn btn-main">
            Contact now
          </button>
          <div className="certificate">
            <FontAwesomeIcon icon={faCertificate} className='hero-icon'/>
            <span>Certified</span>
            <span>Personal</span>
            <span>Trainer</span>
          </div>

          <img 
            src={Headshot} 
            alt="Personal trainer headshot" 
            className="hero-img" 
          />
          {/* <img 
            src={Background} 
            alt="Mesh background PNG Designed By 699pic, web link attributed in the readme file" 
            className="hero-img-background" 
          /> */}
        </div>
    </div>
  )
}

export default Hero;