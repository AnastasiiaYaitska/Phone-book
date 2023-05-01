import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/selector';
import { fetchContacts } from 'redux/contacts/operations';
import ModalAddContact from 'components/Modal/Modal';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/ContactList/ContactList';

const ContactsPage = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ModalAddContact />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>...Loading </p>}
      <Contacts />
    </div>
  );
};

export default ContactsPage;
