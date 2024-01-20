import React, { useState } from 'react';
import '../style/Join.css';

const Join = () => {

    const [ email, setEmail ] = useState('');
    const [ welcome, setWelcome ] = useState(false);
    const [ error, setError ] = useState(false);

    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const sendEmail = (e) => {
        e.preventDefault(e);
        if(email && emailValidation.test(String(email).toLowerCase())) {
            console.log("Welcome email sent.");
            setError(false);
            setWelcome(true);
            setEmail('');
        } else {
            setError(true);
            setWelcome(false);
        }
    }

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
                onSubmit={sendEmail}
                className="email-container"
            >
                <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className='btn btn-join'
                >
                   Get in touch
                </button>
            </form>
            {welcome && !error && 
                <p className='message'>Thank you for your interest! <br /> I look forward to working with you.</p>
            }
            {error && !welcome &&
                <p className='message'>Unexpected error. Please check your email and try again.</p>
            }
        </div>
    </div>
  )
}

export default Join;