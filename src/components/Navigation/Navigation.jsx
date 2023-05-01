import { selectIsLoggedIn } from 'redux/auth/selecros';
import { useSelector } from 'react-redux';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import { LinkNav, NavWrapper } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavWrapper>
      <LinkNav to="/">
        <ContactPhoneTwoToneIcon color="inherit" fontSize="large" /> Home
      </LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">Contacts</LinkNav>}
    </NavWrapper>
  );
};

export default Navigation;
