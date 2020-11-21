import { Button, Title } from 'src/styles'
import { Col, Row } from 'src/grid'
import React, { useState } from 'react'
import { validateDate, validateSalary, validateSearch } from 'src/validation/schema'

import { Form } from 'react-final-form'
import { IEditModalState } from 'src/hooks/useEditModal'
import { ISearchResultIem } from 'src/models/search'
import Input from 'src/components/Input'
import { Loader } from 'src/styles/loader'
import { database } from 'src/firebase'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

const { light_bg, basic_font_color } = globalStyles

const Background = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled.form`
  width: 500px;
  background: ${light_bg};
  padding: 20px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 50px;
  right: 80px;
  background: transparent;
  color: ${basic_font_color};
  font-size: 25px;
  cursor: pointer;
`

interface IEditModal {
  editModalState: IEditModalState
  handleToggleEditModal: (id: string, isOpen: boolean) => () => void
}

const EditModal: React.FC<IEditModal> = ({ editModalState, handleToggleEditModal }) => {
  const [isLoading, setIsLoading] = useState(false)

  const update = (key: string, values: ISearchResultIem) => {
    const updatedEntry = {
      [`applications/${key}`]: { ...values }
    }

    database.ref().update(updatedEntry, () => setIsLoading(false))
  }

  const onSubmit = (values: ISearchResultIem) => {
    setIsLoading(true)
    update(editModalState.id as string, values)
  }

  return (
    <Background>
      <Form
        onSubmit={onSubmit}
        initialValues={{ ...editModalState.item }}
        render={({ handleSubmit }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <Row direction="column">
              <Col size={12}>
                <Title text_align={'center'} margin={'0 0 20px 0'}>
                  Edit
                </Title>
                <CloseButton
                  type="button"
                  onClick={handleToggleEditModal(editModalState.id as string, false)}
                >
                  &#10006;
                </CloseButton>
              </Col>
              <Col size={12} mb={20}>
                <Input
                  type="text"
                  placeholder="company"
                  name="company_name"
                  validate={validateSearch}
                />
              </Col>
              <Col size={12} mb={20}>
                <Input
                  type="text"
                  placeholder="position"
                  name="position_name"
                  validate={validateSearch}
                />
              </Col>
              <Col size={12} mb={20}>
                <Input type="text" placeholder="min" name="salary_min" validate={validateSalary} />
              </Col>
              <Col size={12} mb={20}>
                <Input type="text" placeholder="max" name="salary_max" validate={validateSalary} />
              </Col>
              <Col size={12} mb={20}>
                <Input
                  type="text"
                  placeholder="date"
                  name="application_date"
                  validate={validateDate}
                />
              </Col>
              <Col size={12} mb={20}>
                <Input
                  type="text"
                  placeholder="result"
                  name="application_result"
                  validate={validateSearch}
                />
              </Col>
              <Col size={12}>
                <Button padding={'10px'} margin={'0 0 20px 0'} disabled={isLoading} type="submit">
                  {isLoading ? <Loader /> : 'Submit'}
                </Button>
              </Col>
            </Row>
          </FormWrapper>
        )}
      />
    </Background>
  )
}

export default EditModal
