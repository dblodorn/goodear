import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { flexColumn, mediumType, shadow } from '../../styles/mixins'
import { StyledLink, Manifesto } from './../../styles/components'
import { colors, widths, spacing } from './../../styles/theme.json'
import HeaderStrip from './HeaderStrip'
import Logo from './../Logo'
import HeaderStripDesk from './HeaderStripDesk'
import Socials from './../social/Socials'
import NewsletterModal from './../NewsletterModal'
import SidebarBg from './SidebarBg'

const HeaderDesktop = props =>
  <Fragment>
    <Transition from={{ opacity: 0, transform: `translateX(-${widths.sidebar_desktop})` }} enter={{ opacity: 1, transform: `translateY(0})` }} leave={{ opacity: 0, transform: `translateX(-${widths.sidebar_desktop})`, pointerEvents: 'none' }}>
      {(props.header_state && (props.route === '/') ) && (styles => 
        <Sidebar style={styles}>
          <HeaderTop>
            <LogoWrapper>
              <Logo/>
            </LogoWrapper>
            <MenuWrapper>
              <NavList>
                {props.menu.map((item, i) =>
                  <li key={`h-link-${item.slug}${i}`}>
                    <NavLink to={`/${item.slug}`}>
                      <span dangerouslySetInnerHTML={{__html: item.title }}/>
                    </NavLink>
                  </li>
                )}
              </NavList>
            </MenuWrapper>
          </HeaderTop>
          <HeaderBottom>
            <div>{(props.api_data) && <Manifesto dangerouslySetInnerHTML={{ __html: props.api_data.options.manifesto }}/>}</div>
            <Socials/>
          </HeaderBottom>
          <HeaderStrip headerClass={`home`}>
            <NewsletterModal/>
          </HeaderStrip>
          <SidebarBg/>
        </Sidebar>
      )}
    </Transition>
    <Transition from={{ opacity: 0, transform: `translateX(-${widths.sidebar_desktop})` }} enter={{ opacity: 1, transform: `translateY(0})` }} leave={{ opacity: 0, transform: `translateX(-${widths.sidebar_desktop})`, pointerEvents: 'none' }}>
      {(props.route !== '/' && props.header_state) && (styles => 
        <HeaderStripDesk styles={styles} menu={props.menu}/>
      )}
    </Transition>
  </Fragment>

export default connect(
  state => ({
    route: state.router.location.pathname,
    api_data: state.api_data,
    header_state: state.header_state
  })
)(HeaderDesktop)

/* STYLES */
const Sidebar = styled.header`
  ${shadow};
  ${flexColumn};
  width: ${widths.sidebar_desktop};
  justify-content: space-between;
  height: 100vh;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  background-color: ${colors.orange};
  padding-left: ${widths.sidebar_nav};
  a {
    color: ${colors.white};
    &:hover {
      color: ${colors.yellow}!important;
    }
    &.active {
      color: ${colors.yellow}!important;
    }
  }
`

const MenuWrapper = styled.menu`
  margin-top: ${spacing.single_pad};
  padding-bottom: .5rem;
  z-index: 9000;
`

const NavList = styled.ul`
  ${flexColumn};
  position: relative;
  text-align: left;
  z-index: 9000;
  li {
    padding-bottom: ${spacing.single_pad};
    align-self: flex-end;
  }
`

const NavLink = styled(StyledLink)`
  ${mediumType};
  text-transform: lowercase;
  color: ${colors.white};
  &:hover {
    color: ${colors.yellow}!important;
  }
`



const LogoWrapper = styled.div`
  width: 100%;
  padding: ${spacing.single_pad};
  position: relative;
  border: 1px solid ${colors.white};
  z-index: 9000;
  svg {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const HeaderTop = styled.div`
  position: relative;
  padding: ${spacing.single_pad};
  height: 40%;
  z-index: 9000;
`

const HeaderBottom = styled.div`
  ${flexColumn};
  position: relative;
  padding: ${spacing.single_pad};
  height: 60%;
  justify-content: space-between;
  z-index: 9000;
`
