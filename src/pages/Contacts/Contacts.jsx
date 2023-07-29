import { Section } from 'components/Styled/Section.styled';
import { ContactsBgWrapper } from 'components/Styled/BgWrapper.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ContactsContainer } from './Contacts.styled';
import { ContactsListWrapper } from 'components/ContactsListWrapper/ContactsListWrapper';

export default function Contacts() {
  return (
    <main>
      <Section>
        <ContactsBgWrapper />

        <ContactsContainer>
          <UserMenu />
          <ContactsListWrapper />
        </ContactsContainer>
      </Section>
    </main>
  );
}
