import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavBarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/components/Services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/components/Contact' activeStyle>
            Contact
          </NavLink>
          {/* <NavLink to='/components/Contact' activeStyle>
            Contact
          </NavLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;