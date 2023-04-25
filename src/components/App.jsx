import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectContactsIsLoading, selectContactsError } from 'redux/selector';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
// import { ContactsForm } from './ContactForm/ContactForm';
// import { Contacts } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import SharedLayout from './SharedLayout/SharedLayout';
// import Navigation from 'components/Navigation/Navigation';
import Home from 'Pages/Home/Home';
import LogIn from 'Pages/LogIn/LogIn';
import Registration from 'Pages/Register/Registration';
import ContactsPage from 'Pages/Contacts/ContactsPage';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectContactsIsLoading);
  // const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      {/* <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>...Loading </p>}
      <Contacts /> */}
      <GlobalStyle />
    </Layout>
  );
};
