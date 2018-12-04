import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { flexColumn, monoP, media, mediumType, shadow } from '../../styles/mixins'
import { StyledLink } from './../../styles/components'
import { colors, widths, spacing, fonts } from './../../styles/theme.json'
import Logo from './../Logo'
import HeaderStrip from './HeaderStrip'
import Socials from './../social/Socials'

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

const HeaderDesktop = (props) =>
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
                {HEADER_MENU.map((item, i) =>
                  <li key={`h-link-${item.slug}${i}`}>
                    <NavLink to={`/${item.slug}`} color={colors.white}>
                      <span dangerouslySetInnerHTML={{__html: item.title }}/>
                    </NavLink>
                  </li>
                )}
              </NavList>
            </MenuWrapper>
          </HeaderTop>
          <HeaderBottom>
            <div>
              {(props.api_data) && <Manifesto dangerouslySetInnerHTML={{ __html: props.api_data.options.manifesto }}/>}
              <TestimonialsLink to={`/kind-words`} ><span>People Love Us</span></TestimonialsLink>
            </div>
            <Socials/>
          </HeaderBottom>
          <HeaderStrip>
            <span>NEWSLETTER</span>
          </HeaderStrip>
        </Sidebar>
      )}
    </Transition>
    <Transition from={{ opacity: 0, transform: `translateX(-${widths.sidebar_desktop})` }} enter={{ opacity: 1, transform: `translateY(0})` }} leave={{ opacity: 0, transform: `translateX(-${widths.sidebar_desktop})`, pointerEvents: 'none' }}>
      {(props.route !== '/') && (styles => 
        <StripWrapper style={styles}>
          <HeaderStrip>
            <Link to={`/`}>
              <span>Home</span>
            </Link>
            {HEADER_MENU.map((item, i) =>
              <Link to={`/${item.slug}`} className={(`/${item.slug}` == `${props.route}`) ? `active` : ``} key={`link-${item.slug}${i}`}>
                <span>{item.title}</span>
              </Link>
            )}
          </HeaderStrip>
        </StripWrapper>
      )}
    </Transition>
  </Fragment>

export default connect(
  state => ({
    api_data: state.api_data,
    route: state.router.location.pathname
  })
)(HeaderDesktop)

/* STYLES */
const Sidebar = styled.header`
  ${shadow};
  width: ${widths.sidebar_desktop};
  ${flexColumn};
  justify-content: space-between;
  height: 100vh;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  background-color: ${colors.orange};
  padding-left: ${widths.sidebar_nav};
`

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

const NavLink = styled(StyledLink)`
  ${mediumType};
  text-transform: lowercase;
`

const StripWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
`

const LogoWrapper = styled.div`
  width: 100%;
  padding: ${spacing.single_pad};
  position: relative;
  object-fit: contain;
  svg {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  border: 1px solid ${colors.white};
`

const HeaderTop = styled.div`
  position: relative;
  padding: ${spacing.single_pad};
  height: 40%;
`

const HeaderBottom = styled.div`
  ${flexColumn};
  position: relative;
  padding: ${spacing.single_pad};
  height: 60%;
  justify-content: space-between;
`

const Manifesto = styled.div`
  padding: ${spacing.single_pad} 0;
  border-top: 1px solid ${colors.white};
  border-bottom: 1px solid ${colors.white};
  margin-bottom: ${spacing.single_pad};
  * {
    ${monoP};
    color: ${colors.white};
    font-size: ${fonts.sizes.small_sm};
    line-height: 1.25;
    ${media.medium`
      font-size: ${fonts.sizes.small};
    `}
  }
`

const TestimonialsLink = styled(Link)`
  font-family: ${fonts.display_font_a};
  font-weight: 500;
  line-height: 1;
  width: 100%;
  text-align: center;
  color: ${colors.white};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${fonts.sizes.small};
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
`