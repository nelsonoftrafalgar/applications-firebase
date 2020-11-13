import { emailRegex, passwordRegex } from 'src/validation/regex'

export const validateEmail = (value: string) => {
  return value && emailRegex.test(value) ? undefined : 'invalid email format'
}

export const validatePassword = (value: string) => {
  return value && passwordRegex.test(value) ? undefined : 'invalid password format'
}