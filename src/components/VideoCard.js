import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { absoluteTopFull, opacityTransition, monoP, microType, flexColumn, shadow } from './../styles/mixins'
import { spacing } from './../styles/theme.json'

const VideoCard = props =>
  <VideoThumb>
    <ThumbInner>
      <ThumbWrapper>
        <LazyLoad height='100%'>
          <VideoWrapper>
            {props.children}
          </VideoWrapper>
        </LazyLoad>
      </ThumbWrapper>
      <VideoCaptionWrapper>
        <h4 className={'title'}><span dangerouslySetInnerHTML={{ __html: (props.item.taxonomies.brand) && props.item.taxonomies.brand[0] }} /></h4>
        <h5 className={'brand'}><span dangerouslySetInnerHTML={{ __html: props.item.title }} /></h5>
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
    color: #ffffff;
  }
  h4 {
    ${microType};
    text-transform: uppercase;
    padding-bottom: 5px;
  }
  h5 {
    ${monoP};
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    line-height: .9;
    text-align: right;
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
  background-color: #54ce8b;
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