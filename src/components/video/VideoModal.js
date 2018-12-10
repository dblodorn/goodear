import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { colors } from './../../styles/theme.json'
import { ModalWrapper } from './../../styles/components'
import { absoluteTopFull } from './../../styles/mixins'
import { randomNum } from './../../scripts'
import Modal from './../Modal'
import Video from './Video'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'
import PlayButton from './../utils/PlayButton'

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
                <Video data={this.props.data}>
                  <Close clickFunction={() => this._Popup()}/>
                </Video>
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
  video_url: propTypes.string
}

export default VideoModal

const VideoPopper = styled.div`
  ${absoluteTopFull};
  overflow: hidden;
`