import { Button, Td } from 'src/styles'

import { ISearchResult } from 'src/models/search'
import React from 'react'

interface ITableRow {
  id: keyof ISearchResult
  data: JSX.Element[]
  handleOpenEditModal?: (id: keyof ISearchResult, isOpen: boolean) => () => void
}

const TableRow: React.FC<ITableRow> = ({ handleOpenEditModal, id, data }) => {
  return (
    <tr>
      {data}
      {handleOpenEditModal && (
        <Td>
          <Button onClick={handleOpenEditModal(id, true)}>Edit</Button>
        </Td>
      )}
    </tr>
  )
}

export { TableRow }
