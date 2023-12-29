import React from 'react';
import '../style/Buttons.css';
import { Link } from 'react-scroll';

const Buttons = () => {
  return (
    <div
      className='hero-btns'
    >
      <button className="btn">
        <Link spy={true} span={'true'} smooth={true} to='pricing' >Get Started</Link>
      </button>
      <button className="btn">
        <Link spy={true} span={'true'} smooth={true} to='programs' >Learn More</Link>
      </button>
    </div>
  )
}

export default Buttons;