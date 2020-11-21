import { Error } from 'src/styles/error'
import React from 'react'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'
import { useField } from 'react-final-form'

interface ISelectOption {
  label: string
  value: string
}

interface IProps {
  name: string
  options: ISelectOption[]
  validate: (value: string) => string | undefined
}

const { light_font_color, dark_bg, basic_font_family } = globalStyles

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  background-color: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  font-family: ${basic_font_family};
  appearance: none;
  cursor: pointer;
`

const Select: React.FC<IProps> = ({ name, options, validate }) => {
  const { input, meta } = useField(name, { validate })
  const errorMessage = !meta.active && meta.submitFailed && meta.error

  return (
    <>
      <StyledSelect {...input}>
        {options.map(({ label, value }) => (
          <option key={label} aria-selected={false} value={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
      <Error>{errorMessage}</Error>
    </>
  )
}

export default Select
