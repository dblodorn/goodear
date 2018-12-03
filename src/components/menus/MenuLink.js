import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { StyledLink } from './../../styles/components'
import { spacing, colors } from './../../styles/theme.json'
import { setMenuState } from './../../state/actions'
import { mediumType } from './../../styles/mixins'

const returnLink = (slug, subroute) => {
  if (subroute) {
    return `/${subroute}/${slug}`
  } else {
    return `/${slug}`
  }
}

const Menulink = (props) => {
  return (
    <NavLink to={returnLink(props.path, props.sub_route)} onClick={() => props.menu_toggle(false)} color={colors.white}>
      <span dangerouslySetInnerHTML={{__html: props.page }}/>
    </NavLink>
  )
}

export default connect(
  state => ({
    route: state.router.location.pathname
  }),
  dispatch => ({
    menu_toggle: (bool) => dispatch(setMenuState(bool))
  })
)(Menulink)

// STYLES
const NavLink = styled(StyledLink)`
  ${mediumType};
  text-transform: lowercase;
`
