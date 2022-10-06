import React from 'react';
import logo from '../components/images/logo.jpg'
// import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu className='navList'>
        <header>
        <div className="container container-flex">
            <div className="logoContainer">
                <img src={logo} alt ="logo" className='logo'/>
            </div>
        </div>
        </header>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/components/About' activeStyle>
            About
          </NavLink>
          <NavLink to='/components/Services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/components/Contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/components/Policy' activeStyle>
            Policy
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;