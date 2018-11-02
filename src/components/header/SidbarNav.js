import React from 'react'
import styled from 'styled-components'
import { flexColumn } from '../../styles/mixins'
import { widths } from './../../styles/theme.json'
import Footer from './../footer/Footer'

export default (props) =>
  <SidebarNavWrapper>
    <Footer orientation={props.orientation}/>
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
`