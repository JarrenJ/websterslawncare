import React from 'react';
import '../App.css';
import { Button } from './Button';
// import landingLogo from '../../public/images/landingLogo.jpg'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>WEBSTER'S LAWN CARE</h1>
      <p>"Your Lawn is Our Lawn"</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/quote'
        >
          Get Your Free Quote <i className="fas fa-envelope"></i>
        </Button>
        <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            path='/appointment'
        >
            Schedule Appointment <i className="fas fa-calendar-check"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
