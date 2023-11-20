import React, { useState } from 'react';
import '../style/Testimonials.css';
import { testinomialsData } from '../database/testimonialsData';
import leftArrow from '../assets/imgs/left-long-solid.svg';
import rightArrow from '../assets/imgs/right-long-solid.svg';


const Testimonials = () => {

  const [ selectedTestimonial, setTestimonial ] = useState(0);
  const numberOfTestiminials = testinomialsData.length;

  return (
    <div
      className='testimonials-container'
    >
      <div className="left-testimonials">
        <span>Testimonials</span>
        <span className='outline-text'>What my</span>
        <span>customers say</span>
        <span>
          {testinomialsData[selectedTestimonial].review}
        </span>
        <span className='testimonials-role'>
          <span className='testimonials-name'>
            {testinomialsData[selectedTestimonial].name}
          </span>
          , {testinomialsData[selectedTestimonial].role}
        </span>
      </div>
      <div className="right-testimonials">
        <div></div>
        <div></div>
        <img src={testinomialsData[selectedTestimonial].img} alt="Photo of Calvin's customer who's sharing a testimony about great service" className='testimonial-client-photo'/>
        <div className="carousel-arrows">
            <img 
              src={leftArrow} 
              alt="Left arrow for client testimonials" 
              className='carousel-arrow'
              onClick={() => (
                selectedTestimonial === 0 
                  ? setTestimonial(numberOfTestiminials - 1) 
                  : setTestimonial((prev) => prev - 1)
              )}
            />
            <img 
              src={rightArrow} 
              alt="Right arrow for client testimonials" 
              className='carousel-arrow'
              onClick={
                () => (
                  selectedTestimonial === numberOfTestiminials - 1 
                  ? setTestimonial(0) 
                  : setTestimonial((prev) => prev + 1)
              )} 
            />
          </div>
      </div>
    </div>
  )
}

export default Testimonials;