import React from 'react'
import styled from 'styled-components'
import { flexRowWrap, media } from './../styles/mixins'
import { VideoModal } from './../components'
import VideoCard from './VideoCard'
import { spacing } from './../styles/theme.json'

export default props =>
  <VideoGridWrapper className={`${props.columns}`}>
    {props.videos.map((item, i) =>
      <VideoCard item={item} key={item.post_id + 'vg' + i}>
        <VideoModal thumbnail={item.thumbnail} short_description={item.short_description} video_url={item.video_url} data={item}/>
      </VideoCard>
    )}
  </VideoGridWrapper>

const VideoGridWrapper = styled.ul`
  ${flexRowWrap};
  width: 100%;
  position: relative;
  padding: ${spacing.single_pad};
  flex-grow: 0;
  flex-shrink: 0;
  &.home > li {
    width: 50%;
    position: relative;
  }
  &.reel > li {
    width: calc(100% / 2);
  }
  ${media.desktopNav`
    &.reel > li {
      width: calc(100% / 7);
    }
    &.home > li {
      width: calc(100% / 4);
    }
  `}
  ${media.big`
    &.reel > li {
      width: calc(100% / 8);
    }
    &.home > li {
      width: calc(100% / 4);
    }
  `}
`