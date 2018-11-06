import React from 'react'
import styled from 'styled-components'
import { flexColumn, rotoHalf } from '../../styles/mixins'
import { ExternalLink } from '../../styles/components'
import { widths, fonts, spacing, colors } from './../../styles/theme.json'
import Footer from './../footer/Footer'

export default (props) =>
  <SidebarNavWrapper>
    <Top>
      <Locations><span>LOS ANGELES</span><span>NEW YORK</span></Locations>
    </Top>
    <Bottom>
      <BottomInner>
        <ExternalLink href={`mailto:contact@goodear.tv`} target='_blank'><span>CONTACT@GOODEAR.TV</span></ExternalLink>
      </BottomInner>
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
  background-color: #23C17C;
  * {
    color: ${colors.white};
    font-size: ${fonts.sizes.small};
    letter-spacing: 2px;
    text-transform: uppercase;
    ul {
      flex-direction: row;
    }
  }
`

const Top = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;
  span {
    display: inline-flex;
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: 1px solid ${colors.white};
    &:last-child {
      margin: 0;
      padding: 0;
      border-right: 0;
    }
  }
`

const Bottom = styled.div`
  height: 50vh;
  width: 4rem;
  position: absolute;
  bottom: 0;
  left: 0;
`

const Locations = styled.div`
  ${rotoHalf};
  justify-content: flex-start;
`

const BottomInner = styled.div`
  ${rotoHalf};
  justify-content: flex-end;
`