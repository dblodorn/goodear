import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { widths } from './../styles/theme.json'
import { media } from './../styles/mixins'
import { Head, VideoGrid } from './../components'

class Reel extends Component {
  constructor(props) {
    super(props)
    this._selectCategory = this._selectCategory.bind(this)
  }

  _selectCategory(cat) {}
  
  render() {
    return (
      <Fragment>
        <Head title={'Reel'} description={'Our Work'}/>
        <ReelWrapper>
          <VideoGrid videos={this.props.videos} columns={'reel'}/>
        </ReelWrapper>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    videos: state.videos
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