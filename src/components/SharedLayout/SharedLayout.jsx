import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Header, HeaderWrapper } from './SharedLayout.styled';
import { Container } from 'components/Styled/Container.styled';
import { useAuth } from 'redux/hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';

export default function SharedLayout() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const shouldShowHeaderLine = location.pathname !== '/';

  return (
    <>
      <Header showLine={shouldShowHeaderLine}>
        <Container>
          <HeaderWrapper>
            <Navigation />
            {!isLoggedIn && <AuthNav />}
          </HeaderWrapper>
        </Container>
      </Header>

      <Suspense fallback={<Loader size={50} />}>
        <Outlet />
      </Suspense>
      <Toaster
        // position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            whiteSpace: 'nowrap',
            // padding: '12px',
          },
        }}
      />
    </>
  );
}
