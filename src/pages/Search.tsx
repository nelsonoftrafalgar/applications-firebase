import { Col, Row } from 'src/grid'
import { ISearchResult, ISearchValue } from 'src/models/search'
import React, { useState } from 'react'
import { Section, Title } from 'src/styles'

import SearchForm from 'src/forms/SearchForm'
import SearchResults from 'src/components/SearchResults'
import { query } from 'src/services/query'

const Search = () => {
  const [searchResult, setSearchResult] = useState<ISearchResult | null>(null)

  const handleSearch = (
    { phrase, select }: ISearchValue,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    query.readPhrase(select, phrase, setSearchResult, setLoading)
  }

  return (
    <Section scrollOverflow={true}>
      <Title>Search</Title>
      <Row mt={20}>
        <Col size={12}>
          <SearchForm handleSearch={handleSearch} />
        </Col>
      </Row>
      <Row pb={20} mt={20}>
        <Col size={12}>
          <SearchResults searchResult={searchResult} />
        </Col>
      </Row>
    </Section>
  )
}

export default Search
