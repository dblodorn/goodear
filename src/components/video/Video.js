import React, { Component, Fragment } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'
import { Section, PatternWrapper, ModalContentWrapper } from './../../styles/components'
import { absoluteTopFull, shadow, flexCenteredAll, media, flexColumn } from './../../styles/mixins'
import { colors, spacing } from './../../styles/theme.json'
import { randomNum } from './../../scripts'
import BottomLogo from './../BottomLogo'
import VideoCaption from './VideoCaption'

const VideoInner = (props) =>
  <VideoContainer>
    <InnerVideoWrapper>
      <Vimeo
        video={props.videoUrl}
        autoplay
        className={'player'}
        loop={true}
      />
    </InnerVideoWrapper>
  </VideoContainer>

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pattern: 1
    }
  }
  componentWillMount() {
    console.log(this.props.data)
    this.setState({
      pattern: randomNum(1, 14)
    })
  }
  render() {
    return (
      <Fragment>
        <ModalContentWrapper>
          <VideoSection>
            {this.props.children}
            <VideoWrapper>
              {(this.props.data !== null) &&
                <Fragment>
                  <VideoInner videoUrl={this.props.data.video_url} />
                  <VideoCaption content={this.props.data} />
                </Fragment>
              }
            </VideoWrapper>
          </VideoSection>
        </ModalContentWrapper>
        <BottomLogo />
        <PatternWrapper>
          <img src={`assets/patterns/pattern${this.state.pattern}.svg`} />
        </PatternWrapper>
      </Fragment>
    )
  }
}

export default Video

// STYLES
const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow-y: visible;
  position: relative;
`

const InnerVideoWrapper = styled.div`
  ${absoluteTopFull};
  ${shadow};
  background-color: ${colors.dk_grey};
  .player,
  iframe {
    ${absoluteTopFull};
    z-index: 100;
  }
`

const VideoSection = styled(Section)`
  ${flexCenteredAll};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const VideoWrapper = styled.div`
  ${flexColumn};
  width: 100%;
  padding: ${spacing.double_pad} 1rem 8rem;
  margin-bottom: 4rem;
  ${media.desktopNav`
    width: 75vw;
    max-width: 90rem;
    padding: 0;
    padding: ${spacing.double_pad} 0;
    margin-bottom: 0;
  `}
  ${media.big`
    width: 75vw;
    max-width: 90rem;
    padding: 0;
    padding: ${spacing.double_pad} 0 6rem;
    margin-bottom: 0;
  `}
`
