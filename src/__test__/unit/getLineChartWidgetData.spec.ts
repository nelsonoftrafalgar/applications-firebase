import {
  getDateChartData,
  getDatesRange,
  getLineChartWidgetData,
} from 'src/helpers/getLineChartWidgetData'

import { mockData } from './mockData'

const mockResult = [
  { date: '11-05-18', quantity: 3 },
  { date: '11-06-18', quantity: 2 },
  { date: '11-05-19', quantity: 2 },
  { date: '21-05-18', quantity: 1 },
  { date: '11-04-18', quantity: 1 },
  { date: '14-05-20', quantity: 1 }
]

const mockDatesRange = [
  { date: '11-04-18', quantity: 0 },
  { date: '12-04-18', quantity: 0 },
  { date: '13-04-18', quantity: 0 },
  { date: '14-04-18', quantity: 0 },
  { date: '15-04-18', quantity: 0 },
  { date: '16-04-18', quantity: 0 },
  { date: '17-04-18', quantity: 0 },
  { date: '18-04-18', quantity: 0 },
  { date: '19-04-18', quantity: 0 },
  { date: '20-04-18', quantity: 0 }
]

const mockChartData = [
  { date: '11-04-18', quantity: 1 },
  { date: '12-04-18', quantity: 0 },
  { date: '13-04-18', quantity: 0 },
  { date: '14-04-18', quantity: 0 },
  { date: '15-04-18', quantity: 0 },
  { date: '16-04-18', quantity: 0 },
  { date: '17-04-18', quantity: 0 },
  { date: '18-04-18', quantity: 0 },
  { date: '19-04-18', quantity: 0 },
  { date: '20-04-18', quantity: 0 }
]

test('getLineChartWidgetData should count application date quantities', () => {
  expect(getLineChartWidgetData(mockData, 'application_date')).toMatchObject(mockResult)
})

test('getDatesRange should return dates from start to end with initial quantity of 0', () => {
  expect(
    getDatesRange({ startDate: new Date('2018-04-11'), endDate: new Date('2018-04-21') })
  ).toMatchObject(mockDatesRange)
})

test('getDateChartData sholud merge dates and update quantities', () => {
  expect(getDateChartData(mockDatesRange, mockResult)).toMatchObject(mockChartData)
})

