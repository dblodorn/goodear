import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { VideoGrid, Head } from './../components'
import { PatternHome } from './../patterns'
import { media } from './../styles/mixins'
import { widths, spacing } from './../styles/theme.json'
import { trimExcerpt } from './../scripts'

const Home = props => {
  return (
    <Fragment>
      <Head title={`Home`} description={trimExcerpt(props.api_data.options.manifesto)} />
      <HomeSection>
        <VideoGrid videos={props.api_data.options.home_videos} columns={'home'}/>
      </HomeSection>
      <PatternHome/>
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
  padding-bottom: calc(8rem - ${spacing.double_pad});
  ${media.desktopNav`
    padding-left: ${widths.sidebar_desktop};
    padding-bottom: 0;
  `}
`