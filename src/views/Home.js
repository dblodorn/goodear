import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { VideoGrid } from './../components'
import { PatternSeven } from './../patterns'
import { media } from './../styles/mixins'
import { widths } from './../styles/theme.json'

const Home = props => {
  console.log(props.api_data.options.home_videos)
  return (
    <Fragment>
      <HomeSection>
        <VideoGrid videos={props.api_data.options.home_videos} columns={'home'}/>
      </HomeSection>
      <PatternSeven/>
    </Fragment>
  )
}

export default connect(
  state => ({
    api_data: state.api_data
  })
)(Home)

const HomeSection = styled.section`
  width: 100%;
  position: relative;
  ${media.desktopNav`
    padding-left: ${widths.sidebar_desktop};
    padding-bottom: 0;
  `}
`