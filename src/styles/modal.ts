import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 50px;
  right: 80px;
  background: transparent;
  color: ${globalStyles.basic_font_color};
  font-size: 25px;
  cursor: pointer;
`