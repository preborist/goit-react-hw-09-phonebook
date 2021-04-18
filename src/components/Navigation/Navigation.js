import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import './Navigation.scss';

export default function Navigation() {
  const isAuthentificated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav className="Navigation">
      <NavLink
        exact
        to="/"
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>
      {isAuthentificated && (
        <NavLink
          exact
          to="/contacts"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
