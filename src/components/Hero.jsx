import React from 'react';
import '../style/Hero.css'
import Header from'./Header.jsx';
import Promo from'./Promo.jsx';

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-hero">
            <Header />
            <Promo />
        </div>
        <div className="right-hero">right</div>
    </div>
  )
}

export default Hero;