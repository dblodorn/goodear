import React, { Fragment, Component } from 'react'
import Color from 'color'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { setVideoPlaying } from './../state/actions'
import { widths, colors, spacing } from './../styles/theme.json'
import { media, absoluteTopFull, sidebarNav, flexRowWrap } from './../styles/mixins'
import { VideoGridWrapper } from './../styles/components'
import { Head, VideoCard, FitImage, PlayButton } from './../components'
import { trimExcerpt } from './../scripts'
import { PatternHome } from './../patterns'
import includes from 'lodash/includes'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  includes: includes
})

class Reel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_term: 'Everything',
    }
    this._selectTerm = this._selectTerm.bind(this)
    this._includesTerm = this._includesTerm.bind(this)
  }

  componentWillMount() {
    this.props.setVideo(null)
  }

  _selectTerm(term) {
    this.setState({
      current_term: term
    })
  }
  
  _includesTerm(term) {
    return _.includes(term, this.state.current_term);
  }

  render() {
    const ThumbLink = props =>
      <Fragment>
        {(this._includesTerm(props.item.taxonomies.category)) &&
          <VideoCard item={props.item} key={props.item.post_id + 'vcl'}>
            <VideoLink to={`/video/${props.item.slug}`}>
              <PlayButton color={colors.white}/>
              <FitImage src={props.item.thumbnail_arr} srcset={true}/>
            </VideoLink>
          </VideoCard>
        }
      </Fragment>

    return (
      <Fragment>
        <Head title={'Reel'} description={trimExcerpt(this.props.api_data.options.seo.reel_meta)}/>
        <VideoCats>
          {this.props.categories.map((item, i) =>
            <button className={(item === this.state.current_term) ? `active` : ``} onClick={() => this._selectTerm(item)} key={'cat' + i}><span>{item}</span></button>
          )}
        </VideoCats>
        <ReelWrapper>
          <VideoGridWrapper className={`reel`}>
            {this.props.videos.map((item, i) =>
              <ThumbLink item={item} key={item.post_id + 'vg' + i} />
            )}
          </VideoGridWrapper>
        </ReelWrapper>
        <PatternHome/>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    api_data: state.api_data,
    videos: state.videos,
    categories: state.categories,
    current_category: state.current_category
  }),
  dispatch => ({
    setVideo: (bool) => dispatch(setVideoPlaying(bool))
  })
)(Reel)

const ReelWrapper = styled.section`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  ${media.desktopNav`
    padding-left: ${widths.sidebar_nav};
  `}
`

const VideoCats = styled.menu`
  ${flexRowWrap};
  position: relative;
  z-index: 100;
  width: 100vw;
  background-color: ${Color(colors.bg).darken(.1).hsl().string()};
  ${media.desktopNav`
    position: sticky;
    top: 0;
    left: 0;  
    padding: 0 ${spacing.double_pad};
    justify-content: flex-end;
    height: ${widths.sidebar_nav};
    &:before {
      content: '';
      display: block;
      width: 100vw;
      left: 0;
      top: 0;
      height: 10rem;
      background-color: ${Color(colors.bg).darken(.1).hsl().string()};
      position: absolute;
      transform: translateY(-10rem);
    }
  `}
  ${sidebarNav};
  button {
    position: relative;
    width: 50%;
    margin-right: 0!important;
    padding: ${spacing.single_pad};
    &:nth-child(odd) {
      border-right: 1px solid ${Color(colors.bg).darken(.2).hsl().string()};
    }
    &:nth-child(1) {
      border-bottom: 1px solid ${Color(colors.bg).darken(.2).hsl().string()};
    }
    &:nth-child(2) {
      border-bottom: 1px solid ${Color(colors.bg).darken(.2).hsl().string()};
    }
    ${media.desktopNav`
      width: auto;
      margin-right: ${spacing.double_pad};
      border: 0!important;
    `}
  }
`

const VideoLink = styled(Link)`
  ${absoluteTopFull};
  overflow: hidden;
`
