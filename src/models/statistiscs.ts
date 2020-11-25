export interface IStatisticsItem {
  id: number
  company_name: string
  position_name: string
  salary_min: number
  salary_max: number
  application_date: string
  application_result: string
}

export interface IStatistics {
  [key: string]: IStatisticsItem
}

export interface IPercentWidgetData {
  name: string
  value: number
}

export interface IBarChartWidgetData {
  salary: number
  quantity: number
}

export interface ILineChartWidgetData {
  date: string
  quantity: number
}