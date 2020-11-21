export interface ISearchValue {
  phrase: string
  select: string
}

export interface ISearchResultIem {
  id: number
  company_name: string
  position_name: string
  salary_min: number
  salary_max: number
  application_date: string
  application_result: string
}

export interface ISearchResult {
  [key: string]: ISearchResultIem
}
