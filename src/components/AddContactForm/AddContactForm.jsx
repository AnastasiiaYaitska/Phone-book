import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selector';
import { addContact } from 'redux/contacts/operations';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { formatName } from 'utils/formatName';
import { formatNumber } from 'utils/formatNumber';
import { Grid } from '@mui/material';
import TextFieldWrapper from 'components/FormTextField/TextFieldWrapper';
import ButtonWrapper from 'components/ButtonWrapper/ButtonWrapper';
// import { Label, Input, SubmitBtn } from './ContactForm.styled';
import { FormWrap } from './AddContactForm.styled';

const AddContactsForm = ({ onClose }) => {
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
      console.log(typeof values.number);
      const normalizeData = {
        name: formatName(values.name),
        number: formatNumber(values.number),
      };
      dispatch(addContact(normalizeData));
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
                <TextFieldWrapper
                  name="number"
                  label="Phone Number"
                  // definitions={{
                  //   '#': /[1-9]/,
                  // }}
                  // mask="(#00) 000-0000"
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonWrapper>Create</ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </FormWrap>
    </>
  );
};

export default AddContactsForm;
