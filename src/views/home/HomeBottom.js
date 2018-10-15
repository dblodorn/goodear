import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { flexCenteredAll } from './../../styles/mixins'
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
  height: ${heights.home_bottom};
  position: fixed;
  bottom: 0;
  right: 0;
  padding-left: calc(${widths.sidebar_desktop} + ${spacing.double_pad});
  background-color: ${colors.white};
  border-top: ${colors.border_a};
  z-index: 10;
  * {
    font-family: ${fonts.serif}!important;
  }
`
