import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { widths } from './../styles/theme.json'
import { media } from './../styles/mixins'
import { Head, VideoGrid } from './../components'

class Reel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: this.props.api_data.posts.video
    }
    this._selectCategory = this._selectCategory.bind(this)
  }

  _selectCategory(slug) {
    this.setState({
      videos: this.props.api_data.posts.video
    })
  }
  
  render() {
    return (
      <Fragment>
        <Head title={'Reel'} description={'Our Work'}/>
        <ReelWrapper>
          <VideoGrid videos={this.state.videos} columns={'reel'}/>
        </ReelWrapper>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    api_data: state.api_data
  })
)(Reel)

// STYLES
const ReelWrapper = styled.section`
  width: 100%;
  position: relative;
  ${media.desktopNav`
    padding-left: ${widths.sidebar_nav};
  `}
`