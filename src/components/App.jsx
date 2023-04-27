import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectContactsIsLoading, selectContactsError } from 'redux/selector';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Container } from '@mui/material';
import { fetchCurrentUser } from 'redux/auth/operations';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRout from './PrivateRout';
import RestrictedRoute from './RestrictedRoute';

const Home = lazy(() => import('Pages/Home/Home'));
const LogIn = lazy(() => import('Pages/LogIn/LogIn'));
const Registration = lazy(() => import('Pages/Register/Registration'));
const ContactsPage = lazy(() => import('Pages/Contacts/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectContactsIsLoading);
  // const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="xl">
        {/* // <Layout> */}
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />

            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRout redirectTo="/login" component={<ContactsPage />} />
              }
            />
          </Route>
        </Routes>
      </Container>

      <GlobalStyle />
    </>
    // {/* // </Layout> */}
  );
};
