import { contactsValidationSchema } from 'helpers/validationSchema';
import {
  AllInputsWrapper,
  Button,
  Field,
  Form,
  InputWrapper,
  Label,
  StyledErrorMessage,
} from './ContactsForm.styled';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactsForm = ({ closeModal }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = (values, action) => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInContacts) {
      return alert(`${values.name} is already in contacts`);
    }

    dispatch(addContact(values));
    closeModal();

    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactsValidationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <AllInputsWrapper>
          <InputWrapper>
            <Label>Name</Label>
            <Field type="text" name="name" placeholder="Anna" />
            <ErrorMessage
              name="name"
              render={message => (
                <StyledErrorMessage>{message}</StyledErrorMessage>
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Number</Label>
            <Field type="tel" name="number" placeholder="+380" />
            <ErrorMessage
              name="number"
              render={message => (
                <StyledErrorMessage>{message}</StyledErrorMessage>
              )}
            />
          </InputWrapper>
        </AllInputsWrapper>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
