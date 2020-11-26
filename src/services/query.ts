import { ISearchResult } from 'src/models/search'
import { database } from 'src/firebase'

type Table = 'applications' | 'bad_companies'
type SetState<T> = React.Dispatch<React.SetStateAction<T>>

class Query {
  readPhrase = (
    select: string,
    phrase: string,
    setSearchResult: SetState<ISearchResult | null>,
    setLoading: SetState<boolean>
  ) => {
    database
      .ref('applications')
      .orderByChild(select)
      .startAt(phrase)
      .endAt(phrase + '\uf8ff')
      .on('value', (snap) => {
        setSearchResult(snap.toJSON() as ISearchResult | null)
        setLoading(false)
      })
  }

  readAll = <R>(table: Table, setResults: SetState<R | null>) => {
    database
      .ref(table)
      .on('value', (snap) => setResults(snap.toJSON() as R | null))
  }

  update = (
    updatedEntry: ISearchResult,
    setLoading: SetState<boolean>
  ) => {
    database.ref().update(updatedEntry, () => setLoading(false))
  }

  create = <V>(
    table: Table,
    value: V,
    setLoading: SetState<boolean>
  ) => {
    database.ref(table).push(value, () => setLoading(false))
  }

  delete = (item: string, setLoading: SetState<boolean>) => {
    database.ref(item).remove(() => setLoading(false))
  }
}

export const query = new Query()
