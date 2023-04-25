import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { register } from 'redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required(),
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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label htmlFor="name"> Full Name</label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage name="name" />
        <br></br>
        <label htmlFor="email">Email </label>

        <Field type="email" name="email" id="email" />
        <ErrorMessage name="email" />
        <br></br>
        <label htmlFor="password">Password </label>

        <Field type="password" name="password" id="password" />
        <ErrorMessage name="password" />
        <br></br>

        <button type="submit"> Submit</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
