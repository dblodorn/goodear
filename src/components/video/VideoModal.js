import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { colors, spacing } from './../../styles/theme.json'
import { ModalWrapper, ModalContentWrapper, Section, PatternWrapper } from './../../styles/components'
import { absoluteTopFull, flexCenteredAll, media, flexColumn } from './../../styles/mixins'
import Modal from './Modal'
import Video from './Video'
import VideoCaption from './VideoCaption'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'
import BottomLogo from './../BottomLogo'
import PlayButton from './../utils/PlayButton'

const randomNum = (min, max) =>
  Math.floor(Math.random() * (+max - +min)) + +min

class VideoModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      pattern: 1
    }
    this._Popup = this._Popup.bind(this)
  }
  _Popup() {
    this.setState({
      modal: !this.state.modal
    })
  }
  componentWillMount() {
    this.setState({
      pattern: randomNum(1, 14)
    })
  }
  render() {
    return (
      <Fragment>
        <VideoPopper>
          <PlayButton color={colors.white} clickFunction={() => this._Popup()}/>
          <FitImage src={this.props.thumbnail} fit={'cover'}/>
        </VideoPopper>
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
          {this.state.modal && (styles => 
            <Modal>
              <ModalWrapper style={styles}>
                <ModalContentWrapper>
                  <VideoSection>
                    <Close clickFunction={() => this._Popup()} color={colors.white} />
                    <VideoWrapper>
                      <Video videoUrl={this.props.video_url} />
                      <VideoCaption content={this.props.data}/>
                    </VideoWrapper>
                  </VideoSection>
                </ModalContentWrapper>
                <BottomLogo/>
                <PatternWrapper>      
                  <img src={`assets/patterns/pattern${this.state.pattern}.svg`}/>
                </PatternWrapper>
              </ModalWrapper>
            </Modal>
          )}
        </Transition>
      </Fragment>
    )
  }
}

VideoModal.propTypes = {
  thumbnail: propTypes.string,
  short_description: propTypes.string,
  theme: propTypes.string,
  video_url: propTypes.string
}

export default VideoModal

const VideoPopper = styled.div`
  ${absoluteTopFull};
  filter: grayscale(1);
  overflow: hidden;
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
  padding: ${spacing.double_pad} 0 6rem;
  margin-bottom: 4rem;
  ${media.desktopNav`
    width: 75vw;
    max-width: 90rem;
    padding: 0;
  `}
`