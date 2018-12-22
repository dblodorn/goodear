import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeaderStrip from './HeaderStrip'

const HeaderStripDesk = props =>
  <StripWrapper style={props.styles}>
    <HeaderStrip>
      <Link to={`/`}>
        <span>Home</span>
      </Link>
      {props.menu.map((item, i) =>
        <Link to={`/${item.slug}`} className={(`/${item.slug}` == `${props.route}`) ? `active` : ``} key={`link-${item.slug}${i}`}>
          <span>{item.title}</span>
        </Link>
      )}
    </HeaderStrip>
  </StripWrapper>

const StripWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
`

export default connect(
  state => ({
    route: state.router.location.pathname
  })
)(HeaderStripDesk)