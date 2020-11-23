import { Col, Row } from 'src/grid'
import { Section, Title } from 'src/styles'

import BadForm from 'src/forms/BadForm'
import BadResults from 'src/components/BadResults'
import React from 'react'

const Bad = () => {
  return (
    <Section scrollOverflow={true}>
      <Title>Bad</Title>
      <Row mt={20}>
        <Col size={12}>
          <BadForm/>
        </Col>
      </Row>
      <Row pb={20} mt={20}>
        <Col size={12}>
          <BadResults/>
        </Col>
      </Row>
    </Section>
  )
}

export default Bad
