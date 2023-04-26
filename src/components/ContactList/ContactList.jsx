import { ListContact } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selector';
import { Contact } from 'components/Contact/Contact';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListContact>
      {filterContacts.map(({ name, id, number }) => {
        return <Contact key={id} name={name} phone={number} id={id} />;
      })}
    </ListContact>
  );
};

export default Contacts;
