import React from 'react'
import PatternPortal from './PatternPortal'
import { PatternWrapper } from './../styles/components'

export default props =>
  <PatternPortal>
    <PatternWrapper>
      {props.children}
    </PatternWrapper>
  </PatternPortal>