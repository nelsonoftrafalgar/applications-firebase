import { IBadFormItem, IBadResult } from 'src/models/bad'
import React, { useEffect, useState } from 'react'

import { TableHead } from 'src/components/TableHead'
import { TableRow } from 'src/components/TableRow'
import { Td } from 'src/styles'
import { database } from 'src/firebase'
import { globalStyles } from 'src/styles/styles'
import styled from 'styled-components'

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

  useEffect(() => {
    database
      .ref('bad_companies')
      .on('value', (snap) => setResults(snap.toJSON() as IBadResult | null))
  }, [])

  const renderBadResults = results
    ? Object.entries(results).map((result) => {
        const [id, values] = result
        const keys = Object.keys(values).filter((key) => key !== 'id') as Array<keyof IBadFormItem>
        const data = keys.map((key) => <Td key={id + key}>{values[key]}</Td>)
        return <TableRow id={id} key={id} data={data} />
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
    </>
  )
}

export default BadResults
