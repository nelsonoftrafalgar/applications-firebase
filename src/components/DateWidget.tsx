import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import { ILineChartWidgetData } from 'src/models/statistiscs'
import { LineChartComponent } from 'src/components/LineChartComponent'
import { colors } from 'src/data/colors'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: ${globalStyles.light_bg};
  padding: 20px;
`

interface IProps {
  data: ILineChartWidgetData[]
}

const DateWidget: React.FC<IProps> = ({ data }) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const [parentWidth, setParentWidth] = useState(0)

  useEffect(() => {
    const { width } = containerRef.current.getBoundingClientRect()
    setParentWidth(width)
  }, [])

  return (
    <Container ref={containerRef}>
      <LineChartComponent data={data} parentWidth={parentWidth} color={colors[4]} />
    </Container>
  )
}

export default DateWidget
