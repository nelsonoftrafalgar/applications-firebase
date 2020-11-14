import { IActiveNavItem, INavItemSubGroup } from 'src/models/nav'
import React, { useContext } from 'react'

import { NavContext } from 'src/layout/Nav'
import NavSubItem from './NavSubItem'
import { StyledLink } from 'src/styles'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

const {
  border_radius,
  dark_bg,
  light_bg,
  nav_dot_color,
  light_font_color,
  basic_font_family
} = globalStyles

export const Container = styled('button')<IActiveNavItem>`
  border-radius: ${border_radius};
  ${({ isActive }) => `background: ${isActive ? dark_bg : light_bg};`}
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  margin: 10px 0;
  cursor: pointer;
`

const Icon = styled.img`
  width: 15px;
  height: 15px;
`

export const Dot = styled('span')<IActiveNavItem>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  ${({ isActive }) => `background: ${isActive ? nav_dot_color : light_bg};`}
  margin: 0 5px 0 auto;
`

const Chevron = styled('span')<IActiveNavItem>`
  color: ${light_font_color};
  ${({ isActive }) => `transform: rotate(${isActive ? '90deg' : '270deg'});`}
  transition: transform .2s ease;
  margin: 0 5px 0 auto;
`

export const Section = styled.p`
  color: ${light_font_color};
  font-size: 15px;
  font-family: ${basic_font_family};
  margin-left: 10px;
`

const SubGroupContainer = styled('div')<IActiveNavItem>`
  align-self: flex-end;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({ isActive }) =>
    `transition: max-height .5s ${isActive ? 'ease-in' : 'cubic-bezier(0,1,0,1)'};`}
  overflow: hidden;
  ${({ isActive }) => `max-height: ${isActive ? 1000 : 0}px;`}
`

interface INavItemProps {
  name: string
  icon?: string
  sub_group?: INavItemSubGroup[]
  path: string
}

const NavItem: React.FC<INavItemProps> = ({ icon, name, sub_group, path }) => {
  const { activeNavState, handleSetActiveItem } = useContext(NavContext)

  const isActive = activeNavState[name]
  const pathWithChildren = sub_group?.[0].path || path
  const firstChild = sub_group?.[0].name || null

  return (
    <>
      <StyledLink to={pathWithChildren}>
        <Container
          data-testid={`${name}-NAV-ITEM`}
          isActive={isActive}
          onClick={handleSetActiveItem(name, firstChild, null)}
        >
          <Icon src={icon} alt={`${name} icon`} />
          <Section>{name}</Section>
          {sub_group ? (
            <Chevron isActive={isActive}>&#10095;</Chevron>
          ) : (
            <Dot isActive={isActive} />
          )}
        </Container>
      </StyledLink>
      {sub_group && (
        <SubGroupContainer isActive={isActive}>
          {sub_group?.map((item: INavItemSubGroup) => (
            <NavSubItem key={item.name} {...item} parent={name} />
          )) || []}
        </SubGroupContainer>
      )}
    </>
  )
}

export default NavItem
