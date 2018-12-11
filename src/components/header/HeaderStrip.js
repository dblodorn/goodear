import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Color from 'color'
import { flexColumn, rotoHalf, buttonInit, linkInit } from '../../styles/mixins'
import { widths, fonts, colors, spacing, api_colors } from './../../styles/theme.json'

const HeaderStrip = props =>
  <SidebarNavWrapper 
    typeColor={props.typeColor}
    hoverColor={props.hoverColor}
    bgColor={props.router === '/' 
      ? props.api_data.options.api_colors.home_sidebar_bg_color || api_colors.home_sidebar_bg_color
      : props.api_data.options.api_colors.home_bg_color || api_colors.home_bg_color
    }
  >
    <Top>
      <RotoTop>
        {props.children}
      </RotoTop>
    </Top>
    <Bottom>
      <RotoBottom>
        <a href={`mailto:contact@goodear.tv`} target='_blank'><span>CONTACT@GOODEAR.TV</span></a>
      </RotoBottom>
    </Bottom>
  </SidebarNavWrapper>

export default connect(
  state => ({
    router: state.router.location.pathname,
    api_data: state.api_data
  })
)(HeaderStrip)

/* STYLES */
const SidebarNavWrapper = styled.div`
  ${flexColumn};
  position: absolute;
  top: 0;
  left: 0;
  width: ${widths.sidebar_nav};
  height: 100vh;
  background-color: ${props => Color(props.bgColor).darken(.2).hsl().string()};
  z-index: 10000;
  * {
    ${linkInit}
    margin-right: ${spacing.single_pad};
    &:last-child {
      margin-right: 0;
    }
    color: ${props => props.typeColor || api_colors.home_sidebar_type_color};
    &:hover {
      color: ${props => props.hoverColor || api_colors.home_sidebar_hover_color}!important;
    }
    &.active {
      color: ${props => props.hoverColor || api_colors.home_sidebar_hover_color}!important;
    }
  }
  span {
    ${buttonInit};
    font-family: ${fonts.sans_medium};
    font-weight: 500;
    font-size: ${fonts.sizes.small};
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
  }
`

const Top = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9000;
`

const Bottom = styled.div`
  height: 50vh;
  width: 4rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9000;
`

const RotoTop = styled.div`
  ${rotoHalf};
  justify-content: flex-start;
`

const RotoBottom = styled.div`
  ${rotoHalf};
  justify-content: flex-end;
`