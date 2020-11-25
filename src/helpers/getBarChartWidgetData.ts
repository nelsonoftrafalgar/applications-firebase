import { IBarChartWidgetData, IStatistics, IStatisticsItem } from 'src/models/statistiscs'

export const getBarChartWidgetData = (statistics: IStatistics, key: keyof IStatisticsItem) => {
  return Object.keys(statistics).reduce((acc: IBarChartWidgetData[], item: string) => {
    const statisticsKey = statistics[item][key] as number
    const foundItem = acc.find((item) => item.salary === statisticsKey)

    if (foundItem) {
      const foundIndex = acc.indexOf(foundItem)
      acc[foundIndex].quantity++
    } else {
      if (statisticsKey) {
        acc = [...acc, { salary: statisticsKey, quantity: 1 }]
      }
    }

    return acc
  }, []).sort((a, b) => a.salary > b.salary ? 1 : -1)
}