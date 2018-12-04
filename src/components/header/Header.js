import React from 'react'
import { connect } from 'react-redux'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import { breakpoints } from './../../styles/theme.json'



const Header = (props) => {
  if (props.resize_state.window_width >= breakpoints.desktop) {
    return <HeaderDesktop header_state={props.header_state}/>
  } else {
    return <HeaderMobile/>
  }
}

export default connect(
  state => ({
    header_state: state.header_state,
    resize_state: state.resize_state
  })
)(Header)