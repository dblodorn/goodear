import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import { spacing, shared, colors, widths, breakpoints } from './../styles/theme.json'
import { StyledMarkup, H1 } from './../styles/components'
import { BottomLogo, Head, FitImage } from './../components'
import { PatternAbout } from './../patterns'
import { trimExcerpt } from './../scripts'
import { flexColumn, media, shadow, buttonInit, flexRowWrap, opacityTransition } from './../styles/mixins'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        <Head title={this.props.api_data.options.about_us.header} description={trimExcerpt(this.props.api_data.options.about_us.statement)}/>
        <AboutSection>
          <CopySide className={!this.state.current_bio && 'active'}>
            <IntroWrapper>
              <H1>{this.props.api_data.options.about_us.header}</H1>
              <StyledMarkup dangerouslySetInnerHTML={{ __html: this.props.api_data.options.about_us.statement }} />
            </IntroWrapper>
          </CopySide>
          {this.props.api_data.options.about_us.team.bios.map((item) =>
            <CopySide className={(item.slug === this.state.current_bio) && 'active'} key={`${item.slug}-bio`}>
              <IntroWrapper>
                <H1>{item.name}</H1>
                <StyledMarkup dangerouslySetInnerHTML={{ __html: item.bio }} />
              </IntroWrapper>
            </CopySide>
          )}
          <PhotoSide>
            <PhotoWrapper>
              {this.props.api_data.options.about_us.team.photos.map((item) =>
                <AboutPhoto key={`${item.slug}-photo`}>
                  <div className={'sizer'}>
                    <AboutButton onMouseEnter={() => this._changeBio(item.slug)} onMouseOut={() => this._changeBio(false)}>
                      <FitImage src={item.photo} />
                    </AboutButton>
                  </div>
                </AboutPhoto>
              )}
            </PhotoWrapper>
          </PhotoSide>
        </AboutSection>
        <BottomLogo/>
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
const pic_margin = 10

const AboutPhoto = styled.div`
  width: calc(50% - ${pic_margin * 2}px);
  padding: ${spacing.micro_pad};
  background-color: ${colors.white};
  margin: ${pic_margin}px;
  &:nth-child(1n) {
    transform: rotate(-2deg);
  }
  &:nth-child(2n) {
    transform: rotate(3deg);
    &:before {
      transform: rotate(30deg);
    }
  }
  &:nth-child(3n) {
    transform: rotate(-1deg);
    &:before {
      transform: rotate(90deg);
    }
  }
  &:nth-child(4n) {
    transform: rotate(4deg);
    &:before {
      transform: rotate(120deg);
    }
  }
  ${shadow};
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background-image: url('/assets/circle.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
    opacity: 0;
  }
  &:hover {
    &:before {
      opacity: 1;
    }
  }
  .sizer {
    width: 100%;
    padding-bottom: 100%;
    overflow-y: visible;
    height: 0;
    position: relative;
  }
`

const AboutButton = styled.button`
  ${buttonInit};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${spacing.micro_pad};
  cursor: help;
`

const AboutSection = styled.section`
  ${flexColumn};
  width: 100%;
  max-width: 150rem;
  margin: 0 auto;
  height: 100vh;
  h1 {
    color: ${colors.orange};
  }
  ${media.desktopNav`
    padding-top: ${spacing.double_pad};
    padding-left: calc( ${widths.sidebar_nav} + ${spacing.double_pad});
    padding-right: ${spacing.double_pad};
  `}
`

const wrapperShared = css`
  display: flex;
  width: 50%;
  height: 100vh;
  top: 0;
  position: fixed;
`

const CopySide = styled.div`
  ${wrapperShared};
  align-items: center;
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  ${opacityTransition};
  &.active {
    opacity: 1;
    pointer-events: default;
  }
`

const IntroWrapper = styled.div`
  ${flexColumn};
  ${shadow};
  max-width: ${shared.article_width};
  padding: ${spacing.double_pad};
  background-color: ${colors.lt_grey};
  width: 50vw;
`

const PhotoSide = styled.div`
  ${wrapperShared};
  justify-content: center;
  align-items: flex-start;
  right: 0;
  padding: ${spacing.double_pad};
  z-index: 90;
`

const PhotoWrapper = styled.div`
  ${flexRowWrap};
  width: 75%;
  max-width: 60rem;
  position: relative;
`
