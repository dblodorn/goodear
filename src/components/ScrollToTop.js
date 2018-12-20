import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'
import { defaultLink, buttonInit } from './../styles/mixins'

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 350
  })
}

export default () =>
  <ScrollButton onClick={scrollToTop}><span>Top</span></ScrollButton>

// STYLES
const ScrollButton = styled.button`
  ${defaultLink};
  ${buttonInit};
`