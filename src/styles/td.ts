import { globalStyles } from './styles'
import styled from 'styled-components'

const {basic_font_color, basic_font_family, dark_bg} = globalStyles

export const Td = styled.td`
  color: ${basic_font_color};
  font-family: ${basic_font_family};
  text-align: center;
  background: ${dark_bg};
  padding: 10px;
`
