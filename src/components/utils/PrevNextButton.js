import React from 'react'
import styled, { css } from 'styled-components'
import { opacityTransition, buttonInit, flexCenteredAll } from '../../styles/mixins'
import { colors } from './../../styles/theme.json'

const Button = styled.button`
  ${buttonInit};
  width: 6.5rem;
  height: 6.5rem;
  &:hover {
    svg {
      opacity: .75;
    }
  }
  svg {
    ${opacityTransition};
    opacity: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: ${colors.overlay};
  }
`

const buttonStyles = css`
  ${flexCenteredAll}
  width: 6.5rem;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
`

const BwLeft = styled.div`
  ${buttonStyles};
  left: 0;
`

const BwRight = styled.div`
  ${buttonStyles};
  right: 0;
`

const NextButton = props =>
  <BwRight>
    <Button onClick={props.clickFunction || null}>
      <svg version="1.1" viewBox="0 0 64 64" width="64" height="64">
        <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" transform="translate(0.5 0.5)" fill="#ffffff" stroke="#ffffff">
          <polyline fill="none" stroke="#ffffff" strokeMiterlimit="10" points="18,4 46,32 18,60 "></polyline></g>
        </svg>
    </Button>
  </BwRight>

const PrevButton = props =>
  <BwLeft>
    <Button onClick={props.clickFunction || null}>
      <svg version="1.1" viewBox="0 0 64 64" width="64" height="64">
        <g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" transform="translate(0.5 0.5)" fill="#ffffff" stroke="#ffffff">
          <polyline fill="none" stroke="#ffffff" strokeMiterlimit="10" points="46,60 18,32 46,4 "></polyline>
        </g>
      </svg>
    </Button>
  </BwLeft>

export {
  NextButton,
  PrevButton
}