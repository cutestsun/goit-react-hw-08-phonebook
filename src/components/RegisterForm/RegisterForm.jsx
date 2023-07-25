import { Field, Formik } from 'formik';
import { Form, Label } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(register(values));

        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Field type="text" name="name" placeholder="Your name" />
        </Label>
        <Label>
          Email
          <Field type="email" name="email" placeholder="Your email" />
        </Label>
        <Label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Must be at least 7 characters"
          />
        </Label>
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};
