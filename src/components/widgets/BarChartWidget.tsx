import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import { BarChartComponent } from 'src/components/charts/BarChartComponent'
import { IBarChartWidgetData } from 'src/models/statistiscs'
import { Title } from 'src/styles'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: ${globalStyles.light_bg};
  padding: 20px;
`

interface IProps {
  data: IBarChartWidgetData[]
  color: string
  title: string
}

const BarChartWidget: React.FC<IProps> = ({ data, color, title }) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const [parentWidth, setParentWidth] = useState(0)

  useEffect(() => {
    const { width } = containerRef.current.getBoundingClientRect()
    setParentWidth(width)
  }, [])

  return (
    <Container ref={containerRef}>
      <Title margin={'0 0 20px 0'}>{title}</Title>
      <BarChartComponent color={color} parentWidth={parentWidth} data={data} />
    </Container>
  )
}

export { BarChartWidget }
