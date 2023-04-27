import { NavLink } from 'react-router-dom';
import { AuthNavWrapper, LinkNav } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <LinkNav to="/register">Registration</LinkNav>
      <LinkNav to="/login">Log in</LinkNav>
    </AuthNavWrapper>
  );
};

export default AuthNav;
