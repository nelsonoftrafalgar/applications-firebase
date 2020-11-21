import React from 'react'
import styled from 'styled-components'

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface ICol {
  size: ColSize
  mb?: number
  mt?: number
  expand?: boolean
}

const Style = styled('div')<ICol>`
  ${({ size }) => `width: calc(${size} / 12 * 100%);`}
  ${({ mt }) => `margin-top: ${mt}px;`}
  ${({ mb }) => `margin-bottom: ${mb}px;`}
  ${({ expand }) => `padding: 0 ${expand ? 0 : '10px'};`}
`

const Col: React.FC<ICol> = ({ children, size, mb, mt, expand }) => {
  return (
    <Style expand={expand} mb={mb} mt={mt} size={size}>
      {children}
    </Style>
  )
}

export { Col }
