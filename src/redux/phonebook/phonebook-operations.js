import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addNewContactRequest,
  addNewContactSuccess,
  addNewContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

export const addNewContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addNewContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addNewContactSuccess(data)))
    .catch(error => dispatch(addNewContactError(error.message)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};
export const changeFilter = createAction('phonebook/ChangeContactsFilter');
