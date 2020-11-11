import React, { useState } from 'react'

import { useAuth } from 'src/context/AuthProvider'

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
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" onChange={handleEmailChange} value={email} />
        <input type="password" onChange={handlePasswordChange} value={password} />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Login
