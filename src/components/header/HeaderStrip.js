import React from 'react'
import styled from 'styled-components'
import { flexColumn, rotoHalf, buttonInit, linkInit } from '../../styles/mixins'
import { ExternalLink } from '../../styles/components'
import { widths, fonts, colors, spacing } from './../../styles/theme.json'

export default props =>
  <SidebarNavWrapper bgColor={colors.dk_grey}>
    <Top>
      <RotoTop>
        {props.children}
      </RotoTop>
    </Top>
    <Bottom>
      <RotoBottom>
        <ExternalLink href={`mailto:contact@goodear.tv`} target='_blank'><span>CONTACT@GOODEAR.TV</span></ExternalLink>
      </RotoBottom>
    </Bottom>
  </SidebarNavWrapper>

/* STYLES */
const SidebarNavWrapper = styled.div`
  ${flexColumn};
  position: absolute;
  top: 0;
  left: 0;
  width: ${widths.sidebar_nav};
  height: 100vh;
  background-color: ${props => props.bgColor};
  z-index: 10000;
  a {
    ${linkInit}
    margin-right: ${spacing.single_pad};
    &:last-child {
      margin-right: 0;
    }
    &.active {
      span {
        color: ${colors.pink};
      }
    }
  }
  span {
    ${buttonInit};
    font-family: ${fonts.display_font_a};
    font-weight: 500;
    color: ${colors.white};
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
`

const Bottom = styled.div`
  height: 50vh;
  width: 4rem;
  position: absolute;
  bottom: 0;
  left: 0;
`

const RotoTop = styled.div`
  ${rotoHalf};
  justify-content: flex-start;
`

const RotoBottom = styled.div`
  ${rotoHalf};
  justify-content: flex-end;
`