import AuthProvider from 'src/context/AuthProvider'
import Login from 'src/components/Login'
import React from 'react'

const App = () => {
  return (
    <AuthProvider>
      <Login/>
    </AuthProvider>
  )
}

export default App
