import { Col, Row } from 'src/grid'

import Nav from 'src/layout/Nav'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <Row>
      <Col size={2}>
        <Nav />
      </Col>
      <Col size={10}>{children}</Col>
    </Row>
  )
}

export default Layout
