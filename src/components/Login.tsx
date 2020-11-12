import { Col, Row } from 'src/grid'
import React, { useState } from 'react'

import { Button } from 'src/styles/button'
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

const FormWrapper = styled.div`
  background: ${globalStyles.light_bg};
  padding: 20px;
`

const Login = () => {
  const { login, logout } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPasswword] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswword(e.currentTarget.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <Row direction="column">
            <Col size={12} mb={20}>
              <input type="email" onChange={handleEmailChange} value={email} />
            </Col>
            <Col size={12} mb={20}>
              <input type="password" onChange={handlePasswordChange} value={password} />
            </Col>
            <Col size={12}>
              <Button padding={'10px 20px'} type="submit">
                Login
              </Button>
            </Col>
          </Row>
        </form>
        <button onClick={handleLogout}>Logout</button>
      </FormWrapper>
    </Container>
  )
}

export default Login
