import { Col, Row } from 'src/grid'
import React, { useReducer } from 'react'
import { Section, Title } from 'src/styles'
import {
  datePickerReducer,
  getDateChartData,
  getDatesRange,
  getLineChartWidgetData,
  parseDate
} from 'src/helpers/getLineChartWidgetData'

import DatePicker from 'src/components/DatePicker'
import DateWidget from 'src/components/DateWidget'
import { useStatistics } from 'src/context/StatisticsProvider'

const Date = () => {
  const { statistics } = useStatistics()
  const [datePickerState, dispatch] = useReducer(datePickerReducer, {
    startDate: null,
    endDate: null,
    focusedInput: null
  })

  if (!statistics) {
    return null
  }

  const parsedDate = parseDate(datePickerState.startDate, datePickerState.endDate)
  const range = getDatesRange(parsedDate)
  const values = getLineChartWidgetData(statistics, 'application_date')
  const chartData = getDateChartData(range, values)

  return (
    <Section scrollOverflow={true}>
      <Title>Date</Title>
      <Row direction="column" mt={20}>
        <Col expand size={12}>
          <DatePicker state={datePickerState} dispatch={dispatch} />
        </Col>
        <Col expand size={12}>
          <DateWidget data={chartData} />
        </Col>
      </Row>
    </Section>
  )
}

export default Date
