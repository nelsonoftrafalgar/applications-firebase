import { IBadFormItem, IBadResult } from 'src/models/bad'
import React, { useEffect, useState } from 'react'

import Delete from 'src/forms/Delete'
import EditBadForm from 'src/forms/EditBadForm'
import Modal from 'src/components/Modal'
import { TableHead } from 'src/components/tables/TableHead'
import { TableRow } from 'src/components/tables/TableRow'
import { Td } from 'src/styles'
import { globalStyles } from 'src/styles/styles'
import { query } from 'src/services/query'
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

const BAD_TABLE_HEAD = ['Bad company name']

const BadResults = () => {
  const [results, setResults] = useState<IBadResult | null>(null)
  const { deleteModalState, handleToggleDeleteModal } = useDeleteModal()
  const { editFormModalState, handleToggleEditFormModal } = useEditFormModal(results)

  useEffect(() => {
    query.readAll('bad_companies', setResults)
  }, [])

  const renderBadResults = results
    ? Object.entries(results).map((result) => {
        const [id, values] = result
        const keys = Object.keys(values).filter((key) => key !== 'id') as Array<keyof IBadFormItem>
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
          <TableHead data={BAD_TABLE_HEAD} />
          <tbody>{renderBadResults}</tbody>
        </Table>
      </Container>
      {editFormModalState?.isOpen && (
        <Modal onClose={handleToggleEditFormModal(editFormModalState.id, false)}>
          <EditBadForm editFormState={editFormModalState} />
        </Modal>
      )}
      {deleteModalState?.isOpen && (
        <Modal onClose={handleToggleDeleteModal(deleteModalState.id, false)}>
          <Delete table="bad_companies" id={deleteModalState.id} />
        </Modal>
      )}
    </>
  )
}

export default BadResults
