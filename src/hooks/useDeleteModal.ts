import { ResultKey } from 'src/models/main'
import { useState } from 'react'

interface IState {
  isOpen: boolean
  id: ResultKey
}
export const useDeleteModal = () => {

  const [deleteModalState, setDeleteModalState] = useState<IState | null>(null)

  const handleToggleDeleteModal = (id: ResultKey, isOpen: boolean) => () => {
    setDeleteModalState({id, isOpen})
  }

  return {deleteModalState, handleToggleDeleteModal}
}
