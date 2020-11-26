import { getBarChartWidgetData } from 'src/helpers/getBarChartWidgetData'
import { mockData } from './mockData'

const mockMinSalaryResults = [
  { salary: 4, quantity: 1 },
  { salary: 5, quantity: 2 },
  { salary: 6, quantity: 1 },
  { salary: 7, quantity: 1 },
  { salary: 10, quantity: 1 },
  { salary: 12, quantity: 3 },
  { salary: 22, quantity: 1 }
]

const mockMaxSalaryResults = [
  { salary: 7, quantity: 1 },
  { salary: 8, quantity: 1 },
  { salary: 9, quantity: 1 },
  { salary: 10, quantity: 1 },
  { salary: 14, quantity: 1 },
  { salary: 16, quantity: 2 },
  { salary: 17, quantity: 2 },
  { salary: 30, quantity: 1 }
]

test('getBarChartWidgetData returns an array of object with salary and quantity keys', () => {
  expect(getBarChartWidgetData(mockData, 'salary_min')).toMatchObject(mockMinSalaryResults)
  expect(getBarChartWidgetData(mockData, 'salary_max')).toMatchObject(mockMaxSalaryResults)
})
