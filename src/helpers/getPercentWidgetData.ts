import { IPercentWidgetData, IStatistics, IStatisticsItem } from 'src/models/statistiscs'

export const getPercentWidgetData = (statistics: IStatistics, key: keyof IStatisticsItem) => {
  return Object.keys(statistics).reduce((acc: IPercentWidgetData[], item: string) => {
    const statisticsKey = statistics[item][key] as string
    const foundItem = acc.find((item) => item.name === statisticsKey)

    if (foundItem) {
      const foundIndex = acc.indexOf(foundItem)
      acc[foundIndex].value++
    } else {
      acc = [...acc, { name: statisticsKey, value: 1 }]
    }

    return acc
  }, [])
}