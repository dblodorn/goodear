import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { spacing } from './../styles/theme.json'

export default () =>
  <BottomLogoWrapper>
    <Logo/>
  </BottomLogoWrapper>

const BottomLogoWrapper = styled.div`
  width: 14rem;
  bottom: ${spacing.single_pad};
  right: ${spacing.single_pad};
  position: fixed;
  z-index: 2000;
  svg {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`