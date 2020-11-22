import { ISearchResult } from 'src/models/search'
import { useState } from 'react'

export interface IDeleteModalState {
  isOpen: boolean
  id: keyof ISearchResult
}

export const useDeleteModal = () => {
  const [deleteModalState, setDeleteModalState] = useState<IDeleteModalState | null>(null)

  const handleToggleDeleteModal = (id: keyof ISearchResult, isOpen: boolean) => () => {
    setDeleteModalState({id, isOpen})
  }

  return {deleteModalState, handleToggleDeleteModal}
}
