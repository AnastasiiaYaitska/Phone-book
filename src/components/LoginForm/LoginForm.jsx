import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
  });

  const initialValues = { password: '', email: '' };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id="email" />
        <ErrorMessage name="email" />
        <br></br>
        <label htmlFor="password">Password </label>
        <Field type="password" name="password" id="password" />
        <ErrorMessage name="password" />
        <br></br>

        <button type="submit"> Sign in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
