import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactsForm } from './ContactForm/ContactForm';
import { Contacts } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContactsIsLoading, selectContactsError } from 'redux/selector';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>...Loading </p>}
      <Contacts />
      <GlobalStyle />
    </Layout>
  );
};
