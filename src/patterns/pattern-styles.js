import styled from 'styled-components'
import { absoluteCentered } from './../styles/mixins'

const PatternWrapper = styled.aside`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  display: block;
  svg {
    ${absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export {
  PatternWrapper
}