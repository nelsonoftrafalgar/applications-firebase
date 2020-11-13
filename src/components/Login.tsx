import { Col, Row } from 'src/grid'

import { Button } from 'src/styles/button'
import { Form } from 'react-final-form'
import Input from 'src/components/Input'
import React from 'react'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'
import { useAuth } from 'src/context/AuthProvider'

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

  const onSubmit = async ({ email, password }: IFormState) => {
    try {
      await login(email, password)
      console.log('login success')
    } catch {
      console.log('login error')
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
        render={({ handleSubmit }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <Row direction="column">
              <Col size={12} mb={20}>
                <Input type="email" name="email" />
              </Col>
              <Col size={12} mb={20}>
                <Input type="password" name="password" />
              </Col>
              <Col size={12}>
                <Button padding={'10px 20px'} type="submit">
                  Login
                </Button>
              </Col>
            </Row>
          </FormWrapper>
        )}
      />

      <button onClick={handleLogout}>Logout</button>
    </Container>
  )
}

export default Login
