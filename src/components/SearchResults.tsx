import { ISearchResult, ISearchResultIem } from 'src/models/search'

import Delete from 'src/components/Delete'
import EditForm from 'src/forms/EditForm'
import Modal from 'src/components/Modal'
import React from 'react'
import { TableHead } from 'src/components/TableHead'
import { TableRow } from 'src/components/TableRow'
import { Td } from 'src/styles'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'
import { useDeleteModal } from 'src/hooks/useDeleteModal'
import { useEditFormModal } from 'src/hooks/useEditFormModal'

const { light_bg } = globalStyles

const Container = styled.div`
  width: 100%;
  background: ${light_bg};
  padding: 20px;
  height: 100%;
`

const Table = styled.table`
  width: 100%;
  border-spacing: 5px;
`

export const SEARCH_TABLE_HEAD = [
  'Application date',
  'Application result',
  'Company name',
  'Position name',
  'Salary max',
  'Salary min'
]

interface ISearchResultProps {
  searchResult: ISearchResult | null
}

const SearchResults: React.FC<ISearchResultProps> = ({ searchResult }) => {
  const { editFormModalState, handleToggleEditFormModal } = useEditFormModal(searchResult)
  const { deleteModalState, handleToggleDeleteModal } = useDeleteModal()

  const renderResults = searchResult
    ? Object.entries(searchResult).map((result) => {
        const [id, values] = result
        const keys = Object.keys(values).filter((key) => key !== 'id') as Array<
          keyof ISearchResultIem
        >
        const data = keys.map((key) => <Td key={id + key}>{values[key]}</Td>)
        return (
          <TableRow
            handleToggleDeleteModal={handleToggleDeleteModal}
            handleToggleEditFormModal={handleToggleEditFormModal}
            id={id}
            key={id}
            data={data}
          />
        )
      })
    : null

  return (
    <>
      <Container>
        <Table>
          <TableHead data={SEARCH_TABLE_HEAD} />
          <tbody>{renderResults}</tbody>
        </Table>
      </Container>
      {editFormModalState?.isOpen && (
        <Modal onClose={handleToggleEditFormModal(editFormModalState.id, false)}>
          <EditForm editFormState={editFormModalState} />
        </Modal>
      )}
      {deleteModalState?.isOpen && (
        <Modal onClose={handleToggleDeleteModal(deleteModalState.id, false)}>
          <Delete table='applications' id={deleteModalState.id} />
        </Modal>
      )}
    </>
  )
}

export default SearchResults
