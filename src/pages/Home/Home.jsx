import {
  BackgroundImage,
  Description,
  MainWrapper,
  HomeSection,
  Title,
} from 'pages/Home/Home.styled';
import { Container } from 'components/Styled/Container.styled';

export default function Home() {
  return (
    <main>
      <HomeSection>
        <BackgroundImage />
        <Container>
          <MainWrapper>
            <Title>Balance your life. Manage your connections.</Title>
            <Description>
              In the symphony of life, maintaining harmony is paramount. Embrace
              the art of balancing your aspirations and responsibilities, while
              treasuring the power of meaningful connections and cherished bonds
              with others. By carefully managing these connections, you craft a
              life that embraces fulfilment, joy, and lasting memories.
            </Description>
          </MainWrapper>
        </Container>
      </HomeSection>
    </main>
  );
}
