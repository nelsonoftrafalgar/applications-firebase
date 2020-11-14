import { globalStyles } from './styles'
import styled from 'styled-components'

interface IButton {
  padding?: string
  margin?: string
}

const {basic_font_family, dark_bg, light_font_color} = globalStyles

export const Button = styled('button')<IButton>`
  width: 100%;
  font-family: ${basic_font_family};
  color: ${light_font_color};
  border-radius: 50px;
  background: ${dark_bg};
  font-size: 16px;
  cursor: pointer;
  ${({padding}) => `padding: ${padding};`}
  ${({margin}) => `margin: ${margin};`}

  &:disabled {
    cursor: auto;
  }
`
