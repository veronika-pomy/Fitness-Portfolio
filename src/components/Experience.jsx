import { faDumbbell, faHeart, faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import '../style/Experience.css';

const Experience = () => {

    const transition = { type: 'spring', duration: 2 };

  return (
    <motion.div
        className='experience'
        transition={transition} initial={{ left: '-5rem' }} whileInView={{ left: '2em' }}
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
    </motion.div>
  )
}

export default Experience;