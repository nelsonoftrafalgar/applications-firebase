import { getPercentWidgetData } from 'src/helpers/getPercentWidgetData'
import { mockData } from './mockData'

const mockResult = [
  {name: 'test1', value: 2},
  {name: 'test2', value: 2},
  {name: 'test3', value: 2},
  {name: 'test4', value: 2},
  {name: 'test5', value: 2}
]

test('getPercentWidgetData returns an array of object with name and value keys', () => {
  expect(getPercentWidgetData(mockData, 'position_name')).toMatchObject(mockResult)
})