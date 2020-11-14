import { INodePage } from 'src/services/node'
import { IStringIndexObject } from 'src/models/main'

export const getNavItems = (items: INodePage[]) => {
  return items.reduce<IStringIndexObject<boolean>>((acc, { name, sub_group }) => {
    if (sub_group) {
      acc[name] = false
      sub_group.forEach((child) => acc[child.name] = false)
      return acc
    }
    acc[name] = false
    return acc
  }, {})
}