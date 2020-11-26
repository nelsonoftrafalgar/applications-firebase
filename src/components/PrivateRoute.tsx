import { Redirect, Route } from 'react-router-dom'

import React from 'react'
import { useAuth } from 'src/context/AuthProvider'

interface IProps {
  path: string
  component?: React.FC
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, path }) => {
  const { user } = useAuth()
  return (
    <Route
      exact
      path={path}
      render={() =>
        user ? !Component ? <Redirect to="/" /> : <Component /> : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute
