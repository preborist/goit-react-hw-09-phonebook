import React from 'react';
import './HomeView.scss';
import Typography from '@material-ui/core/Typography';

const HomeView = () => (
  <div>
    <Typography variant="h5" gutterBottom className="HomeView__title">
      Create your own Phonebook with fun!
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </Typography>
  </div>
);

export default HomeView;
