import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LogoNoBg from '../assets/logoNoBg.svg'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={LogoNoBg} alt='logo' height={45}/> Webster's Lawn Care
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/*<li className='nav-item'>*/}
            {/*  <Link*/}
            {/*    to='/services'*/}
            {/*    className='nav-links'*/}
            {/*    onClick={closeMobileMenu}*/}
            {/*  >*/}
            {/*    Services*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            {/*<li>*/}
            {/*  <Link*/}
            {/*    to='/sign-up'*/}
            {/*    className='nav-links-mobile'*/}
            {/*    onClick={closeMobileMenu}*/}
            {/*  >*/}
            {/*    Sign Up*/}
            {/*  </Link>*/}
            {/*</li>*/}
          </ul>
          {/*{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
