import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './LoginView.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom className="LoginView__title">
        Login form
      </Typography>
      <Card className="LoginView__container">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="LoginView__form"
        >
          <TextField
            id="email"
            label="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="LoginView__item"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="LoginView__item"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="InputPhonebookForm__item"
          >
            Войти
          </Button>
        </form>
      </Card>
    </div>
  );
}
