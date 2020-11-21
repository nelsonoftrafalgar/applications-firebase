import { ISearchResult, ISearchResultIem } from 'src/models/search'

import EditModal from 'src/components/EditModal'
import React from 'react'
import { TableHead } from 'src/components/TableHead'
import { TableRow } from './TableRow'
import { Td } from 'src/styles'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'
import { useEditModal } from 'src/hooks/useEditModal'

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
  const { editModalState, handleToggleEditModal } = useEditModal(searchResult)

  const renderResults = searchResult
    ? Object.entries(searchResult).map((result) => {
        const [id, values] = result
        const keys = Object.keys(values).filter((key) => key !== 'id') as Array<
          keyof ISearchResultIem
        >
        const data = keys.map((key) => <Td key={id + key}>{values[key]}</Td>)
        return <TableRow handleOpenEditModal={handleToggleEditModal} id={id} key={id} data={data} />
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
      {editModalState?.isOpen && (
        <EditModal handleToggleEditModal={handleToggleEditModal} editModalState={editModalState} />
      )}
    </>
  )
}

export default SearchResults
