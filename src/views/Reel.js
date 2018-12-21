import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { widths, colors } from './../styles/theme.json'
import { media, absoluteTopFull } from './../styles/mixins'
import { VideoGridWrapper } from './../styles/components'
import { Head, VideoCard, FitImage, PlayButton } from './../components'
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

  _selectTerm(term) {}
  
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
        <Head title={'Reel'} description={'Our Work'}/>
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
    videos: state.videos,
    categories: state.categories,
    current_category: state.current_category
  })
)(Reel)

// STYLES
const VideoLink = styled(Link)`
  ${absoluteTopFull};
  overflow: hidden;
`

const ReelWrapper = styled.section`
  width: 100%;
  position: relative;
  ${media.desktopNav`
    padding-left: ${widths.sidebar_nav};
  `}
`