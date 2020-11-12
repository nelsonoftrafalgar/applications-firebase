import { globalStyles } from './styles'
import styled from 'styled-components'

const {basic_font_family, form_success_color} = globalStyles

export const Status = styled.p`
  font-family: ${basic_font_family};
  color: ${form_success_color};
`
