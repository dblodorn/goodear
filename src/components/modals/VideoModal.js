import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { colors, spacing } from './../../styles/theme.json'
import { ModalWrapper, ModalContentWrapper, Section } from './../../styles/components'
import { absoluteTopFull, flexCenteredAll, media } from './../../styles/mixins'
import Modal from './Modal'
import Video from './../video/Video'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'
import PlayButton from './../utils/PlayButton'
import VideoCaption from './../video/VideoCaption'

class VideoModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this._Popup = this._Popup.bind(this)
  }
  _Popup() {
    this.setState({
      modal: !this.state.modal
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
                    <Close clickFunction={() => this._Popup()} color={colors.black} />
                    <VideoWrapper>
                      <Video coverUrl={this.props.thumbnail} videoUrl={this.props.video_url} autoplay={true} single={true} />
                      <VideoCaption content={this.props.short_description}/>
                    </VideoWrapper>
                  </VideoSection>
                </ModalContentWrapper>
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
`

const VideoSection = styled(Section)`
  ${flexCenteredAll};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.white};
`

const VideoWrapper = styled.div`
  width: 100%;
  padding: ${spacing.double_pad} ${spacing.double_pad} 10rem;
  ${media.desktopNav`
    width: 75vw;
    padding: 0;
  `}
`