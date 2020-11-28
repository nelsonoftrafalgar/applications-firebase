import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import { IPercentWidgetData } from 'src/models/statistiscs'
import { PieChartWithLegend } from 'src/components/charts/PieChartWithLegend'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background: ${globalStyles.light_bg};
  padding: 20px;
`

interface IProps {
  data: IPercentWidgetData[]
}

const PercentWidget: React.FC<IProps> = ({ data }) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const [parentWidth, setParentWidth] = useState(0)
  const padding = 20

  useEffect(() => {
    const { width } = containerRef.current.getBoundingClientRect()
    setParentWidth(width - padding * 2)
  }, [])

  return (
    <Container ref={containerRef}>
      <PieChartWithLegend parentWidth={parentWidth} data={data} />
    </Container>
  )
}

export { PercentWidget }
