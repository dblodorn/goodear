import React from 'react'
import styled from 'styled-components'
import { SmallP } from './../../styles/components'
import { opacityTransition  } from './../../styles/mixins'
import { colors, spacing } from './../../styles/theme.json'

export default (props) =>
  <VideoCaptionWrapper>
    <SmallP>{props.content}</SmallP>
  </VideoCaptionWrapper>

const VideoCaptionWrapper = styled.div`
  ${opacityTransition};
  opacity: 1;
  pointer-events: none;
  padding-top: ${spacing.micro_pad};
  z-index: 1;
  * {
    color: ${colors.black}!important;
  }
`