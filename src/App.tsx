import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Add from 'src/pages/Add'
import AuthProvider from 'src/context/AuthProvider'
import Bad from 'src/pages/Bad'
import Layout from 'src/layout/Layout'
import Login from 'src/components/Login'
import React from 'react'
import Search from 'src/pages/Search'
import { globalStyles } from 'src/styles/styles'

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  background: ${globalStyles.dark_bg};
`

const StyleReset = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}`

const App = () => {
  return (
    <>
      <StyleReset />
      <AuthProvider>
        <Container>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Layout>
                <Route exact={true} path="/" />
                <Route path="/search" component={Search} />
                <Route path="/bad" component={Bad} />
                <Route path="/add" component={Add} />
              </Layout>
            </Switch>
          </Router>
        </Container>
      </AuthProvider>
    </>
  )
}

export default App
