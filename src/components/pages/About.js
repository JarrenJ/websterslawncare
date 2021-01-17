import React from 'react';
import '../../App.css';
import '../Cards.css';

function AboutCard(props) {
    return (
        <li className='cards__item'>
            <div className='cards__item__link'>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text_about'>{props.text}</h5>
                </div>
            </div>
        </li>
    );
}

function About() {
  return (
      <>
        <h1 className='about'>About Us</h1>
          <div className='cards_about'>
              <div className='cards__container_about'>
                  <div className='cards__wrapper'>
                      <AboutCard
                          text='EST 2018. abc123'
                      />
                  </div>
              </div>
          </div>
      </>)
}

export default About
