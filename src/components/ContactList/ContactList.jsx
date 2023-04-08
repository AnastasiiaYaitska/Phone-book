import { ListContact } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selector';
import { Contact } from 'components/Contact/Contact';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListContact>
      {filterContacts.map(({ name, id, phone }) => {
        return <Contact key={id} name={name} phone={phone} id={id} />;
      })}
    </ListContact>
  );
};
