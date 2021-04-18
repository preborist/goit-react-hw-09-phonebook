import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as phonebookActions from '../../../redux/phonebook/phonebook-actions';
import * as phonebookSelectors from '../../../redux/phonebook/contacts-selectors';
import './Filter.scss';
import TextField from '@material-ui/core/TextField';

export default function Filter() {
  const dispatch = useDispatch();
  const inputFilterName = useSelector(phonebookSelectors.getFilter);
  const onChangeFilter = useCallback(
    e => dispatch(phonebookActions.changeFilter(e.target.value)),
    [dispatch],
  );

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Find contacs by name"
        variant="outlined"
        name="filter"
        type="text"
        value={inputFilterName}
        onChange={onChangeFilter}
        className="Filter"
      />
    </>
  );
}
