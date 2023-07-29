import { useDispatch } from 'react-redux';
import { Button, Email, Username, Wrapper } from './UserMenu.styled';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Email>{user.email}</Email>

      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
