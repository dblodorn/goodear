import React from 'react'
import Color from 'color'
import { connect } from 'react-redux'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { absoluteTopFull, opacityTransition, monoP, microType, flexColumn, shadow } from './../styles/mixins'
import { colors, spacing, api_colors } from './../styles/theme.json'

const VideoCard = props =>
  <VideoThumb>
    <ThumbInner bgColor={props.api_data.options.api_colors.video_card_bg_color}>
      <ThumbWrapper>
        <LazyLoad height='100%'>
          <VideoWrapper>
            {props.children}
          </VideoWrapper>
        </LazyLoad>
      </ThumbWrapper>
      <VideoCaptionWrapper typeColor={props.api_data.options.api_colors.video_card_type_color}>
        <h4 className={'title'} dangerouslySetInnerHTML={{ __html: props.item.title }}/>
        <h5 className={'brand'} dangerouslySetInnerHTML={{ __html: (props.item.taxonomies.brand) && props.item.taxonomies.brand[0] }}/>
      </VideoCaptionWrapper>
    </ThumbInner>
  </VideoThumb>

export default connect(
  state => ({
    api_data: state.api_data
  })
)(VideoCard)

// STYLES
const VideoCaptionWrapper = styled.div`
  ${opacityTransition};
  ${flexColumn};
  opacity: 1;
  pointer-events: none;
  flex: 1;
  padding-top: ${spacing.micro_pad};
  z-index: 1;
  * {
    color: ${props => props.typeColor || api_colors.video_card_type_color}!important;
  }
  h4 {
    ${microType};
    text-transform: uppercase;
    padding-bottom: 5px;
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

const ThumbWrapper = styled.div`
  height: 0;
  overflow-y: visible;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`

const ThumbInner = styled.div`
  ${shadow};
  background-color: ${props => props.bgColor || api_colors.video_card_bg_color};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${spacing.micro_pad};
`

const VideoWrapper = styled.div`
  ${absoluteTopFull};
  z-index: 0;
`