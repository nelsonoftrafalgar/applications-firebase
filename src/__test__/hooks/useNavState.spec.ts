import { act, renderHook } from '@testing-library/react-hooks'

import { useNavState } from 'src/hooks/useNavState'

test('useNavState hooks updates navigation state', async () => {
  const { result } = renderHook(() => useNavState())

  act(() => {
    result.current.handleSetActiveItem('Search', null, null)()
  })

  expect(result.current.activeNavState.Search).toBeTruthy()

  act(() => {
    result.current.handleSetActiveItem('Bad', null, null)()
  })

  expect(result.current.activeNavState.Bad).toBeTruthy()
  expect(result.current.activeNavState.Search).toBeFalsy()

  act(() => {
    result.current.handleSetActiveItem('Salary', null, 'Statistics')()
  })

  expect(result.current.activeNavState.Bad).toBeFalsy()
  expect(result.current.activeNavState.Search).toBeFalsy()
  expect(result.current.activeNavState.Salary).toBeTruthy()
  expect(result.current.activeNavState.Statistics).toBeTruthy()

  act(() => {
    result.current.handleSetActiveItem('', null, null)()
  })

  expect(Object.values(result.current.activeNavState).every((item) => item === false)).toBeTruthy()
})
