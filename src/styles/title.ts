import { globalStyles } from './styles'
import styled from 'styled-components'

interface ITitle {
  margin?: string
  text_align?: string
}

const {basic_font_family, basic_font_color} = globalStyles

export const Title = styled('h2')<ITitle>`
  color: ${basic_font_color};
  font-size: 20px;
  font-family: ${basic_font_family};
  ${({margin}) => `margin: ${margin};`}
  ${({text_align}) => `text-align: ${text_align};`}
`
