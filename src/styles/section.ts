import styled from 'styled-components'

interface ISection {
  scrollOverflow?: boolean
}

export const Section = styled('section')<ISection>`
  width: 100%;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  ${({scrollOverflow}) => scrollOverflow ? `
    overflow-y: scroll;
    scrollbar-width: none;
  ` : ''}
`
