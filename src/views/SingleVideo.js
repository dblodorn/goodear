import React from 'react'
import { VideoSingle, pageData } from './../components'

export default pageData((props) => {
  return (
    <VideoSingle data={props.project}/>
  )
})
