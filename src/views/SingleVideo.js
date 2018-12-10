import React from 'react'
import styled from 'styled-components'
import { Video, pageData } from './../components'
import { Section } from './../styles/components'
import { flexCenteredAll } from './../styles/mixins'
import { colors } from './../styles/theme.json'

export default pageData((props) => {
  return (
    <VideoSection>
      <VideoWrapper>
        <Video data={props.project}/>
      </VideoWrapper>
    </VideoSection>
  )
})

const VideoSection = styled(Section)`
  ${flexCenteredAll};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.black};
`

const VideoWrapper = styled.div`
  width: 75vw;
`
