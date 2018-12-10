import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { spacing, shared, colors, widths, breakpoints } from './../styles/theme.json'
import { StyledMarkup, H1 } from './../styles/components'
import { BottomLogo, Head, FitImage } from './../components'
import { PatternAbout } from './../patterns'
import { trimExcerpt } from './../scripts'
import { flexColumn, media } from './../styles/mixins'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      about_data: this.props.api_data.options.about_us,
      current_bio: false,
    }
    this._changeBio = this._changeBio.bind(this)
  }

  _changeBio(slug) {
    this.setState({
      current_bio: slug
    })
  }

  render() {
    return (
      <Fragment>
        <Head title={this.state.about_data.header} description={trimExcerpt(this.state.about_data.statement)}/>
        <AboutSection>
          <PhotoWrapper>
            <div className='inner'><FitImage src={this.state.about_data.top_photo} /></div>
          </PhotoWrapper>
          <IntroWrapper>
            <H1>{this.state.about_data.header}</H1>
            <StyledMarkup dangerouslySetInnerHTML={{ __html: this.state.about_data.statement }}/>
          </IntroWrapper>
        </AboutSection>
        {this.props.resize_state.window_width >= breakpoints.desktop && <BottomLogo />}
        <PatternAbout/>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    api_data: state.api_data,
    resize_state: state.resize_state
  })
)(About)

// STYLES
const AboutSection = styled.section`
  ${flexColumn};
  width: 100%;
  max-width: 150rem;
  margin: 0 auto;
  padding: ${spacing.double_pad};
  h1 {
    color: ${colors.orange};
  }
  ${media.desktopNav`
    padding-top: ${spacing.double_pad};
    padding-left: calc( ${widths.sidebar_nav} + ${spacing.double_pad});
    padding-right: ${spacing.double_pad};
  `}
`

const PhotoWrapper = styled.div`
  max-width: ${shared.article_width};
  position: relative;
  width: 100%;
  margin-bottom: ${spacing.single_pad};
  ${media.desktopNav`
    align-self: flex-end;  
    width: 50vw;
  `}
  .inner {
    width: 100%;
    height: 0;
    overflow-y: visible;
    overflow-x: hidden;
    position: relative;
    padding-bottom: 62.25%;
  }
`

const IntroWrapper = styled.div`
  ${flexColumn};
  max-width: ${shared.article_width};
  padding: ${spacing.double_pad};
  background-color: ${colors.lt_grey};
  width: 100%;
  ${media.desktopNav`
    align-self: flex-start;  
    width: 50vw;
    transform: translateY(-50%);
  `}
`
