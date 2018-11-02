import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { flexCenteredAll, media } from './../../styles/mixins'
import { StyledMarkup, Section } from './../../styles/components'
import { heights, colors, spacing, widths, fonts } from './../../styles/theme.json'

const HomeBottom = (props) =>
  <Transition from={{ opacity: 0, transform: `translateY(${heights.home_bottom})` }} enter={{ opacity: 1, transform: `translateY(0})` }} leave={{ opacity: 0, transform: `translateY(${heights.home_bottom})`, pointerEvents: 'none' }}>
    {props.footer_state && (styles => 
      <IntroSection style={styles}>
        <StyledMarkup dangerouslySetInnerHTML={{__html: props.content }}/>
      </IntroSection>
    )}
  </Transition>

export default connect(
  state => ({
    footer_state: state.header_state
  })
)(HomeBottom)

// STYLES
const IntroSection = styled(Section)`
  ${flexCenteredAll};
  width: 100%;
  position: fixed;
  height: ${heights.home_bottom};
  bottom: 0;
  right: 0;
  padding: ${spacing.double_pad};
  background-color: #4A90E2;
  z-index: 10;
  * {
    font-family: ${fonts.serif}!important;
    color: ${colors.white}!important;
  }
  ${media.desktopNav`
    padding-left: calc(${widths.sidebar_desktop} + ${spacing.double_pad});
  `}
`
