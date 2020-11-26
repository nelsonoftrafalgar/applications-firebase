import { Button, Title } from 'src/styles'
import { Col, Row } from 'src/grid'
import React, { useState } from 'react'

import { IBadResult } from 'src/models/bad'
import { ISearchResult } from 'src/models/search'
import { Loader } from 'src/styles/loader'
import { globalStyles } from 'src/styles/styles'
import { query } from 'src/services/query'
import styled from 'styled-components'

const Container = styled.div`
  width: 250px;
  background: ${globalStyles.light_bg};
  padding: 20px;
`
type TableType = 'applications' | 'bad_companies'

interface IProps {
  id: keyof ISearchResult | keyof IBadResult
  table: TableType
}

const Delete: React.FC<IProps> = ({ id, table }) => {
  const [isLoading, setIsLoading] = useState(false)

  const deleteRecord = () => {
    setIsLoading(true)
    query.delete(`${table}/${id}`, setIsLoading)
  }

  return (
    <Container>
      <Row direction="column">
        <Col size={12}>
          <Title text_align={'center'} margin={'0 0 20px 0'}>
            Confirm delete
          </Title>
        </Col>
        <Col size={12}>
          <Button
            onClick={deleteRecord}
            padding={'10px'}
            margin={'20px 0 0 0'}
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : 'Confirm'}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Delete
