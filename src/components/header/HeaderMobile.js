import React, { Fragment } from 'react'
import Color from 'color'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './../Logo'
import { connect } from 'react-redux'
import { buttonInit, shadow, flexRowCenteredAll } from './../../styles/mixins'
import { fonts, spacing, colors, api_colors } from './../../styles/theme.json'
import SidebarBg from './SidebarBg'

const HEADER_MENU = [
  {
    title: 'reel',
    slug: 'reel',
    is_home: false
  },
  {
    title: 'about',
    slug: 'about',
    is_home: false
  }
]

const HeaderMobile = (props) => {
  return (
    <Fragment>
      <HeaderWrapper bgColor={props.api_data.options.api_colors.home_sidebar_bg_color}>
        <LogoLink to={`/`}>
          <div className={'logo-inner'}><Logo /></div>
        </LogoLink>
        <SidebarBg bgColor={props.api_data.options.api_colors.home_sidebar_bg_color || api_colors.home_sidebar_bg_color}/>
      </HeaderWrapper>
      <NavBar bgColor={props.api_data.options.api_colors.home_sidebar_bg_color || api_colors.home_sidebar_bg_color}>
        {HEADER_MENU.map((item, i) =>
          <Link 
            to={`/${item.slug}`}
            className={(`/${item.slug}` == `${props.route}`) ? `active` : ``}
            key={`link-${item.slug}${i}`}
            typeColor={props.api_data.options.api_colors.home_sidebar_type_color}
            hoverColor={props.api_data.options.api_colors.home_sidebar_hover_color}
          >
            <span>{item.title}</span>
          </Link>
        )}
      </NavBar>
    </Fragment>
  )
}

export default connect(
  state => ({
    route: state.router.location.pathname,
    api_data: state.api_data
  })
)(HeaderMobile)

/* STYLES */
const HeaderWrapper = styled.header`
  ${shadow};
  width: 100vw;
  position: relative;
  background-color: ${props => props.bgColor || api_colors.home_sidebar_bg_color};
  top: 0;
  left: 0;
  z-index: 9000;
  transition: opacity 750ms ease, transform 350ms ease;
  * {
    color: ${colors.header_type_color}!important;
  }
`

const LogoLink = styled(Link)`
  width: 100%;
  padding: ${spacing.single_pad};
  position: relative;
  margin: 0 auto;
  max-width: 20rem;
  display: flex;
  z-index: 9000;
  .logo-inner {
    svg {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`

const NavBar = styled.nav`
  ${flexRowCenteredAll};
  width: 100%;
  padding: ${spacing.single_pad};
  background-color: ${props => Color(props.bgColor).darken(.25).hsl().string()};
  position: sticky;
  top: 0;
  z-index: 9000;
  a {
    text-decoration: none;
    margin-right: ${spacing.double_pad};
    color: ${props => props.typeColor || api_colors.home_sidebar_type_color};
    &:hover {
      color: ${props => props.hoverColor || api_colors.home_sidebar_hover_color}!important;
    }
    &.active {
      color: ${props => props.hoverColor || api_colors.home_sidebar_hover_color}!important;
    }
    &:last-child {
      margin-right: 0;
    }
    span {
      ${buttonInit};
      font-family: ${fonts.sans_medium};
      font-weight: 500;
      font-size: ${fonts.sizes.body};
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
`