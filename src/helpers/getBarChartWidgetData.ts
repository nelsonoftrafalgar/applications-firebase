import { IBarChartWidgetData, IStatistics, IStatisticsItem } from 'src/models/statistiscs'

export const getBarChartWidgetData = (statistics: IStatistics, key: keyof IStatisticsItem) => {
  return Object.keys(statistics).reduce((acc: IBarChartWidgetData[], item: string) => {
    const statisticsKey = statistics[item][key] as number
    const foundItem = acc.find((item) => item.name === statisticsKey)

    if (foundItem) {
      const foundIndex = acc.indexOf(foundItem)
      acc[foundIndex].value++
    } else {
      if (statisticsKey) {
        acc = [...acc, { name: statisticsKey, value: 1 }]
      }
    }

    return acc
  }, []).sort((a, b) => a.name > b.name ? 1 : -1)
}