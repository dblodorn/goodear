import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { flexColumn } from '../../styles/mixins'
import { colors, widths, spacing } from './../../styles/theme.json'
import { meta_defaults } from './../../config.json'
import Menu from '../menus/Menu'
import Logo from './Logo'
import SidebarNav from './SidbarNav'

export default (props) =>
  <Transition from={{ opacity: 0, transform: `translateX(-${widths.sidebar_desktop})` }} enter={{ opacity: 1, transform: `translateY(0})` }} leave={{ opacity: 0, transform: `translateX(-${widths.sidebar_desktop})`, pointerEvents: 'none' }}>
    {props.header_state && (styles => 
      <Sidebar style={styles}>
        <HeaderTop>
          <Menu location={0} navLocation={'header'}/>
        </HeaderTop>
        <SidebarNav/>
        <Logo theme={'a'} title={meta_defaults.title}/>
      </Sidebar>
    )}
  </Transition>

/* STYLES */
const Sidebar = styled.div`
  width: ${widths.sidebar_desktop};
  ${flexColumn};
  justify-content: space-between;
  height: 100vh;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  background-color: ${colors.header_bg_color};
  padding-left: calc(${widths.sidebar_nav} + ${spacing.single_pad});
  padding-top: ${spacing.single_pad};
  padding-bottom: ${spacing.single_pad};
  padding-right: ${spacing.single_pad};
  * {
    color: ${colors.header_type_color}!important;
  }
`

const HeaderTop = styled.header`
  position: relative;
`
