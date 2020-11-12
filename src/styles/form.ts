import styled from 'styled-components'

interface IForm {
  flex_direction?: string
}

export const Form = styled('form')<IForm>`
  display: flex;
  align-items: center;
  ${({flex_direction}) => `flex-direction: ${flex_direction};`}
`
