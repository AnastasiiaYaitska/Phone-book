import { useSelector } from 'react-redux';
import { AppBar } from '@mui/material';
import { Container, Toolbar } from '@mui/material';
import { selectIsLoggedIn } from 'redux/auth/selecros';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static">
      <Container maxWidth="sl">
        <Toolbar disableGutters>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
