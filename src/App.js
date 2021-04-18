import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MyAppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const HomeView = lazy(
  () => import('./views/HomeView') /* webpackChunkName: "HomeView" */,
);
const RegisterView = lazy(
  () => import('./views/RegisterView') /* webpackChunkName: "RegisterView" */,
);
const LoginView = lazy(
  () => import('./views/LoginView') /* webpackChunkName: "LoginView" */,
);
const PhonebookView = lazy(
  () => import('./views/PhonebookView') /* webpackChunkName: "PhonebookView" */,
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />

      <MyAppBar />
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
            <PrivatRoute path="/contacts" redirectTo="/login">
              <PhonebookView />
            </PrivatRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
