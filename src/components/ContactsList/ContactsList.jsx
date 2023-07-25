import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { List } from './ContactsList.styled';
import { ErrorMessage } from 'components/Error/Error.styled';
import { selectVisibleContacts } from 'redux/filter/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!visibleContacts?.length && !isLoading && !error) {
    return <ErrorMessage>No contacts</ErrorMessage>;
  }

  if (error) {
    <ErrorMessage>{error} </ErrorMessage>;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
