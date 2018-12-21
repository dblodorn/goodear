import React from 'react'
import styled from 'styled-components'
import { flexRowWrap, media } from './../styles/mixins'
import { VideoGridWrapper } from './../styles/components'
import { VideoModal } from './../components'
import VideoCard from './VideoCard'
import { spacing } from './../styles/theme.json'

export default props =>
  <VideoGridWrapper className={`${props.columns}`}>
    {props.videos.map((item, i) =>
      <VideoCard item={item} key={item.post_id + 'vg' + i}>
        <VideoModal thumbnail={item.thumbnail_arr} data={item}/>
      </VideoCard>
    )}
  </VideoGridWrapper>
