import React from 'react';
import InputPhonebookForm from '../../components/InputPhonebookForm';
import ContactsList from '../../components/ContactsList';

const PhonebookView = () => {
  return (
    <div>
      <InputPhonebookForm />
      <ContactsList />
    </div>
  );
};

export default PhonebookView;
