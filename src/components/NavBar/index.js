import React, { StrictMode } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

export default function NavBar() {
  // create Link component which will provide declarative, accessible navigation around the application.
  // now let's link our path /flash-card locationand call it Flash Cards
  // now let's go back to our Routes.js file
  return (
      <StrictMode>
      <Navbar expand='md' className='navbar justify-content-between'>
        <Link className="navbar-brand" to='/'>Prept</Link>
          <Nav className='mr-auto' navbar>
            <NavItem>
            <Link className="navbar-brand" to='/flash-card'>Flash Cards</Link>
            </NavItem>
          </Nav>
          </Navbar>
    </StrictMode>
  );
}
