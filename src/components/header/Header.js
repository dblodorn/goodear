import React from 'react'
import { connect } from 'react-redux'
import HeaderSidebar from './HeaderSidebar'
import HeaderMobile from './HeaderMobile'
import { breakpoints } from './../../styles/theme.json'

const Header = (props) => {
  if (props.resize_state.window_width >= breakpoints.desktop) {
    return <HeaderSidebar header_state={props.header_state}/>
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