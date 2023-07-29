import { LogInForm } from 'components/LogInForm/LogInForm';
import { LoginBgWrapper } from 'components/Styled/BgWrapper.styled';
import { Section } from 'components/Styled/Section.styled';

export default function Register() {
  return (
    <main>
      <Section>
        <LoginBgWrapper />

        <LogInForm />
      </Section>
    </main>
  );
}
