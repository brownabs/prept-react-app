import React, { StrictMode } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

export default function NavBar() {
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
