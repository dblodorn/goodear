import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { colors, breakpoints } from './../../styles/theme.json'
import { ModalWrapper } from './../../styles/components'
import { absoluteTopFull } from './../../styles/mixins'
import { randomNum } from './../../scripts'
import { setVideoPlaying } from './../../state/actions'
import Modal from './../Modal'
import Video from './Video'
import FitImage from './../utils/FitImage'
import Close from './../utils/Close'
import PlayButton from './../utils/PlayButton'
import { PrevButton, NextButton } from './../utils/PrevNextButton'

class VideoModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      pattern: 1
    }
    this._openPopup = this._openPopup.bind(this)
    this._closePopup = this._closePopup.bind(this)
    this._nextVid = this._nextVid.bind(this)
    this._prevVid = this._prevVid.bind(this)
    this._prevNextHandler = this._prevNextHandler.bind(this)
  }
  
  _openPopup(slug) {
    this.props.set_video(slug)
    this.setState({
      modal: true
    })
  }
  
  _closePopup() {
    this.props.set_video(null)
    this.setState({
      modal: false
    })
  }

  _prevNextHandler(slug) {
    this.props.set_video(null)
    const next_slug = this.props.videos[slug].slug
    setTimeout(() => {
      this.props.set_video(next_slug)
    }, 1)
  }

  _nextVid() {
    this._prevNextHandler(this.props.video.video_index.next_project)
  }
  
  _prevVid() {
    this._prevNextHandler(this.props.video.video_index.prev_project)
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
          <PlayButton color={colors.white} clickFunction={() => this._openPopup(this.props.data.slug)}/>
          <FitImage src={this.props.thumbnail} fit={'cover'}/>
        </VideoPopper>
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
          {this.state.modal && (styles => 
            <Modal>
              <ModalWrapper style={styles}>
                <Close clickFunction={() => this._closePopup()}/>
                <Video data={this.props.video.video_data}/>
                {((this.props.router !== '/') && (this.props.resize_state.window_width >= breakpoints.desktop)) &&
                  <Fragment>
                    <NextButton clickFunction={() => this._nextVid()}/>
                    <PrevButton clickFunction={() => this._prevVid()}/>
                  </Fragment>
                }
              </ModalWrapper>
            </Modal>
          )}
        </Transition>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    resize_state: state.resize_state,
    video: state.current_video,
    videos: state.videos,
    router: state.router.location.pathname
  }),
  dispatch => ({
    set_video: (bool) => dispatch(setVideoPlaying(bool))
  })
)(VideoModal)

const VideoPopper = styled.div`
  ${absoluteTopFull};
  overflow: hidden;
`