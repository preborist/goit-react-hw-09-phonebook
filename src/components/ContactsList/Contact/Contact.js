import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Contact = ({ id, name, number, onHandleDelete }) => (
  <Container>
    <div className="Contact" key={id}>
      <div>
        <Typography variant="subtitle1" gutterBottom className="name">
          {name}:
        </Typography>
        <Typography variant="body1" gutterBottom className="number">
          {number}
        </Typography>
      </div>
      <Button
        variant="outlined"
        color="secondary"
        type="button"
        onClick={() => onHandleDelete(id)}
      >
        Delete
      </Button>
    </div>
  </Container>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
};

export default Contact;
