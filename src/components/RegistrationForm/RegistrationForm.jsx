import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Grid } from '@mui/material';
import { register } from 'redux/auth/operations';
import TextFieldWrapper from 'components/FormTextField/TextFieldWrapper';
import ButtonWrapper from 'components/ButtonWrapper/ButtonWrapper';
import { Wrap } from './RegistrationForm.styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required('Required'),
    email: yup.string().email().required('Required'),
    password: yup.string().min(6).max(15).required('Required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Wrap maxWidth="xs">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldWrapper name="name" label="Full Name" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWrapper name="email" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWrapper name="password" label="Password" />
            </Grid>
            <Grid item xs={12}>
              <ButtonWrapper>Submit</ButtonWrapper>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Wrap>
  );
};

export default RegistrationForm;
