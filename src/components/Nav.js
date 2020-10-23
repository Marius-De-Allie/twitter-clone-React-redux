import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Nav = () => (
  <div className="nav-bar">
    <NavLink to="/" exact activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/new" activeClassName="active">
      New Tweet
    </NavLink>
  </div>

);

export default Nav;