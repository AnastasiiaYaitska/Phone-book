import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactsForm } from './ContactForm/ContactForm';
import { Contacts } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      <GlobalStyle />
    </Layout>
  );
};
