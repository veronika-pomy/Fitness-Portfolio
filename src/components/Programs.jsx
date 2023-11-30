import React from 'react';
import '../style/Programs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import programsData from '../database/programsData';

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
            {programsData.map((program) => (
                <div className="program-category">
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
                    {/* TODO: add onclick event to prompt to either scroll to contact form, download a booklet, nav to a new page or open email box  */}
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