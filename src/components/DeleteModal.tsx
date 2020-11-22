import { Background, CloseButton } from 'src/styles/modal'
import { Button, Title } from 'src/styles'
import { Col, Row } from 'src/grid'
import React, { useState } from 'react'

import { ISearchResult } from 'src/models/search'
import { Loader } from 'src/styles/loader'
import { database } from 'src/firebase'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

const Container = styled.div`
  width: 250px;
  background: ${globalStyles.light_bg};
  padding: 20px;
`

interface IDeleteModalProps {
  id: keyof ISearchResult
  handleToggleDeleteModal: (id: keyof ISearchResult, isOpen: boolean) => () => void
}

const DeleteModal: React.FC<IDeleteModalProps> = ({ id, handleToggleDeleteModal }) => {
  const [isLoading, setIsLoading] = useState(false)

  const deleteRecord = () => {
    setIsLoading(true)
    database.ref(`applications/${id}`).remove(() => setIsLoading(false))
  }

  return (
    <Background>
      <Container>
        <CloseButton type="button" onClick={handleToggleDeleteModal(id, false)}>
          &#10006;
        </CloseButton>
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
    </Background>
  )
}

export default DeleteModal
