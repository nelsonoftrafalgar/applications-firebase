import { Button, Title } from 'src/styles'
import { Col, Row } from 'src/grid'
import React, { useState } from 'react'

import { Form } from 'react-final-form'
import { IEditFormModalState } from 'src/hooks/useEditFormModal'
import { ISearchResultItem } from 'src/models/search'
import Input from 'src/components/Input'
import { Loader } from 'src/styles/loader'
import { ResultKey } from 'src/models/main'
import { globalStyles } from 'src/styles/styles'
import { query } from 'src/services/query'
import styled from 'styled-components'
import { validateSearch } from 'src/validation/schema'

interface IProps {
  editFormState: IEditFormModalState
}

const FormWrapper = styled.form`
  width: 300px;
  background: ${globalStyles.light_bg};
  padding: 20px;
`

const EditBadForm: React.FC<IProps> = ({ editFormState }) => {
  const [isLoading, setIsLoading] = useState(false)

  const update = (key: ResultKey, values: ISearchResultItem) => {
    const updatedEntry = {
      [`bad_companies/${key}`]: { ...values }
    }

    query.update(updatedEntry, setIsLoading)
  }

  const onSubmit = (values: ISearchResultItem) => {
    setIsLoading(true)
    update(editFormState.id, values)
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ ...editFormState.item }}
      render={({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Row direction="column">
            <Col size={12}>
              <Title text_align={'center'} margin={'0 0 20px 0'}>
                Edit
              </Title>
            </Col>
            <Col size={12} mb={20}>
              <Input
                type="text"
                placeholder="company"
                name="company_name"
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
  )
}

export default EditBadForm
