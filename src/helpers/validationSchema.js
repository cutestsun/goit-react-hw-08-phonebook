import * as yup from 'yup';
import 'yup-phone-lite';

export const contactsValidationSchema = yup.object({
  name: yup.string().min(2).max(32).required('This field is required'),
  number: yup
    .string()
    .phone(null, `Please enter a valid phone number`)
    .required('This field is required'),
});

// Please enter a valid phone number in an international format. Example: +380 50-123-4567

export const registerValidationSchema = yup.object({
  name: yup.string().min(2).max(32).required('This field is required'),
  email: yup.string().email().required('This field is required'),
  password: yup.string().min(7).max(32).required('This field is required'),
});

export const loginValidationSchema = yup.object({
  email: yup.string().email().required('This field is required'),
  password: yup.string().min(7).max(32).required('This field is required'),
});
