import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';

export default function Profile() {
  const user = useSelector(selectUser);

  const avatarURL = user.avatar.includes('gravatar')
    ? user.avatar
    : `http://localhost:8000/${user.avatar}`;

  return (
    <>
      <div>
        <img src={avatarURL} alt={user.name} width="100" />
      </div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Link to="/avatar">Update Avatar</Link>
    </>
  );
}
