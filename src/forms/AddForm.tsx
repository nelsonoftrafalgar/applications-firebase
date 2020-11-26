import { Button, Title } from 'src/styles'
import { Col, Row } from 'src/grid'
import React, { useState } from 'react'
import { validateDate, validateSalary, validateSearch } from 'src/validation/schema'

import { Form } from 'react-final-form'
import { ISearchResultItem } from 'src/models/search'
import Input from 'src/components/Input'
import { Loader } from 'src/styles/loader'
import { globalStyles } from 'src/styles/styles'
import { query } from 'src/services/query'
import styled from 'styled-components'

const FormWrapper = styled.form`
  width: 100%;
  background: ${globalStyles.light_bg};
  padding: 20px;
`

const AddForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (values: ISearchResultItem) => {
    setIsLoading(true)
    query.create('applications', values, setIsLoading)
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Row direction="column">
            <Col size={12}>
              <Title text_align={'center'} margin={'0 0 20px 0'}>
                Add company
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
                {isLoading ? <Loader /> : 'Add'}
              </Button>
            </Col>
          </Row>
        </FormWrapper>
      )}
    />
  )
}

export default AddForm
