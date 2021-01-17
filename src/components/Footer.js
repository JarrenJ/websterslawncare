import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function Footer() {
  return (
    <Router>
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-text'>
            Serving Lenawee and Monroe counties
          </p>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/About'>Where we started</Link>
              <Link to='/testimonials'>Testimonials</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            {/*<div className='footer-link-items'>*/}
            {/*  <h2>Social Media</h2>*/}
            {/*  <Link to='/insta'>Instagram</Link>*/}
            {/*  <a href='https://www.facebook.com/websterslawncare' target='_blank' rel="noopener noreferrer">Facebook</a>*/}
            {/*  <Link to='/uTube'>Youtube</Link>*/}
            {/*  <Link to='Twitter'>Twitter</Link>*/}
            {/*</div>*/}
            <div class='footer-link-items'>
              <h1><a href='tel:+15173669247'>517.xxx.xxx</a></h1>
              {/*<Link to='/'>517.xxx.xxx</Link>*/}
              {/*<a href='tel:+15173669247'>517.366.9247</a>*/}
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                Webster's Lawn Care
              </Link>
            </div>
            <small class='website-rights'>Webster's Lawn Care LLC © 2020<br/>Licensed & Insured.</small>
            <a
                className='social-icon-link facebook'
                href='https://www.facebook.com/websterslawncare'
                target='_blank'
                rel="noopener noreferrer"
                aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'/>
            </a>
            <div class='social-icons'>
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
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default Footer;
