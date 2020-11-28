import { render, screen } from '@testing-library/react'

import React from 'react'
import SearchForm from 'src/forms/SearchForm'
import userEvent from '@testing-library/user-event'

const mockHandleSearch = jest.fn()

afterEach(() => jest.clearAllMocks())

test('submitting form should fire handleSearch function', () => {
  render(<SearchForm handleSearch={mockHandleSearch} />)

  userEvent.type(screen.getByTestId('PHRASE-INPUT'), 'test phrase')
  userEvent.selectOptions(screen.getByTestId('SELECT-SELECT'), 'company_name')
  userEvent.click(screen.getByTestId('SEARCH-BUTTON'))

  expect(mockHandleSearch).toHaveBeenCalledTimes(1)
})

test('searching for invalid phrase should display validation error', () => {
  render(<SearchForm handleSearch={mockHandleSearch} />)

  userEvent.type(screen.getByTestId('PHRASE-INPUT'), '<script>')
  userEvent.selectOptions(screen.getByTestId('SELECT-SELECT'), 'company_name')
  userEvent.click(screen.getByTestId('SEARCH-BUTTON'))

  expect(mockHandleSearch).not.toHaveBeenCalled()
  expect(screen.getByTestId('PHRASE-INPUT-ERROR')).toBeInTheDocument()
})

test('searching without selecting type should display validation error', () => {
  render(<SearchForm handleSearch={mockHandleSearch} />)

  userEvent.type(screen.getByTestId('PHRASE-INPUT'), 'test phrase')
  userEvent.click(screen.getByTestId('SEARCH-BUTTON'))

  expect(mockHandleSearch).not.toHaveBeenCalled()
  expect(screen.getByTestId('SELECT-SELECT-ERROR')).toBeInTheDocument()
})