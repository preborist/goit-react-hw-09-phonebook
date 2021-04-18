import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth/';
import Button from '@material-ui/core/Button';
import './UserMenu.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className="UserMenu">
      <p className="UserMenu__title">
        Welcome, <span className="UserMenu__email">{email}</span>
      </p>
      <Button
        variant="contained"
        color="secondary"
        type="button"
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
}
