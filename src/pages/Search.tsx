import { Col, Row } from 'src/grid'
import { ISearchResult, ISearchValue } from 'src/models/search'
import React, { useState } from 'react'
import { Section, Title } from 'src/styles'

import SearchForm from 'src/components/SearchForm'
import SearchResults from 'src/components/SearchResults'
import { database } from 'src/firebase'

const Search = () => {
  const [searchResult, setSearchResult] = useState<ISearchResult | null>(null)

  const handleSearch = (
    { phrase, select }: ISearchValue,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    database
      .ref('applications')
      .orderByChild(select)
      .startAt(phrase)
      .endAt(phrase + '\uf8ff')
      .on('value', (snap) => {
        setSearchResult(snap.toJSON() as ISearchResult | null)
        setLoading(false)
      })
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
// database.ref('applications').on('value', (snap) => console.log(snap.val())) // get all

//READ
// database
//   .ref('applications')
//   .orderByChild('company_name')
//   .startAt('x')
//   .endAt('x' + '\uf8ff')
//   .on('value', (snap) => console.log(snap.val())) // search company name which starts with x

// database
// .ref('applications')
// .orderByChild('position_name')
// .startAt('rea')
// .endAt('rea' + '\uf8ff')
// .on('value', (snap) => console.log(snap.val())) // search position which starts with rea

// database
// .ref('applications')
// .orderByChild('application_result')
// .startAt('bad ')
// .endAt('bad ' + '\uf8ff')
// .on('value', (snap) => console.log(snap.val())) // search company name which starts with bad

//CREATE
// database.ref('applications').push({test: 'test'})

//UPDATE
// database.ref('applications').push({"id": 200,
// "company_name": "test",
// "position_name": "js",
// "salary_min": 12,
// "salary_max": 16,
// "application_date": "11-05-18",
// "application_result": "not interested"})

//   const update = (key: string) => {
//     const updatedEntry = {
//       [`applications/${key}`]: {
//         id: 200,
//         company_name: 'test hui',
//         position_name: 'js',
//         salary_min: 12,
//         salary_max: 16,
//         application_date: '11-05-18',
//         application_result: 'not interested'
//       }
//     }

//     database.ref().update(updatedEntry)
//   }

//   database
//     .ref('applications')
//     .orderByChild('company_name')
//     .startAt('test')
//     .endAt('test' + '\uf8ff')
//     .on('value', (snap) => update(Object.keys(snap.val())[0]) )

//DELETE
// const deleteItem = (key: string) => {
//   database.ref(`applications/${key}`).remove()
// }

// database
//   .ref('applications')
//   .orderByChild('company_name')
//   .startAt('test')
//   .endAt('test' + '\uf8ff')
//   .on('value', (snap) => deleteItem(Object.keys(snap.val())[0]))
