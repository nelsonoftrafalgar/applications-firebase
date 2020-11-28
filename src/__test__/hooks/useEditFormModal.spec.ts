import { act, renderHook } from '@testing-library/react-hooks'

import { mockData } from '../unit/mockData'
import { useEditFormModal } from 'src/hooks/useEditFormModal'

test('it should populate edit modal state', () => {
  const { result } = renderHook(() => useEditFormModal({ '1': mockData['1'] }))

  expect(result.current.editFormModalState).toBeNull()

  act(() => {
    result.current.handleToggleEditFormModal('1', true)()
  })

  expect(result.current.editFormModalState).toMatchObject({
    isOpen: true,
    item: mockData['1'],
    id: '1'
  })
})
