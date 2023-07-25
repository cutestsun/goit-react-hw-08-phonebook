import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'components/Container/Container.styled';

export default function Contacts() {
  return (
    <Container>
      <h1>Phonebook</h1>

      <ContactsForm />

      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter />
      <ContactsList />
    </Container>
  );
}
