import React from 'react';
import '../style/Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faHeart, faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div
        className='experience'
    >
        <div>
            <span>
                <FontAwesomeIcon icon={faDumbbell} />
            </span>
            <span>Body Sculpting</span>
        </div>
        <div>
            <span>
                <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>Cardio Training</span>
        </div>
        <div>
            <span>
                <FontAwesomeIcon icon={faMedal} />
            </span>
            <span>Martial Arts</span>
        </div>
    </div>
  )
}

export default Experience;