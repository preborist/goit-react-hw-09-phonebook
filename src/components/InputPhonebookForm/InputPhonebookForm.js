import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import './InputPhonebookForm.scss';
import * as phonebookSelectors from '../../redux/phonebook/contacts-selectors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

export default function InputPhonebookForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);
  const addNewContact = useCallback(
    (name, number) => dispatch(phonebookOperations.addNewContact(name, number)),
    [dispatch],
  );

  const handleInputChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (name && number) {
        contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        )
          ? alert(`${name} is already in contacts`)
          : addNewContact(name, number);
        setName('');
        setNumber('');
      } else {
        alert('Please enter a contact name or phone number!');
      }
    },
    [addNewContact, contacts, name, number],
  );

  return (
    <>
      <Card className="InputPhonebookForm__container">
        <form
          className="InputPhonebookForm"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            label="Name"
            onChange={handleInputChange}
            name="name"
            type="text"
            value={name}
            className="InputPhonebookForm__item"
          />
          <TextField
            id="number"
            label="Phone Number"
            onChange={handleInputChange}
            name="number"
            type="number"
            value={number}
            className="InputPhonebookForm__item"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="InputPhonebookForm__item"
          >
            Add contact
          </Button>
        </form>
      </Card>
    </>
  );
}
