import React from 'react';
// import { Button } from '../Button';
// import lawnServices from '../Services/LawnServices'
// import landscapeServices from '../Services/LandscapeServices'
import '../../App.css';
import '../Cards.css';

function ServiceCard(props) {
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

export function lawnServices() {
    return(
        <>
            <h1 className='services'>Lawn Services</h1>
            <div className='cards_about'>
                <div className='cards__container_about'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <ServiceCard
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export function landscapeServices() {
    return(
        <>
            <h1 className='services'>Landscape Services</h1>
            <div className='cards_about'>
                <div className='cards__container_about'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <ServiceCard
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export function fertilizerServices() {
    return(
        <>
            <h1 className='services'>Fertilizer Services </h1>
            <div className='cards_about'>
                <div className='cards__container_about'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <ServiceCard
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export function snowServices() {
    return(
        <>
            <h1 className='services'>Snow Services </h1>
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <ServiceCard
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
