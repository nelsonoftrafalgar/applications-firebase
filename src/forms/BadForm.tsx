import { Col, Row } from 'src/grid'
import React, { useState } from 'react'

import { Button } from 'src/styles'
import { Form } from 'react-final-form'
import { IBadFormItem } from 'src/models/bad'
import Input from 'src/components/forms/Input'
import { Loader } from 'src/styles/loader'
import { globalStyles } from 'src/styles/styles'
import { query } from 'src/services/query'
import styled from 'styled-components'
import { validateSearch } from 'src/validation/schema'

const FormWrapper = styled.form`
  width: 100%;
  background: ${globalStyles.light_bg};
  padding: 20px;
`

const BadForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (value: IBadFormItem) => {
    setIsLoading(true)
    query.create('bad_companies', value, setIsLoading)
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Row>
            <Col size={3}>
              <Input name="company_name" placeholder="name" type="text" validate={validateSearch} />
            </Col>
            <Col size={3}>
              <Button padding={'10px 20px'} type="submit" disabled={isLoading}>
                {isLoading ? <Loader /> : 'Add'}
              </Button>
            </Col>
          </Row>
        </FormWrapper>
      )}
    />
  )
}

export default BadForm
