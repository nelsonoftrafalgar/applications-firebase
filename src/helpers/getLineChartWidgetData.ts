import {
  IDatePickerAction,
  IDatePickerState,
  IDatesRange,
  ILineChartWidgetData,
  IStatistics,
  IStatisticsItem
} from 'src/models/statistiscs'

export const getLineChartWidgetData = (statistics: IStatistics, key: keyof IStatisticsItem) => {
  return Object.keys(statistics).reduce((acc: ILineChartWidgetData[], item: string) => {
    const statisticsKey = statistics[item][key] as string
    const foundItem = acc.find((item) => item.date === statisticsKey)

    if (foundItem) {
      const foundIndex = acc.indexOf(foundItem)
      acc[foundIndex].quantity++
    } else {
      acc = [...acc, { date: statisticsKey, quantity: 1 }]
    }

    return acc
  }, [])
}

export const getDatesRange = ({ startDate, endDate }: IDatesRange) => {
  let dates: ILineChartWidgetData[] = []
  while (startDate < endDate) {
    const dateData = {
      date: startDate.toISOString().slice(2, 10).split('-').reverse().join('-'),
      quantity: 0
    }
    dates = [...dates, dateData]
    startDate.setDate(startDate.getDate() + 1)
  }
  return dates
}

export const getDateChartData = (range: ILineChartWidgetData[], values: ILineChartWidgetData[]) => {
  return range.map((item) => {
    const dateMatch = values.find((value) => value.date === item.date)
    item.quantity = dateMatch ? dateMatch.quantity : item.quantity
    return item
  })
}

export const parseDate = (startDate: Date | null, endDate: Date | null) => {
  if (startDate && endDate) {
    return {
      startDate: new Date(
        `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`
      ),
      endDate: new Date(`${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`)
    }
  } else {
    return {
      startDate: new Date('2018-05-11'),
      endDate: new Date()
    }
  }
}

export const datePickerReducer = (
  state: IDatePickerState,
  action: IDatePickerAction
): IDatePickerState => {
  switch (action.type) {
    case 'FOCUS_CHANGE':
      return { ...state, focusedInput: action.payload }
    case 'DATE_CHANGE':
      return action.payload
    default:
      return state
  }
}