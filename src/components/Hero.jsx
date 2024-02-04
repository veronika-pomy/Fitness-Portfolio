import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';
import Headshot from '../assets/imgs/headshot.png';
import '../style/Hero.css';
import Buttons from './Buttons';
import Experience from './Experience';
import Nav from './Nav.jsx';
import Promo from './Promo.jsx';

const Hero = () => {

  const transition = { type: 'spring', duration: 2 };

  return (
    <div className="hero-container" id='hero'>
        {/* color gradient  */}
        <div className="blur hero-blur"></div>
        <div className="left-hero">
            <Nav />
            <Promo />
            <Experience />
            <Buttons />
        </div>
        <div className="right-hero">
          <button className="btn btn-main">
            <Link spy={true} span={'true'} smooth={true} to='join' >Contact</Link>
          </button>
          <motion.div className="certificate" transition={transition} initial={{ right: '-1rem' }} whileInView={{ right: '5rem' }}>
            <FontAwesomeIcon icon={faCertificate} className='hero-icon'/>
            <span>Certified</span>
            <span>Personal</span>
            <span>Trainer</span>
          </ motion.div>
            <motion.img 
              src={Headshot} 
              alt="Personal trainer headshot" 
              className="hero-img" 
              transition={transition}
              initial={{ right: '-1rem' }} 
              whileInView={{ right: '12rem' }}
            />
        </div>
    </div>
  )
}

export default Hero;