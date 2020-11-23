import { IBadResult } from 'src/models/bad'
import { ISearchResult } from 'src/models/search'

export interface IStringIndexObject<T> {
  [key: string]: T
}

export type ResultKey = keyof ISearchResult | keyof IBadResult
