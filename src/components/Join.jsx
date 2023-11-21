import React, { useRef } from 'react';
import '../style/Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

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
                ref={form} 
                onSubmit={sendEmail}
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