import { Col, Row } from 'src/grid'
import { Section, Title } from 'src/styles'

import AddForm from 'src/forms/AddForm'
import React from 'react'

const Add = () => {
  return (
    <Section>
      <Title>Add</Title>
      <Row mt={20} expand={true}>
        <Col expand size={4}>
          <AddForm />
        </Col>
      </Row>
    </Section>
  )
}

export default Add
