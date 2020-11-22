import { Button, Td } from 'src/styles'

import { ISearchResult } from 'src/models/search'
import React from 'react'

interface ITableRow {
  id: keyof ISearchResult
  data: JSX.Element[]
  handleToggleEditModal?: (id: keyof ISearchResult, isOpen: boolean) => () => void
  handleToggleDeleteModal?: (id: keyof ISearchResult, isOpen: boolean) => () => void
}

const TableRow: React.FC<ITableRow> = ({ handleToggleDeleteModal, handleToggleEditModal, id, data }) => {
  return (
    <tr>
      {data}
      {handleToggleEditModal && (
        <Td>
          <Button onClick={handleToggleEditModal(id, true)}>Edit</Button>
        </Td>
      )}
      {handleToggleDeleteModal && (
        <Td>
          <Button onClick={handleToggleDeleteModal(id, true)}>Delete</Button>
        </Td>
      )}
    </tr>
  )
}

export { TableRow }
