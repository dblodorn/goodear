import React from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'
import { absoluteTopFull, shadow } from './../../styles/mixins'
import { colors, spacing } from './../../styles/theme.json'

export default (props) => 
  <VideoContainer>
    <VideoWrapper>
      <Vimeo
        video={props.videoUrl}
        autoplay
        className={'player'}
        loop={true}
      />
    </VideoWrapper>
  </VideoContainer>

// STYLES
const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow-y: visible;
  position: relative;
`

const VideoWrapper = styled.div`
  ${absoluteTopFull};
  ${shadow};
  background-color: ${colors.dk_grey};
  .player,
  iframe {
    ${absoluteTopFull};
    z-index: 100;
  }
`
