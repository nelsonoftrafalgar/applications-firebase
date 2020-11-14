import { IStringIndexObject } from 'src/models/main'

export const getInitialNavState = (items: IStringIndexObject<boolean>) => {
  const state = {...items}
  const keys = Object.keys(state)

  keys.forEach((key: string) => {
    const {href} = window.location
    state[key] = href.includes(key.toLowerCase())
  })

  return state
}
