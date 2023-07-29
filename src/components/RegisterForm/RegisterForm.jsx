import { ErrorMessage, Formik } from 'formik';
import {
  AllInputsWrapper,
  Button,
  Field,
  Form,
  FormWrapper,
  InputWrapper,
  Label,
  LogInLink,
  StyledErrorMessage,
  Text,
  TextWrapper,
  Title,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { registerValidationSchema } from 'helpers/validationSchema';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <FormWrapper>
      <Title>Sign up</Title>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerValidationSchema}
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
              <ErrorMessage
                name="name"
                render={message => (
                  <StyledErrorMessage>{message}</StyledErrorMessage>
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Email</Label>
              <Field type="email" name="email" placeholder="Your email" />
              <ErrorMessage
                name="email"
                render={message => (
                  <StyledErrorMessage>{message}</StyledErrorMessage>
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <Label>Password</Label>
              <Field
                type="password"
                name="password"
                placeholder="Your password"
              />
              <ErrorMessage
                name="password"
                render={message => (
                  <StyledErrorMessage>{message}</StyledErrorMessage>
                )}
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
