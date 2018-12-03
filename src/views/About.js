import React, { Fragment } from 'react'
import styled from 'styled-components'
import { spacing } from './../styles/theme.json'
import { pageData, Head } from './../components'
import { PatternSeven } from './../patterns'

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <Head title={props.project.title} description={props.project.short_description}/>
      <PatternSeven/>
    </Fragment>
  )
})

// STYLES
