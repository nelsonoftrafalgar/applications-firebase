import { IPercentWidgetData, IStatistics, IStatisticsItem } from 'src/models/statistiscs'

export const getPercentWidgetData = (statistics: IStatistics, key: keyof IStatisticsItem) => {
  return Object.keys(statistics).reduce<IPercentWidgetData[]>((acc, item) => {
    const statisticsKey = statistics[item][key] as keyof IStatisticsItem
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