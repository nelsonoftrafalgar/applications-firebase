import {Error} from 'src/styles/error'
import React from 'react'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'
import { useField } from 'react-final-form'

const { dark_bg, light_font_color, basic_font_family } = globalStyles

interface IProps {
  placeholder?: string
  type: 'text' | 'email' | 'password'
  name: string
  validate: (value: string) => string | undefined
}

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  background: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  font-family: ${basic_font_family};
`

const Input: React.FC<IProps> = ({ type, name, validate, placeholder }) => {
  const { input, meta } = useField(name, { validate })
  const errorMessage = !meta.active && meta.submitFailed && meta.error

  return (
    <>
      <StyledInput data-testid={`${name.toUpperCase()}-INPUT`} placeholder={placeholder || name} type={type} {...input} />
      <Error data-testid={`${name.toUpperCase()}-INPUT-ERROR`}>{errorMessage}</Error>
    </>
  )
}

export default Input
