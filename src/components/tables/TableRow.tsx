import { Button, Td } from 'src/styles'

import React from 'react'
import { ResultKey } from 'src/models/main'

interface ITableRow {
  id: ResultKey
  data: JSX.Element[]
  handleToggleEditFormModal?: (id: ResultKey, isOpen: boolean) => () => void
  handleToggleDeleteModal?: (id: ResultKey, isOpen: boolean) => () => void
}

const TableRow: React.FC<ITableRow> = ({ handleToggleDeleteModal, handleToggleEditFormModal, id, data }) => {
  return (
    <tr>
      {data}
      {handleToggleEditFormModal && (
        <Td>
          <Button onClick={handleToggleEditFormModal(id, true)}>Edit</Button>
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
