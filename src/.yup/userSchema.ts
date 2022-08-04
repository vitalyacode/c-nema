import * as yup from 'yup'

export const userSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[A-Z][a-z]*$/, 'First name must start with capital letter')
    .max(100, 'Value too long'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[A-Z][a-z]*$/, 'Second name must start with capital letter')
    .max(100, 'Value too long'),
  email: yup
    .string()
    .required('Email is required')
    .email('Must be email')
    .max(40),
})
