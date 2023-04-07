import { ListContact } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { Contact } from 'components/Contact/Contact';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListContact>
      {filterContacts.map(({ name, id, number }) => {
        return <Contact key={id} name={name} number={number} id={id} />;
      })}
    </ListContact>
  );
};
