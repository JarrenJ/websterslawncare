import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';
// import {Link} from "react-router-dom";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of the services we offer</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/*<Link to='/services/lawn'>*/}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <CardItem
                      // src='images/lawn-svg.svg'
                      src='images/lawnServices.jpg'
                      text='Lawn Services'
                      label=''
                      // path='/services/lawn'
                      // lawn
                    />
                  </div>
                  <div className="flip-card-back">
                    <ul style={{listStyleType: 'none'}}>
                      {/*<li className='space'>Commercial & Residential</li>*/}
                      <li className='space'>Custom cutting and stripping</li>
                      <li className='space'>Trimming of edges and borders</li>
                      <li className='space'>Clean up all clippings from beds, walkways, and driveways</li>
                    </ul>
                    <br />
                    <Button
                        className='btns'
                        buttonStyle='btn--invert'
                        buttonSize='btn--large'
                        path='/services/lawn'
                    >
                      See More!
                    </Button>
                  </div>
                </div>
              </div>
            {/*</Link>*/}
            {/*<Link to='/services/landscape'>*/}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <CardItem
                      // src='images/landscape-svg.svg'
                      src='images/landscapeCard.jpg'
                      text='Landscape Services'
                      label=''
                      path='/services/landscape'
                      // landscape
                    />
                  </div>
                  <div className="flip-card-back">
                    <ul style={{listStyleType: 'none'}}>
                      <li className='space'>Landscape design</li>
                      <li className='space'>Reconstruction of existing beds</li>
                      {/*<li className='space'>Design landscape beds</li>*/}
                      {/*<li className='space'>Reconstruct landscape beds</li>*/}
                    </ul>
                    <br />
                    <Button
                        className='btns'
                        buttonStyle='btn--invert'
                        buttonSize='btn--large'
                        path='/services/landscape'
                    >
                      See More!
                    </Button>
                  </div>
                </div>
              </div>
            {/*</Link>*/}
            {/*<Link to='/services/snow'>*/}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <CardItem
                        // src='images/snow-svg.svg'
                        src='images/snowCard.jpg'
                        text='Snow Removal'
                        label=''
                        // path='/services/snow'
                        //snow
                    />
                  </div>
                  <div className="flip-card-back">
                    <ul style={{listStyleType: 'none'}}>
                      <li className='space'>Commercial and Residential</li>
                      <li className='space'>Laying salt</li>
                      <li className='space'>Clearing walkways</li>
                      <li className='space'>Clearing parking lots</li>
                    </ul>
                    <br />
                    <Button
                        className='btns'
                        buttonStyle='btn--invert'
                        buttonSize='btn--large'
                        path='/services/snow'
                    >
                      See More!
                    </Button>
                  </div>
                </div>
              </div>
            {/*</Link>*/}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <CardItem
                      // src='images/snow-svg.svg'
                      src='images/cleanup.jpg'
                      text='Fall/Spring Cleanup'
                      label=''
                      // path='/services/snow'
                      //snow
                  />
                </div>
                <div className="flip-card-back">
                  <ul style={{listStyleType: 'none'}}>
                    <li className='space'>Leaf pickup</li>
                    <li className='space'>Sticks and brush cleanup</li>
                    <li className='space'>Collecting and hauling debris out of landscape beds</li>
                    {/*<li className='space'>Thing 4</li>*/}
                  </ul>
                  <br />
                  <Button
                      className='btns'
                      buttonStyle='btn--invert'
                      buttonSize='btn--large'
                      path='/services/cleanup'
                  >
                    See More!
                  </Button>
                </div>
              </div>
            </div>
          </ul>
          {/*<ul className='cards__items'>*/}
          {/*  <CardItem*/}
          {/*    src='images/img-3.jpg'*/}
          {/*    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'*/}
          {/*    label='Label'*/}
          {/*    path='/services'*/}
          {/*  />*/}
          {/*  <CardItem*/}
          {/*    src='images/img-4.jpg'*/}
          {/*    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'*/}
          {/*    label='Label'*/}
          {/*    path='/products'*/}
          {/*  />*/}
          {/*  <CardItem*/}
          {/*    src='images/img-8.jpg'*/}
          {/*    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'*/}
          {/*    label='Label'*/}
          {/*    path='/sign-up'*/}
          {/*  />*/}
          {/*</ul>*/}
        </div>
      </div>
    </div>
  );
}

export default Cards;
