import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { spacing, widths } from './../styles/theme.json'
import { Head } from './../components'
import { PatternSeven } from './../patterns'
import VideoGrid from './templates/flexible-image-gallery/video-grid/VideoGrid'

const Reel = props => {
  console.log(props.api_data.posts.video)
  return (
    <Fragment>
      <Head title={'Reel'} description={'Our Work'}/>
      <ReelWrapper>
        <VideoGrid />
      </ReelWrapper>
      <PatternSeven/>
    </Fragment>
  )
}

export default connect(
  state => ({
    api_data: state.api_data,
    router: state.router
  })
)(Reel)

// STYLES
const ReelWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-left: calc(${widths.sidebar_nav} + ${spacing.single_pad});
`