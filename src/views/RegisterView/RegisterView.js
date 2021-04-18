import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './RegisterView.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = useCallback(({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(authOperations.register({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, email, name, password],
  );

  return (
    <div>
      <Typography variant="h5" gutterBottom className="RegisterView__title">
        Register form
      </Typography>
      <Card className="RegisterView__container">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="RegisterView__form"
        >
          <TextField
            id="name"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="RegisterView__item"
          />
          <TextField
            id="email"
            label="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="RegisterView__item"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="RegisterView__item"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="RegisterView__item"
          >
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
}
