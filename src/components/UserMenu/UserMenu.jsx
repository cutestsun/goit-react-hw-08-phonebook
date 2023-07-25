import { useDispatch } from 'react-redux';
import { UserInfo, Wrapper } from './UserMenu.styled';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserInfo>
        <p>Welcome, {user.name}</p>
        <p>{user.email}</p>
      </UserInfo>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </Wrapper>
  );
};
