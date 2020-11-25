import { Col, Row } from 'src/grid'
import {Section, Title} from 'src/styles'
import { getDateChartData, getDatesRange, getLineChartWidgetData } from 'src/helpers/getLineChartWidgetData'

import DateWidget from 'src/components/DateWidget'
import React from 'react'
import { useStatistics } from 'src/context/StatisticsProvider'

const Date = () => {
  const { statistics } = useStatistics()

  if (!statistics) {
    return null
  }

  const range = getDatesRange()
  const values = getLineChartWidgetData(statistics, 'application_date')
  const chartData = getDateChartData(range, values)

  return (
    <Section scrollOverflow={true}>
      <Title>Date</Title>
      <Row mt={20}>
        <Col size={12}>
          <DateWidget data={chartData}/>
        </Col>
      </Row>
    </Section>
  )
}

export default Date
