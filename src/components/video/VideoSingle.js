import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Transition } from 'react-spring'
import { setHeaderState, setVideoPlaying } from './../../state/actions'
import { randomNum } from './../../scripts'
import BackClose from './../utils/BackClose'
import { PrevButton, NextButton } from './../utils/PrevNextButton'
import { breakpoints } from './../../styles/theme.json'
import { PatternWrapper } from './../../styles/components'
import Video from './Video'

class VideoSingle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slug: this.props.router.split('/')[2],
      next: false,
      prev: false,
      nav: false,
      pattern: 1
    }
  }
  
  componentWillMount() {
    this.props.setVideo(null)
    this.setState({pattern: randomNum(1, 14)})
    setTimeout(() => {
      this.props.setVideo(this.state.slug)
      if (this.props.page_count !== 0) {
        this.props.headerState(false)
        this.setState({
          next: this.props.videos[this.props.video.video_index.next_project].slug,
          prev: this.props.videos[this.props.video.video_index.prev_project].slug,
          nav: true
        })
      }
    }, 1)
  }

  componentWillUnmount() {
    this.props.setVideo(null)
    if (this.props.page_count !== 0) {
      this.props.headerState(true)
    }
  }

  render() {
    return (
      <Fragment>
        {(this.props.page_count !== 0) && <BackClose/>}
        {((this.props.resize_state.window_width >= breakpoints.desktop) && this.state.nav) &&
          <Fragment>
            <Link to={`/video/${this.state.next}`}><NextButton/></Link>
            <Link to={`/video/${this.state.prev}`}><PrevButton/></Link>
          </Fragment>
        }
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
          {this.props.video !== null && (styles => 
            <div style={styles}>
              <Video data={this.props.video.video_data}/>
            </div>
         )}
        </Transition>
        <PatternWrapper>
          <img src={`assets/patterns/pattern${this.state.pattern}.svg`} />
        </PatternWrapper>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    video: state.current_video,
    videos: state.videos,
    resize_state: state.resize_state,
    page_count: state.page_count,
    router: state.router.location.pathname
  }),
  dispatch => ({
    headerState: (bool) => dispatch(setHeaderState(bool)),
    setVideo: (bool) => dispatch(setVideoPlaying(bool))
  })
)(VideoSingle)
