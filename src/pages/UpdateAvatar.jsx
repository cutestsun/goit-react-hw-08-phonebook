import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAvatar } from 'redux/auth/operations';

export default function UpdateAvatar() {
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = evt => {
    setFile(evt.target.files[0]);
  };

  return (
    <>
      <input type="file" onChange={handleChange} />
      <button
        type="submit"
        onClick={() => {
          dispatch(updateAvatar(file));
          navigate('/profile');
        }}
      >
        Update avatar
      </button>
    </>
  );
}
