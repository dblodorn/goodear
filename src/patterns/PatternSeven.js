import React from 'react'
import PatternPortal from './PatternPortal'
import Color from 'color'
import { PatternWrapper } from './pattern-styles.js'
import { colors } from './../styles/theme.json'

export default () =>
  <PatternPortal>
    <PatternWrapper>      
      <img src={'assets/patterns/pattern7.svg'}/>
    </PatternWrapper>
  </PatternPortal>