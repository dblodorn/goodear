import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setMenuState } from './../../state/actions'
import { flexColumn, mainPadding, media, flexRowCenteredVert } from '../../styles/mixins'
import Menu from './../menus/Menu'
import { heights, colors, spacing, fonts } from './../../styles/theme.json'

const Footer = (props) =>
  <FooterWrapper>
    <Menu location={1} navLocation={'footer'} orientation={props.orientation}/>
  </FooterWrapper>

export default connect(
  state => ({
    footer_state: state.header_state,
    header_style: state.header_style
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(Footer)

// STYLES
const FooterWrapper =  styled.footer`
  ${flexColumn};
  width: 100%;
  z-index: 100;
  position: relative;
  transform: rotate(90deg);
  * {
    color: ${colors.white};
    font-size: ${fonts.sizes.small};
    li {
      &:first-child {
        margin-right: 1.5rem;
      }
    }
  }
  ${media.desktopNav`
    ${flexRowCenteredVert};
    position: absolute;
    bottom: 0;
    left: 0;
    * {
      color: ${colors.footer_type_color}!important;
    }
  `}
`
