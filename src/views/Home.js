import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { VideoGrid, Head } from './../components'
import { media } from './../styles/mixins'
import { Manifesto } from './../styles/components'
import { widths, breakpoints } from './../styles/theme.json'
import { trimExcerpt } from './../scripts'
import { PatternHome } from './../patterns'

const Home = props => {
  return (
    <Fragment>
      <Head title={`Home`} description={trimExcerpt(props.api_data.options.manifesto)} />
      <HomeSection>
        {(props.resize_state.window_width < breakpoints.desktop) && 
          <Manifesto dangerouslySetInnerHTML={{ __html: props.api_data.options.manifesto }} />
        }
        <VideoGrid videos={props.api_data.options.home_videos} columns={'home'}/>
      </HomeSection>
      <PatternHome/>
    </Fragment>
  )
}

export default connect(
  state => ({
    api_data: state.api_data,
    resize_state: state.resize_state
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