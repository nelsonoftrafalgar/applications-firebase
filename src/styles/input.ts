import { globalStyles } from './styles'
import styled from 'styled-components'

interface IInput {
  margin: string
}

const {dark_bg, light_font_color, basic_font_family} = globalStyles

export const Input = styled('input')<IInput>`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  background: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  ${({margin}) => `margin: ${margin};`}
  font-family: ${basic_font_family};
`
