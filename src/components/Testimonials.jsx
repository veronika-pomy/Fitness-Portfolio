import { motion } from 'framer-motion';
import React, { useState } from 'react';
import rightArrow from '../assets/imgs/right-long-solid.svg';
import { testinomialsData } from '../database/testimonialsData';
import '../style/Testimonials.css';

const Testimonials = () => {

  const [ selectedTestimonial, setTestimonial ] = useState(0);
  const numberOfTestiminials = testinomialsData.length;

  const transition = { type: 'spring', duration: 1 };

  return (
    <div
      className='testimonials-container'
      id='testimonials'
    >
      <div className="left-testimonials">
        <span>Testimonials</span>
        <span className='outline-text'>What my</span>
        <div>
          <span>customers say</span>
          <img 
              src={rightArrow} 
              alt="Arrow for client testimonials" 
              className='carousel-arrow'
              onClick={
                () => (
                  selectedTestimonial === numberOfTestiminials - 1 
                  ? setTestimonial(0) 
                  : setTestimonial((prev) => prev + 1)
              )} 
        />
        </div>
        <motion.span
          key={selectedTestimonial}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{...transition, duration: 2 }}
        >
          {testinomialsData[selectedTestimonial].review}
        </motion.span>
        <span className='testimonials-role'>
          <span className='testimonials-name'>
            {testinomialsData[selectedTestimonial].name}
          </span>
          , {testinomialsData[selectedTestimonial].role}
        </span>
      </div>
      <div className="right-testimonials">
        <motion.div
          transition={transition}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 25}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.img 
          key={selectedTestimonial}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{...transition, duration: 2 }}
          src={testinomialsData[selectedTestimonial].img} 
          alt="A photo of a customer who's sharing a testimony about a great fitness journey" 
          className='testimonial-client-photo'
        />
      </div>
    </div>
  )
}

export default Testimonials;