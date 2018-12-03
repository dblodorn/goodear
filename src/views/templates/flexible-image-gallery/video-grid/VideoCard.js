import React,  { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import Color from 'color'
import { ProportionWrapper } from './../../../../styles/components'
import { absoluteTopFull, opacityTransition, monoP, microType, flexColumn } from './../../../../styles/mixins'
import { colors, spacing } from './../../../../styles/theme.json'

const VideoCaption = (props) =>
  <VideoCaptionWrapper>
    <h4 className={'title'} dangerouslySetInnerHTML={{ __html: props.item.title }}/>
    <h5 className={'brand'} dangerouslySetInnerHTML={{ __html: (props.item.taxonomies.brand) && props.item.taxonomies.brand[0] }}/>
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
  ${flexColumn};
  opacity: 1;
  pointer-events: none;
  padding-top: ${spacing.micro_pad};
  z-index: 1;
  * {
    color: ${colors.white}!important;
  }
  h4 {
    ${microType};
    text-transform: uppercase;
    padding-bottom: ${spacing.micro_pad};
  }
  h5 {
    ${monoP};
    align-self: flex-end;
    line-height: .9;
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
  background-color: ${colors.pink};
`

const VideoWrapper = styled.div`
  ${absoluteTopFull};
  z-index: 0;
`