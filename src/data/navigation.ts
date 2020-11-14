import Add from 'src/assets/icons/add.svg'
import Bad from 'src/assets/icons/bad.svg'
import { INodePage } from 'src/services/node'
import { Node } from 'src/services/node'
import { Page } from 'src/services/page'
import Search from 'src/assets/icons/search.svg'
import Statistics from 'src/assets/icons/statistics.svg'
import { getInitialNavState } from 'src/helpers/getInitialNavState'
import { getNavItems } from 'src/helpers/getNavItems'

const page = new Page()

const search = new Node('Search', '/search', Search)
const add = new Node('Add', '/add', Add)
const bad = new Node('Bad', '/bad', Bad)
const statistics = new Node('Statistics', '/statistics', Statistics)
const position = new Node('Position', '/statistics/position')
const salary = new Node('Salary', '/statistics/salary')
const date = new Node('Date', '/statistics/date')
const result = new Node('Result', '/statistics/result')

page
  .append(search)
  .append(add)
  .append(bad)
  .append(statistics
    .append(position)
    .append(salary)
    .append(date)
    .append(result)
  )

export const navigation: INodePage[] = page.items

const navItems = getNavItems(navigation)
export const initialNavState = getInitialNavState(navItems)
