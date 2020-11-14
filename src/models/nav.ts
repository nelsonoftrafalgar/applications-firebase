export interface INavItemSubGroup {
  name: string
  path: string
}

export interface INavState {
  [key: string]: boolean
}

export interface INavContext {
  activeNavState: INavState
  handleSetActiveItem: (name: string, firstChild: string | null, parent: string | null) => () => void
}

export interface IActiveNavItem {
  isActive: boolean
}
