import { act, renderHook } from '@testing-library/react-hooks'

import { useDeleteModal } from 'src/hooks/useDeleteModal'

test('it should update delete modal state', () => {
  const { result } = renderHook(() => useDeleteModal())

  expect(result.current.deleteModalState).toBeNull()

  act(() => {
    result.current.handleToggleDeleteModal('1', true)()
  })

  expect(result.current.deleteModalState).toMatchObject({
    id: '1',
    isOpen: true
  })
})
