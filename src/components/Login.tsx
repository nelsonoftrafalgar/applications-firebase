import { Col, Row } from 'src/grid'
import React, { useState } from 'react'
import { validateEmail, validatePassword } from 'src/validation/schema'

import { Button } from 'src/styles/button'
import { Error } from 'src/styles/error'
import { Form } from 'react-final-form'
import Input from 'src/components/Input'
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
  const { login, logout } = useAuth()
  const [loginError, setLoginError] = useState('')
  const history = useHistory()

  const onSubmit = async ({ email, password }: IFormState) => {
    try {
      await login(email, password)
      history.push('/')
    } catch (error) {
      setLoginError(error.message)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      console.log('logout success')
    } catch {
      console.log('logout error')
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
                <Button padding={'10px 20px'} type="submit">
                  Login
                </Button>
              </Col>
            </Row>
            {!active && <Error>{loginError}</Error>}
          </FormWrapper>
        )}
      />
      <button onClick={handleLogout}>Logout</button>
    </Container>
  )
}

export default Login
