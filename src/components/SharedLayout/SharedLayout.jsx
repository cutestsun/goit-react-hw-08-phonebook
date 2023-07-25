import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { HeaderWrapper } from './SharedLayout.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container } from 'components/Container/Container.styled';
import { useAuth } from 'redux/hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';

export default function SharedLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
        <Container>
          <HeaderWrapper>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </HeaderWrapper>
        </Container>

        <Suspense fallback={<Loader size={50} />}>
          <Outlet />
        </Suspense>
      </header>
      <Toaster
        // position="top-right"
        toastOptions={{
          duration: 4000,
        }}
      />
    </>
  );
}
