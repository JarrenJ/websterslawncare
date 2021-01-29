import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {

  //get current date to use in Copyright section of footer
  let date = new Date();

  return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Serving Lenawee and Monroe counties
          </p>
          <p className='footer-subscription-text'><h2><a href='tel:+15179188807'>517.918.8807</a></h2><small><a href='mailto:websterslawncare1@gmail.com'>Websterslawncare1@gmail.com</a></small></p>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/about'>Where we started</Link>
              <Link to='/testimonials'>Testimonials</Link>
              <Link to='/feedback'>Leave a review</Link>
            </div>
            {/*<div className='footer-link-items'>*/}
            {/*  <h2>Services</h2>*/}
            {/*  <Link to='/services/lawn'>Lawn</Link>*/}
            {/*  <Link to='/services/landscape'>Landscaping</Link>*/}
            {/*  <Link to='/services/snow'>Snow Removal</Link>*/}
            {/*  <Link to='/services/cleanup'>Cleanup</Link>*/}
            {/*</div>*/}
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Services</h2>
              <Link to='/services/lawn'>Lawn</Link>
              <Link to='/services/landscape'>Landscaping</Link>
              <Link to='/services/snow'>Snow Removal</Link>
              <Link to='/services/cleanup'>Cleanup</Link>
            </div>
          </div>
          {/*<div className='footer-link-wrapper'>*/}
          {/*  <div className='footer-link-items'>*/}
          {/*    <h2><a href='tel:+15179188807'>517.918.8807</a></h2>*/}
          {/*    <small><a href='mailto:websterslawncare1@gmail.com'>Websterslawncare1@gmail.com</a></small>*/}
          {/*  </div>*/}

          {/*</div>*/}
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                Webster's Lawn Care
              </Link>
            </div>
            <small className='website-rights'>Webster's Lawn Care LLC © {date.getFullYear()}<br/>Licensed & Insured.</small>
            <a
                className='social-icon-link facebook'
                href='https://www.facebook.com/websterslawncare'
                target='_blank'
                rel="noopener noreferrer"
                aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'/>
            </a>
            {/*<div class='social-icons'>*/}
              {/*<a*/}
              {/*  class='social-icon-link facebook'*/}
              {/*  href='https://www.facebook.com/websterslawncare'*/}
              {/*  target='_blank'*/}
              {/*  rel="noopener noreferrer"*/}
              {/*  aria-label='Facebook'*/}
              {/*>*/}
              {/*  <i class='fab fa-facebook-f' />*/}
              {/*</a>*/}
              {/*<Link*/}
              {/*  class='social-icon-link instagram'*/}
              {/*  to='/'*/}
              {/*  target='_blank'*/}
              {/*  aria-label='Instagram'*/}
              {/*>*/}
              {/*  <i class='fab fa-instagram' />*/}
              {/*</Link>*/}
              {/*<Link*/}
              {/*  class='social-icon-link youtube'*/}
              {/*  to='/'*/}
              {/*  target='_blank'*/}
              {/*  aria-label='Youtube'*/}
              {/*>*/}
              {/*  <i class='fab fa-youtube' />*/}
              {/*</Link>*/}
              {/*<Link*/}
              {/*  class='social-icon-link twitter'*/}
              {/*  to='/'*/}
              {/*  target='_blank'*/}
              {/*  aria-label='Twitter'*/}
              {/*>*/}
              {/*  <i class='fab fa-twitter' />*/}
              {/*</Link>*/}
              {/*<Link*/}
              {/*  class='social-icon-link twitter'*/}
              {/*  to='/'*/}
              {/*  target='_blank'*/}
              {/*  aria-label='LinkedIn'*/}
              {/*>*/}
              {/*  <i class='fab fa-linkedin' />*/}
              {/*</Link>*/}
            {/*</div>*/}
          </div>
        </section>
      </div>
  );
}

export default Footer;
