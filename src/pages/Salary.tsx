import { Col, Row } from 'src/grid'
import { Section, Title } from 'src/styles'

import { BarChartWidget } from 'src/components/widgets/BarChartWidget'
import React from 'react'
import { colors } from 'src/data/colors'
import { getBarChartWidgetData } from 'src/helpers/getBarChartWidgetData'
import { useStatistics } from 'src/context/StatisticsProvider'

const Salary = () => {
  const { statistics } = useStatistics()

  if (!statistics) {
    return null
  }

  const salaryMinValues = getBarChartWidgetData(statistics, 'salary_min')
  const salaryMaxValues = getBarChartWidgetData(statistics, 'salary_max')

  return (
    <Section scrollOverflow={true}>
      <Title>Salary</Title>
      <Row mt={20}>
        <Col size={12}>
          <BarChartWidget title={'Min salaries'} data={salaryMinValues} color={colors[1]} />
        </Col>
      </Row>
      <Row mt={20} pb={20}>
        <Col size={12}>
          <BarChartWidget title={'Max salaries'} data={salaryMaxValues} color={colors[2]} />
        </Col>
      </Row>
    </Section>
  )
}

export default Salary
