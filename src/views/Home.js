import React, { Fragment } from 'react'
import styled from 'styled-components'
import { spacing } from './../styles/theme.json'
import { pageData, Head } from './../components'
import FlexibleImageGallery from './templates/flexible-image-gallery/FlexibleImageGallery'
import { PatternSeven } from './../patterns'

export default pageData((props) => {
  console.log(props)
  return (
    <Fragment>
      <Head title={props.project.title} description={props.project.short_description}/>
      <Videos>
        <FlexibleImageGallery data={props.project} style={props.style}/>
      </Videos>
      <PatternSeven/>
    </Fragment>
  )
})

// STYLES
const Videos = styled.div`
  width: 100%;
  position: relative;
  padding: ${spacing.single_pad};
`