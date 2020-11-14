import { INavState } from 'src/models/nav'
import { initialNavState } from 'src/data/navigation'
import { useState } from 'react'

export const useNavState = () => {
  const [activeNavState, setActiveNavState] = useState<INavState>(initialNavState)

  const handleSetActiveItem = (name: string, firstChild: string | null, parent: string | null) => () => {
    const newState: INavState = {}
    const stateKeys = Object.keys(activeNavState)

    stateKeys.forEach((key) => {
      newState[key] = key === name || parent === key || firstChild === key
    })
    setActiveNavState(newState)
  }

  return {activeNavState, handleSetActiveItem}
}
