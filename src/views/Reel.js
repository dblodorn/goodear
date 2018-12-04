import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { widths } from './../styles/theme.json'
import { media } from './../styles/mixins'
import { Head, VideoGrid } from './../components'
import { PatternSeven } from './../patterns'

const Reel = props => {
  const videos = props.api_data.posts.video
  return (
    <Fragment>
      <Head title={'Reel'} description={'Our Work'}/>
      <ReelWrapper>
        <VideoGrid videos={videos} columns={'reel'}/>
      </ReelWrapper>
      <PatternSeven/>
    </Fragment>
  )
}

export default connect(
  state => ({
    api_data: state.api_data
  })
)(Reel)

// STYLES
const ReelWrapper = styled.section`
  width: 100%;
  position: relative;
  ${media.desktopNav`
    padding-left: ${widths.sidebar_nav};
  `}
`