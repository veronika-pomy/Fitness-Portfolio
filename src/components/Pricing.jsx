import React from 'react';
import '../style/Pricing.css';
import pricingData from '../database/pricingData';
import elitePlanCheck from '../assets/imgs/elite-plan-check.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

// TODO: contact button should scroll down to the contact form

const Pricing = () => {
  return (
    <div className='pricing-container'>
        <div className="pricing-header">
            <span>Begin </span>
            <span className='outline-text'>your jounery </span>
            <span>today</span>
        </div>
        <div className="pricing-plans">
            {pricingData.map((plan, index) => (
                <div className='plan' key={index}>
                    <span className='plan-icon'>{plan.img}</span>
                    <span className='plan-name'>{plan.name}</span>
                    <span className='plan-price'>{plan.price}</span>
                    <div className="plan-features">
                        {plan.features.map((feature, index)=> (
                            <div className="plan-feature">
                                <img src={elitePlanCheck} alt="A checkmark bullet point" className='plan-check' />
                                <span key={index}>
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="get-info">
                        <span>
                            Discuss benefits
                        </span>
                        <FontAwesomeIcon icon={faRightLong} className='get-info-right-arrow' />
                    </div>
                    <button className="btn pricing-btn">
                        Contact 
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing;