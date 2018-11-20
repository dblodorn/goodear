import React,  { Fragment } from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { themeA, themes } from './../../../../styles/theme'
import LazyLoad from 'react-lazyload'
import { ProportionWrapper, SmallP } from './../../../../styles/components'
import { absoluteTopFull, opacityTransition } from './../../../../styles/mixins'
import { colors, spacing } from './../../../../styles/theme.json'

const VideoCaption = (props) =>
  <VideoCaptionWrapper>
    <SmallP>
      {props.item.title}<br/>
      {(props.item.taxonomies.brand) && props.item.taxonomies.brand[0]}
    </SmallP>
  </VideoCaptionWrapper>

const VideoCard = (props) =>
  <VideoThumb className={(!props.playing) && 'video-playing'} className={props.overflow}>
    <ThumbInner>
      <ProportionWrapper
        Desktop={props.proportion || 100}
        Mobile={props.proportion || 100}
        Max={props.proportion || 100}
      >
        {(!props.overflow)
          ? <LazyLoad height='100%'>
              <VideoWrapper>
                {props.children}
              </VideoWrapper>
            </LazyLoad>
          : <Fragment>
              <VideoWrapper>
                {props.children}
              </VideoWrapper>
            </Fragment>
        }
      </ProportionWrapper>
      <VideoCaption item={props.item}/>
    </ThumbInner>
  </VideoThumb>

export default connect(
  state => ({
    video_playing: state.video_playing,
    video_state: state.video_state
  })
)(VideoCard)

// STYLES
const VideoCaptionWrapper = styled.div`
  ${opacityTransition};
  opacity: 1;
  pointer-events: none;
  padding-top: ${spacing.micro_pad};
  z-index: 1;
  * {
    color: ${colors.black}!important;
  }
`

const VideoThumb = styled.li`
  padding: ${spacing.micro_pad};
  &:hover {
    .hover-reveal {
      opacity: 1;
    }
  }
`

const ThumbInner = styled.div`
  padding: ${spacing.single_pad};
  background-color: ${colors.yellow};
`

const VideoWrapper = styled.div`
  ${absoluteTopFull};
  z-index: 0;
`