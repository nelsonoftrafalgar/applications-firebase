import { ISearchResult, ISearchResultIem } from 'src/models/search'

import { useState } from 'react'

export interface IEditModalState {
  isOpen: boolean
  id: keyof ISearchResult
  item: ISearchResultIem
}

export const useEditModal = (searchResult: ISearchResult | null) => {
  const [editModalState, setEditModalState] = useState<IEditModalState | null>(null)

  const handleToggleEditModal = (id: keyof ISearchResult, isOpen: boolean) => () => {
    if (searchResult) {
      const newModalState = {isOpen, item: searchResult[id], id}
      setEditModalState(newModalState)
    }
  }

  return {editModalState, handleToggleEditModal}
}