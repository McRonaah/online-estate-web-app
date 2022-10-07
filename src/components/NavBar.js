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
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/components/About'>
            About
          </NavLink>
          <NavLink to='/components/Services'>
            Services
          </NavLink>
          <NavLink to='/components/Contact'>
            Contact
          </NavLink>
          <NavLink to='/components/Policy'>
            Policy
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;