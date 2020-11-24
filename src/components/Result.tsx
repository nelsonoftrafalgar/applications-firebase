import { Col, Row } from 'src/grid'
import { Section, Title } from 'src/styles'

import { PercentWidget } from 'src/components/PercentWidget'
import React from 'react'
import { getPercentWidgetData } from 'src/helpers/getPercentWidgetData'
import { useStatistics } from 'src/context/StatisticsProvider'

const Result = () => {
  const { statistics } = useStatistics()

  if (!statistics) {
    return null
  }

  const result = getPercentWidgetData(statistics, 'application_result')

  return (
    <Section>
      <Title>Position</Title>
      <Row mt={20} expand={true}>
        <Col size={6}>
          <PercentWidget data={result} />
        </Col>
      </Row>
    </Section>
  )
}

export default Result
