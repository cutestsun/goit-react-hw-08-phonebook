import { Container } from 'components/Styled/Container.styled';
import { Section } from 'components/Styled/Section.styled';
import { colors } from 'helpers/variables';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Section>
      <Container>
        <h1>Page not found</h1>
        <p>
          Please, go to main page:{' '}
          <Link to="/">
            <b style={{ color: `${colors.mainAccentColor}` }}>Link</b>
          </Link>
        </p>
      </Container>
    </Section>
  );
}
