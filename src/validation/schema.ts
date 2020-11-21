import { dateRegex, emailRegex, numberRegex, passwordRegex, searchRegex } from 'src/validation/regex'

export const validateEmail = (value: string) => {
  return value && emailRegex.test(value) ? undefined : 'invalid email format'
}

export const validatePassword = (value: string) => {
  return value && passwordRegex.test(value) ? undefined : 'invalid password format'
}

export const validateSearch = (value: string) => {
  return value && searchRegex.test(value) ? undefined : 'invalid text format'
}

export const validateSelect = (value: string) => {
  return value ? undefined : 'please select'
}

export const validateDate = (value: string) => {
  return value && dateRegex.test(value) ? undefined : 'invalid date format'
}

export const validateSalary = (value: string) => {
  return value && numberRegex.test(value) ? undefined : 'invalid number format'
}