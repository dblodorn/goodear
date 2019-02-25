import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { VideoModal, VideoCard, Head } from './../components'
import { media } from './../styles/mixins'
import { Manifesto, VideoGridWrapper } from './../styles/components'
import { widths, breakpoints } from './../styles/theme.json'
import { trimExcerpt } from './../scripts'
import { PatternHome } from './../patterns'

const Home = props => {
  return (
    <Fragment>
      <Head title={`Home`} description={trimExcerpt(props.api_data.options.seo.home_meta)} />
      <HomeSection>
        {(props.resize_state.window_width < breakpoints.desktop) && 
          <Manifesto dangerouslySetInnerHTML={{ __html: props.api_data.options.manifesto }} />
        }
        <VideoGridWrapper className={`home`}>
          {props.api_data.options.home_videos.map((item, i) =>
            <VideoCard item={item} key={item.post_id + 'vg' + i}>
              <VideoModal thumbnail={item.thumbnail_arr} data={item}/>
            </VideoCard>
          )}
        </VideoGridWrapper>
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