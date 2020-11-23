import { IBadFormItem, IBadResult } from 'src/models/bad'
import { ISearchResult, ISearchResultIem } from 'src/models/search'

import { ResultKey } from 'src/models/main'
import { useState } from 'react'

export interface IEditFormModalState {
  isOpen: boolean
  id: ResultKey
  item: ISearchResultIem | IBadFormItem
}

export const useEditFormModal = (searchResult: ISearchResult | IBadResult | null) => {
  const [editFormModalState, setEditModalState] = useState<IEditFormModalState | null>(null)

  const handleToggleEditFormModal = (id: ResultKey, isOpen: boolean) => () => {
    if (searchResult) {
      const newModalState = {isOpen, item: searchResult[id], id}
      setEditModalState(newModalState)
    }
  }

  return {editFormModalState, handleToggleEditFormModal}
}