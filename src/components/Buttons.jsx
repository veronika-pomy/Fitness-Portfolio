import React from 'react';
import { Link } from 'react-scroll';
import '../style/Buttons.css';

const Buttons = () => {
  return (
    <div
      className='hero-btns'
    >
      <button className="btn">
        <Link spy={true} span={'true'} smooth={true} to='pricing'>Get Started</Link>
      </button>
      <button className="btn">
        <Link spy={true} span={'true'} smooth={true} to='programs'>Learn More</Link>
      </button>
    </div>
  )
}

export default Buttons;