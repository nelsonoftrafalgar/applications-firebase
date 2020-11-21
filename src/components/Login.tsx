import { Col, Row } from 'src/grid'
import React, { useState } from 'react'
import { validateEmail, validatePassword } from 'src/validation/schema'

import { Button } from 'src/styles/button'
import { Error } from 'src/styles/error'
import { Form } from 'react-final-form'
import Input from 'src/components/Input'
import { Loader } from 'src/styles/loader'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'
import { useAuth } from 'src/context/AuthProvider'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled.form`
  background: ${globalStyles.light_bg};
  padding: 20px;
  width: 300px;
`

interface IFormState {
  email: string
  password: string
}

const Login = () => {
  const { login } = useAuth()
  const [loginError, setLoginError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const onSubmit = async ({ email, password }: IFormState) => {
    setIsLoading(true)
    try {
      await login(email, password)
      setIsLoading(false)
      history.push('/')
    } catch (error) {
      setLoginError(error.message)
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, active }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <Row direction="column">
              <Col size={12} mb={20}>
                <Input type="email" name="email" validate={validateEmail} />
              </Col>
              <Col size={12} mb={20}>
                <Input type="password" name="password" validate={validatePassword} />
              </Col>
              <Col size={12}>
                <Button padding={'10px 20px'} type="submit" disabled={isLoading}>
                  {isLoading ? <Loader /> : 'Login'}
                </Button>
              </Col>
            </Row>
            {!active && <Error>{loginError}</Error>}
          </FormWrapper>
        )}
      />
    </Container>
  )
}

export default Login
