import React from 'react'
import styled from 'styled-components'
import { fullWindow, flexCenteredAll } from './../styles/mixins'
import { Logo } from './../components'
import { colors } from './../styles/theme.json'

export default props =>
  <LoadingWrapper>
    <LogoWrapper>
      <Logo/>
    </LogoWrapper>
  </LoadingWrapper>

// STYLES
const LoadingWrapper = styled.div`
  ${fullWindow};
  ${flexCenteredAll};
  background-color: ${colors.blue};
`

const LogoWrapper = styled.div`
  width: 90%;
  max-width: 70rem;
  svg {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`