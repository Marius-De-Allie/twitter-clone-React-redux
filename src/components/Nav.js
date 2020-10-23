import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Nav = () => (
  <ul className="nav-bar">
    <li style={{display: 'inline'}}>
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
    </li>
    <li style={{display: 'inline'}}>
      <NavLink to="/new" activeClassName="active">
        New Tweet
      </NavLink>
    </li>
  </ul>

);

export default Nav;