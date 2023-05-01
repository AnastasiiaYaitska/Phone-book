// import { nanoid } from 'nanoid';
// import { GrPhone, GrUserManager } from 'react-icons/gr';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selector';

import { addContact } from 'redux/contacts/operations';
import * as yup from 'yup';

import { Formik, Form } from 'formik';
import { Grid } from '@mui/material';
import TextFieldWrapper from 'components/FormTextField/TextFieldWrapper';
import ButtonWrapper from 'components/ButtonWrapper/ButtonWrapper';
// import { Label, Input, SubmitBtn } from './ContactForm.styled';
import { FormWrap } from './ContactForm.styled';

const ContactsForm = ({ onClose }) => {
  // const nameInputId = nanoid();
  // const numberInputId = nanoid();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('Required'),
    number: yup.number().required('Required'),
  });

  // const handlerSubmit = event => {
  //   event.preventDefault();
  //   setName('');
  //   setNumber('');
  //   const newContact = {
  //     name,
  //     number,
  //   };
  //   if (checkNameDuplicate(name)) {
  //     dispatch(addContact(newContact));
  //   }
  //   event.currentTarget.reset();
  //   onClose();
  // };
  const handlerSubmit = (values, actions) => {
    if (checkNameDuplicate(values.name)) {
      dispatch(addContact(values));
    }
    actions.resetForm();
    onClose();
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
    <>
      <FormWrap maxWidth="xs">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handlerSubmit}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextFieldWrapper name="name" label="Name" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="number" label="Phone Number" />
              </Grid>
              <Grid item xs={12}>
                <ButtonWrapper>Create</ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </FormWrap>
      {/* <form onSubmit={handlerSubmit}>
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
      </form> */}
    </>
  );
};

export default ContactsForm;
