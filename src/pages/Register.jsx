import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Styled/Section.styled';
import { LoginBgWrapper } from 'components/Styled/BgWrapper.styled';

export default function Register() {
  return (
    <main>
      <Section>
        <LoginBgWrapper />

        <RegisterForm />
      </Section>
    </main>
  );
}
