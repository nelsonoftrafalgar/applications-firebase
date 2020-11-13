import React from 'react'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'
import { useField } from 'react-final-form'

const { dark_bg, light_font_color, basic_font_family } = globalStyles

interface IProps {
  type: 'text' | 'email' | 'password'
  name: string
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

const Input: React.FC<IProps> = ({ type, name }) => {
  const { input } = useField(name)

  return <StyledInput placeholder={name} type={type} {...input} />
}

export default Input
