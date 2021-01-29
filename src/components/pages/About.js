import React from 'react';
import '../../App.css';
import '../Cards.css';
import '../testimonials.css';
import { CardItemWithLabel } from "../CardItem";

// function AboutCard(props) {
//     return (
//         <li className='cards__item'>
//             <div className='cards__item__link'>
//                 <div className='cards__item__info'>
//                     <h5 className='cards__item__text_about'>{props.text}</h5>
//                 </div>
//             </div>
//         </li>
//     );
// }

function About() {
  return (
      <>
          <div className='about__container'>
            <h1 className='about'>About Us</h1>
              {/*<div className='cards_about'>*/}
              {/*    <div className='cards__container_about'>*/}
              {/*        <div className='cards__wrapper'>*/}
              {/*            <AboutCard*/}
              {/*                text='Established in 2018. We service both lenawee and Monroe counties. Servicing both residential and commercial properties. We will be your do it all lawn service as we can clear the snow off your driveway, cut lawn, prune and trim bushes, and take care of your fall/spring clean up. We strive to make your lawn the best looking on the block! '*/}
              {/*            />*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              <div className='about__text'>
                  <p>
                      Established in 2018. We service both Lenawee and Monroe counties.
                      Servicing both residential and commercial properties.
                      We will be your do it all lawn service as we can clear the snow off your driveway, cut your lawn, prune and trim your bushes,
                      and take care of your fall/spring clean up. We strive to make your lawn the best looking on the block!
                  </p>
              </div>
          </div>

          <div className='cards'>
              <h1>Meet our staff</h1>
              <div className='cards__container'>
                  <div className='cards__wrapper'>
                      {/*<ul className='cards__items'>*/}
                      {/*    /!*<Link to='/services/lawn'>*!/*/}
                      {/*    <div className="flip-card">*/}
                      {/*        <div className="flip-card-inner">*/}
                      {/*            <div className="flip-card-front">*/}
                      {/*                <CardItem*/}
                      {/*                    // src='images/lawn-svg.svg'*/}
                      {/*                    src='images/test.png'*/}
                      {/*                    text='Jamison'*/}
                      {/*                    // label='CEO'*/}
                      {/*                    // path='/services/lawn'*/}
                      {/*                    // lawn*/}
                      {/*                />*/}
                      {/*            </div>*/}
                      {/*            <div className="flip-card-back">*/}
                      {/*                <ul style={{listStyleType: 'none'}}>*/}
                      {/*                    /!*<li className='space'>Commercial & Residential</li>*!/*/}
                      {/*                    <li className='space'>CEO</li>*/}
                      {/*                    <li className='space'>Cool Guy</li>*/}
                      {/*                    <li className='space'>Jarren is a cool web dev</li>*/}
                      {/*                </ul>*/}
                      {/*                /!*<br />*!/*/}
                      {/*                /!*<Button*!/*/}
                      {/*                /!*    className='btns'*!/*/}
                      {/*                /!*    buttonStyle='btn--invert'*!/*/}
                      {/*                /!*    buttonSize='btn--large'*!/*/}
                      {/*                /!*    path='/services/lawn'*!/*/}
                      {/*                /!*>*!/*/}
                      {/*                /!*    See More!*!/*/}
                      {/*                /!*</Button>*!/*/}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*    /!*</Link>*!/*/}
                      {/*    /!*<Link to='/services/landscape'>*!/*/}
                      {/*    <div className="flip-card">*/}
                      {/*        <div className="flip-card-inner">*/}
                      {/*            <div className="flip-card-front">*/}
                      {/*                <CardItem*/}
                      {/*                    // src='images/landscape-svg.svg'*/}
                      {/*                    src='images/test.png'*/}
                      {/*                    text='Employee 1'*/}
                      {/*                    // label=''*/}
                      {/*                    // path='/services/landscape'*/}
                      {/*                    // landscape*/}
                      {/*                />*/}
                      {/*            </div>*/}
                      {/*            <div className="flip-card-back">*/}
                      {/*                <ul style={{listStyleType: 'none'}}>*/}
                      {/*                    <li className='space'>Position</li>*/}
                      {/*                    <li className='space'>Cool Fact</li>*/}
                      {/*                    /!*<li className='space'>Design landscape beds</li>*!/*/}
                      {/*                    /!*<li className='space'>Reconstruct landscape beds</li>*!/*/}
                      {/*                </ul>*/}
                      {/*                /!*<br />*!/*/}
                      {/*                /!*<Button*!/*/}
                      {/*                /!*    className='btns'*!/*/}
                      {/*                /!*    buttonStyle='btn--invert'*!/*/}
                      {/*                /!*    buttonSize='btn--large'*!/*/}
                      {/*                /!*    path='/services/landscape'*!/*/}
                      {/*                /!*>*!/*/}
                      {/*                /!*    See More!*!/*/}
                      {/*                /!*</Button>*!/*/}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*    /!*</Link>*!/*/}
                      {/*    /!*<Link to='/services/snow'>*!/*/}
                      {/*    <div className="flip-card">*/}
                      {/*        <div className="flip-card-inner">*/}
                      {/*            <div className="flip-card-front">*/}
                      {/*                <CardItem*/}
                      {/*                    // src='images/snow-svg.svg'*/}
                      {/*                    src='images/test.png'*/}
                      {/*                    text='Employee 2'*/}
                      {/*                    // label=''*/}
                      {/*                    // path='/services/snow'*/}
                      {/*                    //snow*/}
                      {/*                />*/}
                      {/*            </div>*/}
                      {/*            <div className="flip-card-back">*/}
                      {/*                <ul style={{listStyleType: 'none'}}>*/}
                      {/*                    <li className='space'>Position</li>*/}
                      {/*                    <li className='space'>Cool fact</li>*/}
                      {/*                </ul>*/}
                      {/*                /!*<br />*!/*/}
                      {/*                /!*<Button*!/*/}
                      {/*                /!*    className='btns'*!/*/}
                      {/*                /!*    buttonStyle='btn--invert'*!/*/}
                      {/*                /!*    buttonSize='btn--large'*!/*/}
                      {/*                /!*    path='/services/snow'*!/*/}
                      {/*                /!*>*!/*/}
                      {/*                /!*    See More!*!/*/}
                      {/*                /!*</Button>*!/*/}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*    /!*</Link>*!/*/}
                      {/*    <div className="flip-card">*/}
                      {/*        <div className="flip-card-inner">*/}
                      {/*            <div className="flip-card-front">*/}
                      {/*                <CardItem*/}
                      {/*                    // src='images/snow-svg.svg'*/}
                      {/*                    src='images/test.png'*/}
                      {/*                    text='Employee 3'*/}
                      {/*                    // label=''*/}
                      {/*                    // path='/services/snow'*/}
                      {/*                    //snow*/}
                      {/*                />*/}
                      {/*            </div>*/}
                      {/*            <div className="flip-card-back">*/}
                      {/*                <ul style={{listStyleType: 'none'}}>*/}
                      {/*                    <li className='space'>Position</li>*/}
                      {/*                    <li className='space'>Cool fact</li>*/}
                      {/*                    <li className='space'>Even COOLER fact</li>*/}
                      {/*                    /!*<li className='space'>Thing 4</li>*!/*/}
                      {/*                </ul>*/}
                      {/*                /!*<br />*!/*/}
                      {/*                /!*<Button*!/*/}
                      {/*                /!*    className='btns'*!/*/}
                      {/*                /!*    buttonStyle='btn--invert'*!/*/}
                      {/*                /!*    buttonSize='btn--large'*!/*/}
                      {/*                /!*    path='/services/cleanup'*!/*/}
                      {/*                /!*>*!/*/}
                      {/*                /!*    See More!*!/*/}
                      {/*                /!*</Button>*!/*/}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*</ul>*/}
                      <ul className='cards__items'>
                          {/*<Link to='/services/lawn'>*/}
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                                      <CardItemWithLabel
                                          // src='images/lawn-svg.svg'
                                          src='images/test.png'
                                          text='Jamison'
                                          label='CEO'
                                          // path='/services/lawn'
                                          // lawn
                                      />
                                  </div>
                                  <div className="flip-card-back">
                                      <ul style={{listStyleType: 'none'}}>
                                          {/*<li className='space'>Commercial & Residential</li>*/}
                                          <li className='space'>CEO</li>
                                          <li className='space'>Cool Guy</li>
                                          <li className='space'>Jarren is a cool web dev</li>
                                      </ul>
                                      {/*<br />*/}
                                      {/*<Button*/}
                                      {/*    className='btns'*/}
                                      {/*    buttonStyle='btn--invert'*/}
                                      {/*    buttonSize='btn--large'*/}
                                      {/*    path='/services/lawn'*/}
                                      {/*>*/}
                                      {/*    See More!*/}
                                      {/*</Button>*/}
                                  </div>
                              </div>
                          </div>
                          {/*</Link>*/}
                          {/*<Link to='/services/landscape'>*/}
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                                      <CardItemWithLabel
                                          // src='images/landscape-svg.svg'
                                          src='images/test.png'
                                          text='Employee 1'
                                          label='Position'
                                          // path='/services/landscape'
                                          // landscape
                                      />
                                  </div>
                                  <div className="flip-card-back">
                                      <ul style={{listStyleType: 'none'}}>
                                          <li className='space'>Position</li>
                                          <li className='space'>Cool Fact</li>
                                          {/*<li className='space'>Design landscape beds</li>*/}
                                          {/*<li className='space'>Reconstruct landscape beds</li>*/}
                                      </ul>
                                      {/*<br />*/}
                                      {/*<Button*/}
                                      {/*    className='btns'*/}
                                      {/*    buttonStyle='btn--invert'*/}
                                      {/*    buttonSize='btn--large'*/}
                                      {/*    path='/services/landscape'*/}
                                      {/*>*/}
                                      {/*    See More!*/}
                                      {/*</Button>*/}
                                  </div>
                              </div>
                          </div>
                          {/*</Link>*/}
                          {/*<Link to='/services/snow'>*/}
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                                      <CardItemWithLabel
                                          // src='images/snow-svg.svg'
                                          src='images/test.png'
                                          text='Employee 2'
                                          label='Position'
                                          // path='/services/snow'
                                          //snow
                                      />
                                  </div>
                                  <div className="flip-card-back">
                                      <ul style={{listStyleType: 'none'}}>
                                          <li className='space'>Position</li>
                                          <li className='space'>Cool fact</li>
                                      </ul>
                                      {/*<br />*/}
                                      {/*<Button*/}
                                      {/*    className='btns'*/}
                                      {/*    buttonStyle='btn--invert'*/}
                                      {/*    buttonSize='btn--large'*/}
                                      {/*    path='/services/snow'*/}
                                      {/*>*/}
                                      {/*    See More!*/}
                                      {/*</Button>*/}
                                  </div>
                              </div>
                          </div>
                          {/*</Link>*/}
                          <div className="flip-card">
                              <div className="flip-card-inner">
                                  <div className="flip-card-front">
                                      <CardItemWithLabel
                                          // src='images/snow-svg.svg'
                                          src='images/test.png'
                                          text='Employee 3'
                                          label='Position'
                                          // path='/services/snow'
                                          //snow
                                      />
                                  </div>
                                  <div className="flip-card-back">
                                      <ul style={{listStyleType: 'none'}}>
                                          <li className='space'>Position</li>
                                          <li className='space'>Cool fact</li>
                                          <li className='space'>Even COOLER fact</li>
                                          {/*<li className='space'>Thing 4</li>*/}
                                      </ul>
                                      {/*<br />*/}
                                      {/*<Button*/}
                                      {/*    className='btns'*/}
                                      {/*    buttonStyle='btn--invert'*/}
                                      {/*    buttonSize='btn--large'*/}
                                      {/*    path='/services/cleanup'*/}
                                      {/*>*/}
                                      {/*    See More!*/}
                                      {/*</Button>*/}
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
      </>
  )
}

export default About
