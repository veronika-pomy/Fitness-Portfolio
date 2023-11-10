import React from 'react';
import '../style/Motivation.css';
import img1 from '../assets/imgs/motivation-1.png'
import img2 from '../assets/imgs/motivation-2.png'
import img3 from '../assets/imgs/motivation-3.png'
import img4 from '../assets/imgs/motivation-4.png'
import check from '../assets/imgs/motivation-check.svg';
import partner1 from '../assets/imgs/motivation-partner-logo-1.svg';
import partner2 from '../assets/imgs/motivation-partner-logo-2.svg';
import partner3 from '../assets/imgs/motivation-partner-logo-3.svg';

// TOD0: issues with aligning images on larger screens in grid 

const Motivation = () => {
  return (
    <div
        className='motivation-container'
    >
        <div className="motivation-left">
            <img src={img1} alt="A closeup of a dumbbell rack" />
            <img src={img2} alt="An image of two people smiling standing next to a bench press" />
            <img src={img3} alt="A jogger stretching before a run" />
            <img src={img4} alt="A child and an instructor doing a martial arts routine" />
        </div>
        <div className="motivation-right">
            <span className="motivation-header">
                Motivation
            </span>
            <div className="motivation-text">
                <span className='outline-text'>Why </span>
                <span>train with me?</span>
            </div>
            
            <div className='motivation-details-right'>
                <div>
                    <img src={check} alt="A checkmark bullet point" className='check' />
                    <span>
                        Hundreds of satisfied customers
                    </span>
                </div>
                <div>
                    <img src={check} alt="A checkmark bullet point" className='check' />
                    <span>
                        Expert Jiu-Jitsu coach
                    </span>
                </div>
                <div>
                    <img src={check} alt="A checkmark bullet point" className='check' />
                    <span>
                        1 free personalized program for new starters
                    </span>
                </div>
                <div>
                    <img src={check} alt="A checkmark bullet point" className='check' />
                    <span>
                        Online training availble for flexible schedule
                    </span>
                </div>
            </div>
            <span className="motivation-partners">
                Partners
            </span>
            <div className="motivation-partners-list">
                <img src={partner1} alt="Logo of my first partner" />
                <img src={partner2} alt="Logo of my second partner" />
                <img src={partner3} alt="Logo of my third partner" />
            </div>
        </div>
    </div>
  )
}

export default Motivation;