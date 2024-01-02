import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import programsData from '../database/programsData';
import '../style/Programs.css';

const Programs = () => {
  return (
    <div
        className='programs-container'
        id='programs'
    >
        <div className="programs-header">
            <span className='outline-text'>Discover</span>
            <span>My Transformational</span>
            <span className='outline-text'>Programs</span>
        </div>

        <div className="programs-list">
            {programsData.map((program, index) => (
                <div className="program-category" key={index}>
                    <span
                        className='programs-category-icon'
                    >
                        {program.img}
                    </span>
                    <span
                        className='programs-category-header'
                    >
                        {program.header}
                    </span>
                    <span
                        className='programs-category-details'
                    >
                        {program.details}
                    </span>
                    <div className="get-info">
                        <span>
                            Get Info
                        </span>
                        <FontAwesomeIcon icon={faRightLong} className='get-info-right-arrow' />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs;