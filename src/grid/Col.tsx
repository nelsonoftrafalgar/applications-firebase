import React from 'react'
import styled from 'styled-components'

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface IColStyle {
  size: number
  mb?: number
  mt?: number
}

interface ICol {
  size: ColSize
  mb?: number
  mt?: number
}

const Style = styled('div')<IColStyle>`
  ${({size}) => `width: calc(${size} / 12 * 100%);`}
  ${({mt}) => `margin-top: ${mt}px;`}
  ${({mb}) => `margin-bottom: ${mb}px;`}
`

const Col: React.FC<ICol> = ({
  children,
  size,
  mb,
  mt
}) => {
  return (
    <Style mb={mb} mt={mt} size={size}>
      {children}
    </Style>
  )
}

export {Col}
