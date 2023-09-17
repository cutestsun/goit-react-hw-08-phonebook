import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import { useAuth } from 'redux/hooks/useAuth';
import { Button, Email, Username, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Email>{user.email}</Email>
      <Link to="/profile">Profile</Link>

      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
