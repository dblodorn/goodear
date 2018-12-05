import React, { Fragment } from 'react'
import Color from 'color'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './../Logo'
import { connect } from 'react-redux'
import { flexColumn, defaultLink, buttonInit, scrollPanel, microType, shadow, borderRadius, flexRowCenteredAll } from './../../styles/mixins'
import { fonts, spacing, colors } from './../../styles/theme.json'

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
      <HeaderWrapper>
        <LogoLink to={`/`}>
          <div className={'logo-inner'}><Logo /></div>
        </LogoLink>
      </HeaderWrapper>
      <NavBar>
        {HEADER_MENU.map((item, i) =>
          <Link to={`/${item.slug}`} className={(`/${item.slug}` == `${props.route}`) ? `active` : ``} key={`link-${item.slug}${i}`}>
            <span>{item.title}</span>
          </Link>
        )}
      </NavBar>
    </Fragment>
  )
}

export default connect(
  state => ({
    route: state.router.location.pathname
  })
)(HeaderMobile)

/* STYLES */
const HeaderWrapper = styled.header`
  ${shadow};
  width: 100vw;
  position: relative;
  background-color: ${colors.orange};
  background-image: url('/assets/patterns/menubg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  background-color: ${Color(colors.blue).darken(.25).hsl().string()};
  position: sticky;
  top: 0;
  z-index: 9000;
  a {
    text-decoration: none;
    margin-right: ${spacing.double_pad};
    &:last-child {
      margin-right: 0;
    }
    span {
      ${buttonInit};
      font-family: ${fonts.sans_medium};
      font-weight: 500;
      color: ${colors.white};
      font-size: ${fonts.sizes.body};
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
`