import { IoPersonAddSharp } from 'react-icons/io5';
import { ContactsList } from 'components/ContactsList/ContactsList';

import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';
import { AddContactModal } from 'components/AddContactModal/AddContactModal';
import {
  AddContactBtn,
  ListTitle,
  Wrapper,
} from './ContactsListWrapper.styled';

export const ContactsListWrapper = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Wrapper>
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactsList />

      <AddContactBtn onClick={openModal}>
        <IoPersonAddSharp size={68} color="currentColor" />
      </AddContactBtn>

      <AddContactModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </Wrapper>
  );
};
