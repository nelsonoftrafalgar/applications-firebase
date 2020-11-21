import { Col, Row } from 'src/grid'
import React, { useState } from 'react'
import { validateSearch, validateSelect } from 'src/validation/schema'

import { Button } from 'src/styles'
import { Form } from 'react-final-form'
import { ISearchValue } from 'src/models/search'
import Input from 'src/components/Input'
import { Loader } from 'src/styles/loader'
import Select from './Select'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

const FormWrapper = styled.form`
  width: 100%;
  background: ${globalStyles.light_bg};
  padding: 20px;
`

const SELECT_OPTIONS = [
  { label: 'select type', value: '' },
  { label: 'company', value: 'company_name' },
  { label: 'position', value: 'position_name' },
  { label: 'result', value: 'application_result' }
]

interface ISearchFormProps {
  handleSearch: (value: ISearchValue, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void
}

const SearchForm: React.FC<ISearchFormProps> = ({handleSearch}) => {
  const [isLoading, setIsLoading] = useState(false)
  const onSubmit = (value: ISearchValue) => {
    setIsLoading(true)
    handleSearch(value, setIsLoading)
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Row>
            <Col size={3}>
              <Input type="text" name="phrase" validate={validateSearch} />
            </Col>
            <Col size={3}>
              <Select name="select" options={SELECT_OPTIONS} validate={validateSelect} />
            </Col>
            <Col size={3}>
              <Button padding={'10px 20px'} type="submit" disabled={isLoading}>
                {isLoading ? <Loader /> : 'Search'}
              </Button>
            </Col>
          </Row>
        </FormWrapper>
      )}
    />
  )
}

export default SearchForm
