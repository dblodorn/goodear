import React from 'react'
import { VideoSingle, Head, pageData } from './../components'

export default pageData((props) => {
  console.log(props.project)
  return (
    <React.Fragment>
      <Head title={props.project.title} description={`${props.project.song_title} | ${props.project.title} | ${props.project.taxonomies.brand[0]}`} />
      <VideoSingle data={props.project} />
    </React.Fragment>
  )
})
