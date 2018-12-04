import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { spacing, widths } from './../styles/theme.json'
import { Head, VideoGrid } from './../components'
import { PatternSeven } from './../patterns'

const Reel = props => {
  console.log(props.api_data.posts.video)
  return (
    <Fragment>
      <Head title={'Reel'} description={'Our Work'}/>
      <ReelWrapper>
        <VideoGrid videos={props.api_data.posts.video} columns={'reel'}/>
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
const ReelWrapper = styled.section`
  width: 100%;
  position: relative;
  padding-left: ${widths.sidebar_nav};
`