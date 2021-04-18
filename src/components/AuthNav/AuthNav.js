import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

const AuthNav = () => (
  <div className="AuthNav">
    <NavLink
      to="/register"
      exact
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      exact
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
