import React from 'react';
import { Link } from 'react-scroll';
import planCheck from '../assets/imgs/plan-check.svg';
import pricingData from '../database/pricingData';
import '../style/Pricing.css';

const Pricing = () => {
  return (
    <div className='pricing-container' id='pricing'>
        {/* color gradient */}
        <div className="blur pricing-blur-left"></div>
        <div className="blur pricing-blur-right"></div>
        <div className="pricing-header">
            <span>Begin </span>
            <span className='outline-text'>your journey </span>
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
                            <div className="plan-feature" key={index}>
                                <img src={planCheck} alt="A checkmark bullet point" className='plan-check' />
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
                    </div>
                    <button className="btn pricing-btn">
                        <Link spy={true} span={'true'} smooth={true} to='join' >Contact</Link>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing;