import React from 'react'
import PatternSizer from './PatternSizer'

const PatternHome = () =>
  <PatternSizer>
    <img src={'assets/patterns/bg-home.svg'} />
  </PatternSizer>

const PatternReel = () =>
  <PatternSizer>
    <img src={'assets/patterns/bg-reel.svg'} />
  </PatternSizer>

const PatternAbout = () =>
  <PatternSizer>
    <img src={'assets/patterns/bg-about.svg'} />
  </PatternSizer>

export {
  PatternHome,
  PatternAbout,
  PatternReel
}