import React from 'react';
import styled from "styled-components";
// import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
// import mower from "../../assets/mower1.svg";

import "../carousel.css"
import '../../App.css';
import '../Cards.css';
import '../Services.css';

// useEffect(() => {
//     window.scrollTo(0, 0)
// }, []);

// useLayoutEffect(() => {
//     window.scrollTo(0, 0)
// });


// function ServiceCard(props) {
//     return (
//         <li className='cards__item'>
//             <div className='cards__item__link'>
//                 <div className='cards__item__info'>
//                     <h2 className='cards__service__title'>{props.title}</h2>
//                     <h5 className='cards__item__text_about'>{props.text}</h5>
//                 </div>
//             </div>
//         </li>
//     );
// }

// function ServiceSection(props) {
//     return(
//         <div className="service__container">
//             <h3 className="service__title">{props.title}<hr className="service__divider" /></h3>
//             <div className="service__context">
//                 <p>{props.text}</p>
//             </div>
//         </div>
//     )
// }

const ServiceImg = styled.div`
  background: url(${props => props.path}) center center/cover no-repeat;
  height: 100%;
`



export function lawnServices() {
    return(
        <div className="lawnServices">
            <h1 className='service__carousel'>Lawn Services</h1>
            <Carousel renderThumbs={() => {}} renderIndicator={() => {}} autoPlay infiniteLoop>
                <div className='service__test'>
                    {/*<img src={mower} alt='lawnPic1' />*/}
                    <ServiceImg path={"/websterslawncare/static/media/mower1.23966395.svg"} />
                    {/*<p className="legend">I can put text here, or not... idk yet</p>*/}
                </div>
                <div className='service__test'>
                    {/*<img src={mower} alt='lawnPic1' />*/}
                    <ServiceImg path={"https://jarrenj.github.io/websterslawncare/images/lawnServices.jpg"} />
                    {/*<p className="legend">I can put text here, or not... idk yet</p>*/}
                </div>
                {/*<div className='service__test'>*/}
                {/*    /!*<img src="https://jarrenj.github.io/websterslawncare/images/lawnServices.jpg" alt='lawnPic2' />*!/*/}
                {/*    /!*<p className="legend">I can put text here, or not... idk yet</p>*!/*/}
                {/*</div>*/}
            </Carousel>
            <div className="service__container">
                <h3 className="service__title">Super Cool Dope Title<hr className="service__divider" /></h3>
                <div className="service__context">
                    <p>Super cool, dope, text</p>
                </div>
            </div>
        </div>
    )
}

export function landscapeServices() {
    return(
        <div className="landscapeServices">
            <h1 className='service__carousel'>Landscape Services</h1>
            <Carousel renderThumbs={() => {}} renderIndicator={() => {}} autoPlay infiniteLoop>
                <div className='service__test'>
                    <img src="https://jarrenj.github.io/websterslawncare/images/landing.jpg" alt='landscapePic1' />
                    {/*<p className="legend">I can put text here, or not... idk yet</p>*/}
                </div>
                <div className='service__test'>
                    <img src="https://jarrenj.github.io/websterslawncare/images/lawnServices.jpg" alt='landscapePic2' />
                    {/*<p className="legend">I can put text here, or not... idk yet</p>*/}
                </div>
            </Carousel>
            <div className="service__container">
                <h3 className="service__title">Landscape Management<hr className="service__divider" /></h3>
                <div className="service__context">
                    <p>
                        Regardless of who originally installed your landscaping, Webster's Lawn Care will service the grounds.
                        We will create a plan and a budget to ensure a timely and cost effective maintenance of your grounds.
                    </p>
                </div>
            </div>
        </div>
    )
}

export function snowServices() {
    return(
        <div className="snowRemoval">
            <h1 className='service__carousel'>Snow and Ice Control</h1>
            <Carousel renderThumbs={() => {}} renderIndicator={() => {}} autoPlay infiniteLoop>
                <div className='service__test'>
                    {/*<div className='service__img__test' />*/}
                    <ServiceImg path={"https://jarrenj.github.io/websterslawncare/images/snowCarousel-1.jpg"} />
                    {/*<img className='service__img' src="https://jarrenj.github.io/websterslawncare/images/snowCarousel-1.jpg" alt='snowPic1' />*/}
                    {/*<p className="legend">I can put text here, or not... idk yet</p>*/}
                </div>
                <div className='service__test'>
                    {/*<div className='service__img__test' />*/}
                    <ServiceImg path={"https://jarrenj.github.io/websterslawncare/images/snowCarousel-2.jpg"} />
                    {/*<img className='service__img' src="https://jarrenj.github.io/websterslawncare/images/snowCarousel-1.jpg" alt='snowPic1' />*/}
                    {/*<p className="legend">I can put text here, or not... idk yet</p>*/}
                </div>
                {/*<div className='service__test'>*/}
                {/*    <img src="https://jarrenj.github.io/websterslawncare/images/snowCarousel-2.jpg" alt='snowPic2' />*/}
                {/*    /!*<p className="legend">I can put text here, or not... idk yet</p>*!/*/}
                {/*</div>*/}
            </Carousel>
            <div className="service__container">
                <h3 className="service__title">Snow Removal<hr className="service__divider" /></h3>
                <div className="service__context">
                    <p>Snow removal is a vital part of protecting your property and making sure your property is easily accessible. We provide snow removal services to shopping centers, hotels, business, parking lots, and residential areas.</p>
                    <ul className="indent">
                        <li className="service__list__space">Laying salt *(probs move to Ice Control, but not sure what else...)</li>
                        <li className="service__list__space">Lot clearing</li>
                        <li className="service__list__space">Walkway clearing</li>
                    </ul>
                </div>
            </div>
            {/*<div className='spacer' />*/}
            <div className="service__container">
                <h3 className="service__title">Ice Control<hr className="service__divider" /></h3>
                <div className="service__context">
                    <p>Ice stuff goes here :).</p>
                </div>
            </div>
        </div>
    )
}

export function cleanup() {
    return(
        <div className="cleanup">
            <h1 className='service__carousel'>Fall/Spring Cleanup</h1>
            <Carousel renderThumbs={() => {}} renderIndicator={() => {}} infiniteLoop>
                <div className='service__test'>
                    <img src="https://jarrenj.github.io/websterslawncare/images/landing.jpg" alt='cleanupPic1' />
                    {/*<p className="legend">I can put text here, or not... idk yet</p>*/}
                </div>
                <div className='service__test'>
                    <img src="https://jarrenj.github.io/websterslawncare/images/lawnServices.jpg" alt='cleanupPic2' />
                    {/*<p className="legend">I can put text here, or not... idk yet</p>*/}
                </div>
            </Carousel>
            <div className="service__container">
                <h3 className="service__title">Cleanup -- probs 2 sections with Fall and Spring<hr className="service__divider" /></h3>
                <div className="service__context">
                    <p>We will cleanup all leaves and sticks from the property. Before Winter, we will prune and shape bushes around the house or complex. In the fall for Winter months we will cut down Perennial's.</p>
                </div>
            </div>
        </div>
    )
}
