import { useDispatch, useSelector } from 'react-redux';
import { Button, Item, Name, Number } from './ContactsListItem.styled';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { DeleteBtnLoader } from 'components/Loader/Loader';
import { useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [deletingContactId, setDeletingContactId] = useState(null);

  return (
    <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Button
        onClick={() => {
          setDeletingContactId(id);
          dispatch(deleteContact(id)).then(() => setDeletingContactId(null));
        }}
        // disabled={isLoading}
      >
        {deletingContactId === id && isLoading ? (
          <DeleteBtnLoader size={20} />
        ) : (
          <IoTrashOutline size={20} color="currentColor" />
        )}
      </Button>
    </Item>
  );
};
