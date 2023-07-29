import { ErrorMessage, Formik } from 'formik';
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
  StyledErrorMessage,
  Title,
} from './LogInForm.styled';
import { loginValidationSchema } from 'helpers/validationSchema';

export const LogInForm = () => {
  const dispatch = useDispatch();

  return (
    <FormWrapper>
      <Title>Log in</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
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
          <Button type="submit">Log In</Button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
