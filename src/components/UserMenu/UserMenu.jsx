import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selecros';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{user.name}</p>
      <button type="submit" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
