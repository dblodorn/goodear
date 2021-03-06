import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Color from 'color'
import { flexColumn, rotoHalf, sidebarNav } from '../../styles/mixins'
import { widths, fonts, colors, spacing } from './../../styles/theme.json'

const HeaderStrip = props =>
  <SidebarNavWrapper>
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
    api_data: state.api_data,
    header_state: state.header_state
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
  background-color: ${Color(colors.orange).darken(.2).hsl().string()};
  z-index: 10000;
  ${sidebarNav};
  &:before {
    content: '';
    display: block;
    width: ${widths.sidebar_nav};
    left: 0;
    top: 0;
    height: 10rem;
    background-color: ${Color(colors.orange).darken(.2).hsl().string()};
    position: absolute;
    transform: translateY(-10rem);
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