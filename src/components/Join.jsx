import React, { useRef } from 'react';
import '../style/Join.css';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(e);
       
    };

  return (
    <div className='join-container' id='join'>
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
                ref={form} 
                onSubmit={sendEmail}
                className="email-container"
            >
                <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    required
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