import React, { useEffect, useCallback } from 'react';
import Contact from './Contact';
import Filter from './Filter';
import './ContactList.scss';
import { useDispatch, useSelector } from 'react-redux';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import * as phonebookSelectors from '../../redux/phonebook/contacts-selectors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

export default function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(phonebookSelectors.getFilteredContacts);
  const isLoadingContacts = useSelector(phonebookSelectors.getLoading);

  const onHandleDelete = useCallback(
    id => dispatch(phonebookOperations.deleteContact(id)),
    [dispatch],
  );

  return (
    <>
      <Filter />
      <Typography variant="h5" gutterBottom className="ContactsList__title">
        Filtered list of your contacts
      </Typography>
      {isLoadingContacts && <h2>Загружаем...</h2>}
      {filteredContacts.length > 0 ? (
        <List component="nav" aria-label="secondary mailbox folders">
          <ul className="ContactList">
            {filteredContacts.map(({ id, name, number }) => (
              <ListItem button className="ContactList__item" key={id}>
                <Contact
                  id={id}
                  name={name}
                  number={number}
                  onHandleDelete={onHandleDelete}
                ></Contact>
              </ListItem>
            ))}
          </ul>
        </List>
      ) : (
        <Alert severity="warning" className="ContactsList_alert">
          no results or your contact list is empty!
        </Alert>
      )}
    </>
  );
}
