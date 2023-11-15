import React from 'react';
import '../style/Pricing.css';
import pricingData from '../database/pricingData';
import check from '../assets/imgs/motivation-check.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

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
                    {plan.img}
                    <span>{plan.name}</span>
                    <span>{plan.price}</span>
                    <div className="plan-features">
                        {plan.features.map((feature, index)=> (
                            <div className="plan-feature">
                                <img src={check} alt="A checkmark bullet point" />
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
                    <button className="btn">
                        Contact 
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing;