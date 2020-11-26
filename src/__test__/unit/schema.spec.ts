import { validateDate, validateEmail, validatePassword, validateSalary, validateSearch, validateSelect } from 'src/validation/schema'

const validEmails = [
  'test@test.com',
  'testet214ese@etsetst124.com',
  'sdf234sdf@sd5sdg.sdg'
]

const invalidEmails = [
  '@dssd@sd.sgs',
  'sdsvs.sdvdsv.sdvsv',
  'sdvdsv@vdsv/sdv.sdv'
]

const validPassword = [
  'qwertyuiop',
  'hd345gasgi',
  'sdvsdvg879'
]

const invalidPassword = [
  'qwertyuiop<',
  'hd345gasg',
  'sdv.ssdvg879'
]

const validSearch = [
  'ttewstsafbfsdfb',
  'zsdvs svs',
  'sdvs98sdv'
]

const invalidSearch = [
  'sdvs,sdsd',
  '<ssdbsd>',
  'sdfdgfdg?sfdg'
]

const validDate = [
  '12-12-12',
  '12-03-00',
  '10-01-10'
]

const invalidDate = [
  '12 - 12 - 12',
  '12/03/00',
  '10.01.10'
]

const validSalary = [
  '12',
  '14',
  '6'
]

const invalidSalary = [
  '12.2',
  '12 $',
  '33 3'
]

test('validateEmail checks email format', () => {
  const valid = validEmails.map(validateEmail)
  const invalid = invalidEmails.map(validateEmail)

  expect(valid.every((item) => item === undefined)).toBeTruthy()
  expect(invalid.every((item) => item !== undefined)).toBeTruthy()
})

test('validatePassword checks password format', () => {
  const valid = validPassword.map(validatePassword)
  const invalid = invalidPassword.map(validatePassword)

  expect(valid.every((item) => item === undefined)).toBeTruthy()
  expect(invalid.every((item) => item !== undefined)).toBeTruthy()
})

test('validateSearch checks search format', () => {
  const valid = validSearch.map(validateSearch)
  const invalid = invalidSearch.map(validateSearch)

  expect(valid.every((item) => item === undefined)).toBeTruthy()
  expect(invalid.every((item) => item !== undefined)).toBeTruthy()
})

test('validateSelect checks select format', () => {
  expect(validateSelect('')).toEqual('please select')
  expect(validateSelect('select')).toBeUndefined()
})

test('validateDate checks date format', () => {
  const valid = validDate.map(validateDate)
  const invalid = invalidDate.map(validateDate)

  expect(valid.every((item) => item === undefined)).toBeTruthy()
  expect(invalid.every((item) => item !== undefined)).toBeTruthy()
})

test('validateSalary checks salary format', () => {
  const valid = validSalary.map(validateSalary)
  const invalid = invalidSalary.map(validateSalary)

  expect(valid.every((item) => item === undefined)).toBeTruthy()
  expect(invalid.every((item) => item !== undefined)).toBeTruthy()
})