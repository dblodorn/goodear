import React from 'react'
import styled from 'styled-components'
import { flexRowWrap, media } from './../styles/mixins'
import { VideoModal } from './../components'
import VideoCard from './VideoCard'
import { spacing } from './../styles/theme.json'
import includes from 'lodash/includes';
import mixin from 'lodash/mixin';
import _ from 'lodash/wrapperLodash';

mixin(_, {
  includes: includes,
});

export default props =>
  <VideoGridWrapper className={`${props.columns}`}>
    {props.videos.map((item, i) =>
      <VideoCard item={item} key={item.post_id + 'vg' + i}>
        <VideoModal thumbnail={item.thumbnail} data={item}/>
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
      width: calc(100% / 5);
    }
    &.home > li {
      width: calc(100% / 3);
    }
  `}
  ${media.medium`
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
  ${media.tablet`
    &.home > li {
      width: calc(100% / 2);
    }
  `}
`