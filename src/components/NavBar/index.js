import React, { StrictMode } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c

export default function NavBar() {
  return (
      <StrictMode>
      <Navbar expand='md' className='navbar justify-content-between'>
<<<<<<< HEAD
        <Link className="navbar-brand" to='/'>Prept</Link>
          <Nav className='mr-auto' navbar>
            <NavItem>
            <Link className="navbar-brand" to='/flash-card'>Flash Cards</Link>
=======
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link className="nav-bar" to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-dash-bar" to='/flash-card'>Flash Cards</Link>
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c
            </NavItem>
          </Nav>
          </Navbar>
    </StrictMode>
  );
}
