import { Button, StyledLink } from 'src/styles'

import { INavContext } from 'src/models/nav'
import NavItem from 'src/layout/NavItem'
import React from 'react'
import { globalStyles } from 'src/styles/styles'
import { navigation } from 'src/data/navigation'
import styled from 'styled-components'
import { useAuth } from 'src/context/AuthProvider'
import { useNavState } from 'src/hooks/useNavState'

const { light_bg, basic_font_family, basic_font_color } = globalStyles

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${light_bg};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Logo = styled.h1`
  color: ${basic_font_color};
  font-size: 20px;
  font-family: ${basic_font_family};
  margin-bottom: 10px;
`
export const NavContext = React.createContext({} as INavContext)

const Nav = () => {
  const { logout } = useAuth()
  const { activeNavState, handleSetActiveItem } = useNavState()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <NavContext.Provider value={{ activeNavState, handleSetActiveItem }}>
      <Container>
        <StyledLink to="/">
          <Logo data-testid={'NAV-LOGO'} onClick={handleSetActiveItem('', null, null)}>
            Applications
          </Logo>
        </StyledLink>
        {navigation.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
        <Button margin={'auto 0 0'} padding={'10px 20px'} onClick={handleLogout}>Logout</Button>
      </Container>
    </NavContext.Provider>
  )
}

export default Nav
