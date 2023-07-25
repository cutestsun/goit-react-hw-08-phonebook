import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label } from './LogInForm.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(logIn(values));

        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Email
          <Field type="email" name="email" />
        </Label>
        <Label>
          Password
          <Field type="password" name="password" />
        </Label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
