import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { logIn } from 'redux/auth/operations';
import { Grid } from '@mui/material';
import TextFieldWrapper from 'components/FormTextField/TextFieldWrapper';
import ButtonWrapper from 'components/ButtonWrapper/ButtonWrapper';

import { Wrap } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email.').required('Required'),
    password: yup.string().min(6).max(15).required('Required'),
  });

  const initialValues = { password: '', email: '' };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    console.log(values);
    resetForm();
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
              <TextFieldWrapper name="email" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWrapper name="password" label="Password" />
            </Grid>
            <Grid item xs={12}>
              <ButtonWrapper>Sign in</ButtonWrapper>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Wrap>
  );
};

export default LoginForm;
