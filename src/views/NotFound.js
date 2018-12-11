import React from 'react'
import styled from 'styled-components'
import { Head } from './../components'
import { Section, H1 } from './../styles/components'
import { flexCenteredAll } from './../styles/mixins'
import { colors } from './../styles/theme.json'
import { PatternAbout } from './../patterns'

export default () =>
  <NotFoundSection>
    <Head Title={'Page Not Found'}/>
    <H1>😢 404 Page Not Found 😢</H1>
    <PatternAbout/>
  </NotFoundSection>

const NotFoundSection = styled(Section)`
  ${flexCenteredAll};
  height: 100vh;
  * {
    color: ${colors.pink};
  }
`