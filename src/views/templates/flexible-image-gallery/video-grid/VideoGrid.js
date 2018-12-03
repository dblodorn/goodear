import React from 'react'
import { GridWrapper } from './../../../../styles/components'
import { VideoModal } from './../../../../components'
import VideoCard from './VideoCard'

export default props =>
  <GridWrapper className={`${props.data.columns}`}>
    {props.videos.map((item, i) =>
      <VideoCard item={item} overflow={((props.data.container_width === 'fixed_left') || (props.data.container_width === 'fixed_right'))  ? true : false} key={item.post_id + 'vg' + i}>
        <VideoModal thumbnail={item.thumbnail} short_description={item.short_description} video_url={item.video_url} theme={'a'}/>
      </VideoCard>
    )}
  </GridWrapper>
