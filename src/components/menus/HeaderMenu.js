import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MenuLink from './MenuLink'
import { flexColumn, defaultLink, mediumType } from './../../styles/mixins'
import { spacing, colors } from './../../styles/theme.json'

const HeaderMenu = (props) => {
  const buildNav = (data) => {
    return data.map((item, i) => {
      if (!item.is_home && !item.external_link) {
        return (
          <li className={(`/${item.slug}` == `${props.route}`) ? `active` : ``} key={`${i}-${item.id}`}>
            <MenuLink page={item.title} path={item.slug} sub_route={item.sub_route}/>
          </li>
        )
      } else if (item.external_link) {
        return (
          <li key={`${i}-${item.id}`} className={`${props.orientation} ${props.navLocation}`}>
            <LinkOut href={item.url} target='_blank' color={colors.white}><span>{item.title}</span></LinkOut>
          </li>
        )
      }
    })
  }
  return (
    <MenuWrapper className={`${props.orientation} ${props.navLocation}`}>
      <NavList className={`${props.orientation} ${props.navLocation}`}>
        {props.children}
        {(props.api_data) && buildNav(props.api_data.menus[props.location].items)}
      </NavList>
    </MenuWrapper>
  )
}

export default connect(
  state => ({
    api_data: state.api_data,
    route: state.router.location.pathname
  })
)(HeaderMenu)

// STYLES
const MenuWrapper = styled.menu`
  margin-top: ${spacing.single_pad};
  padding-bottom: .5rem;
`

const NavList = styled.ul`
  ${flexColumn};
  position: relative;
  text-align: left;
  li {
    padding-bottom: ${spacing.single_pad};
    align-self: flex-end;
  }
`

const LinkOut = styled.a`
  ${defaultLink};
  ${mediumType};
  text-transform: lowercase;
  color: ${props => props.color}!important;
`
