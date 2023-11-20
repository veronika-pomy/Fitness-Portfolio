import React, { useRef } from 'react';
import '../style/Join.css';

const Join = () => {

    const emailForm = useRef();

  return (
    <div className='join-container'>
        <div className="left-join">
            <hr />
            <div>
                <span>Ready To </span>
                <span className='outline-text'>Level Up <span>?</span></span>
            </div>
        </div>
        <div className="right-join">
            <form 
                action="submit"
                ref={emailForm} 
                className="email-container"
            >
                <input 
                    type="email"
                    name='email'
                    placeholder='Your Email'
                />
                <button
                    className='btn btn-join'
                >
                   Get in touch
                </button>
            </form>
        </div>
    </div>
  )
}

export default Join;