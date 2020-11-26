import { getNavItems } from 'src/helpers/getNavItems'
import { mockNavItems } from './mockData'

const mockResult = {
  testName1: false,
  testName2: false,
  testName3: false,
  testName4: false,
  testSubGroup1Name1: false,
  testSubGroup1Name2: false,
  testName5: false,
  testSubGroup2Name1: false,
  testSubGroup2Name2: false
}

test('getNavItems extracts nav node names and assigns them false values', () => {
  expect(getNavItems(mockNavItems)).toMatchObject(mockResult)
})
