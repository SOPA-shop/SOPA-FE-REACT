import * as Yup from 'yup';
import { emailRegex, passwordRegex } from '../regex_variables.js';

export const validateEmailAndPassword = Yup.object().shape({
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
export const validateEmail = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(emailRegex, 'email must only contain letters and numbers')
    .required('Email is required'),
})
export const validatePasswordAndConfirmPassword = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must be at most 30 characters')
    .matches(passwordRegex, 'Password must only contain letters and numbers')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .min(6, 'Confirm Password must be at least 6 characters')
    .max(30, 'Confirm Password must be at most 30 characters')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const validateOTP = Yup.object().shape({
  OTP: Yup.string()
    .required('OTP is required')
    .matches(/^[A-Z0-9]{6}$/, 'OTP must only contain uppercase letters and numbers'),
});
