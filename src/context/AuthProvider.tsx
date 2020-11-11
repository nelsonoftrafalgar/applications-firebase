import React, { useContext, useEffect, useState } from 'react'

import { auth } from 'src/firebase'
import firebase from 'firebase'

interface IAuthContext {
  user: firebase.User | null
  login: (email: string, password: string) => Promise<firebase.auth.UserCredential>
  logout: () => Promise<void>
}

const AuthContext = React.createContext({} as IAuthContext)

export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState(true)

  const login = (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password)

  const logout = () => auth.signOut()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
