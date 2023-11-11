import * as Yup from 'yup';
import { emailRegex, passwordRegex } from '../regex_variables.js';

const validateEmailAndPassword = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(emailRegex, 'email must only contain letters and numbers')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must be at most 30 characters')
    .matches(passwordRegex, 'Password must only contain letters and numbers')
    .required('Password is required'),
});

export default validateEmailAndPassword;
