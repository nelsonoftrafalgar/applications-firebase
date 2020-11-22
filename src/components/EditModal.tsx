import { Background, CloseButton } from 'src/styles/modal'
import { Button, Title } from 'src/styles'
import { Col, Row } from 'src/grid'
import { ISearchResult, ISearchResultIem } from 'src/models/search'
import React, { useState } from 'react'
import { validateDate, validateSalary, validateSearch } from 'src/validation/schema'

import { Form } from 'react-final-form'
import { IEditModalState } from 'src/hooks/useEditModal'
import Input from 'src/components/Input'
import { Loader } from 'src/styles/loader'
import { database } from 'src/firebase'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

const FormWrapper = styled.form`
  width: 500px;
  background: ${globalStyles.light_bg};
  padding: 20px;
`

interface IEditModal {
  editModalState: IEditModalState
  handleToggleEditModal: (id: keyof ISearchResult, isOpen: boolean) => () => void
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
                  onClick={handleToggleEditModal(editModalState.id, false)}
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
