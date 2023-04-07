import { nanoid } from 'nanoid';
import { GrPhone, GrUserManager } from 'react-icons/gr';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { addContact } from 'redux/contactsSlice';
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

export const ContactsForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handlerSubmit = event => {
    event.preventDefault();
    setName('');
    setNumber('');
    if (checkNameDuplicate(name)) {
      dispatch(addContact(name, number));
    }
    event.currentTarget.reset();
  };

  const checkNameDuplicate = name => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in the contacts `);
      return false;
    }
    return true;
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Label htmlFor={nameInputId}>
        {' '}
        Name <GrUserManager />{' '}
      </Label>
      <Input
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => setName(e.target.value)}
      />

      <Label htmlFor={numberInputId}>
        Number <GrPhone />
      </Label>

      <Input
        type="tel"
        name="number"
        id={numberInputId}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e => setNumber(e.target.value)}
      />

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};
