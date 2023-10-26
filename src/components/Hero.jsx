import React from 'react';
import '../style/Hero.css'
import Header from'./Header.jsx';
import Promo from'./Promo.jsx';
import Experience from './Experience';
import Buttons from './Buttons';

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-hero">
            <Header />
            <Promo />
            <Experience />
            <Buttons />
        </div>
        <div className="right-hero">right</div>
    </div>
  )
}

export default Hero;