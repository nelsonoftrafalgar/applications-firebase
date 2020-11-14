import styled, { keyframes } from 'styled-components'

import { globalStyles } from './styles';

const load3 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  font-size: 10px;
  margin: 1px auto;
  text-indent: -9999em;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff;
  background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: ${load3} 1.4s infinite linear;
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: ${globalStyles.dark_bg};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`
