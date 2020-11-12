import { globalStyles } from './styles'
import styled from 'styled-components'

const {form_error_color, basic_font_family} = globalStyles

export const Error = styled.p`
  font-family: ${basic_font_family};
  color: ${form_error_color};
  margin-bottom: 20px;
`
