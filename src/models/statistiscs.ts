import { FocusedInput } from '@datepicker-react/styled'

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

export interface IDatesRange {
  startDate: Date
  endDate: Date
}

export interface IDatePickerState {
  startDate: Date | null
  endDate: Date | null
  focusedInput: FocusedInput
}

export type IDatePickerAction =
  | {
      type: 'DATE_CHANGE'
      payload: IDatePickerState
    }
  | {
      type: 'FOCUS_CHANGE'
      payload: FocusedInput
    }
