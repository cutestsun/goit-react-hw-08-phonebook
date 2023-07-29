import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  AllInputsWrapper,
  Button,
  Field,
  Form,
  FormWrapper,
  InputWrapper,
  Label,
  Title,
} from './LogInForm.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();

  return (
    <FormWrapper>
      <Title>Log in</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(logIn(values));

          actions.resetForm();
        }}
      >
        <Form>
          <AllInputsWrapper>
            <InputWrapper>
              <Label>Email</Label>
              <Field type="email" name="email" placeholder="Your email" />
            </InputWrapper>
            <InputWrapper>
              <Label>Password</Label>
              <Field
                type="password"
                name="password"
                placeholder="Your password"
              />
            </InputWrapper>
          </AllInputsWrapper>
          <Button type="submit">Log In</Button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
