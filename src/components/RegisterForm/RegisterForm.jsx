import { Formik } from 'formik';
import {
  AllInputsWrapper,
  Button,
  Field,
  Form,
  FormWrapper,
  InputWrapper,
  Label,
  LogInLink,
  Text,
  TextWrapper,
  Title,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <FormWrapper>
      <Title>Sign up</Title>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(register(values));

          actions.resetForm();
        }}
      >
        <Form>
          <AllInputsWrapper>
            <InputWrapper>
              <Label>Name</Label>
              <Field type="text" name="name" placeholder="Your name" />
            </InputWrapper>
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
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
      <TextWrapper>
        <Text>Already registered?</Text>
        <LogInLink to="/login">Log In</LogInLink>
      </TextWrapper>
    </FormWrapper>
  );
};
