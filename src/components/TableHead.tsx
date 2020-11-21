import React from 'react'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

const { basic_font_color, basic_font_family } = globalStyles

const Th = styled.th`
  color: ${basic_font_color};
  font-family: ${basic_font_family};
  padding: 10px;
`

interface ITableHeadProps {
  data: string[]
}

const TableHead: React.FC<ITableHeadProps> = ({ data }) => {
  return (
    <thead>
      <tr>
        {data.map((item: string) => (
          <Th key={item}>{item}</Th>
        ))}
      </tr>
    </thead>
  )
}

export { TableHead }
