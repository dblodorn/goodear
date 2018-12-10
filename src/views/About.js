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
                {(this.props.resize_state.window_width < breakpoints.desktop) &&
                  <PhotoMobile className={'mobile-photo'}>
                    <Sizer><FitImage src={item.photo} /></Sizer>
                  </PhotoMobile>
                }
                <StyledMarkup dangerouslySetInnerHTML={{ __html: item.bio }} />
              </IntroWrapper>
            </CopySide>
          )}
          {(this.props.resize_state.window_width >= breakpoints.desktop) &&
            <PhotoSide>
              <PhotoWrapper>
                {this.props.api_data.options.about_us.team.photos.map((item) =>
                  <AboutPhoto key={`${item.slug}-photo`}>
                    <Sizer>
                      <AboutButton onMouseEnter={() => this._changeBio(item.slug)} onMouseOut={() => this._changeBio(false)}>
                        <FitImage src={item.photo} />
                      </AboutButton>
                    </Sizer>
                  </AboutPhoto>
                )}
              </PhotoWrapper>
            </PhotoSide>
          }
        </AboutSection>
        {(this.props.resize_state.window_width >= breakpoints.desktop) && <BottomLogo />}
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

const AboutSection = styled.section`
  ${flexColumn};
  width: 100%;
  max-width: 150rem;
  margin: 0 auto;
  padding: ${spacing.double_pad};
  h1 {
    color: ${colors.orange};
    text-align: center;
    ${media.desktopNav`
      text-align: left;
    `}
  }
  ${media.desktopNav`
    height: 100vh;
    padding-top: ${spacing.double_pad};
    padding-left: calc( ${widths.sidebar_nav} + ${spacing.double_pad});
    padding-right: ${spacing.double_pad};
  `}
`

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
`

const Sizer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  overflow-y: visible;
  height: 0;
  position: relative;
`

const PhotoMobile = styled.div`
  width: 100%;
  position: relative;
  max-width: 28rem;
  background-color: ${colors.white};
  padding: ${spacing.single_pad};
  margin: 0 auto ${spacing.double_pad};
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

const wrapperShared = css`
  display: flex;
  position: relative;
  ${media.desktopNav`
    width: 50%;
    height: 100vh;
    top: 0;
    position: fixed;
  `}
`

const CopySide = styled.div`
  ${wrapperShared};
  ${media.desktopNav`
    ${opacityTransition};
    width: 50vw;
    align-items: center;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    &.active {
      opacity: 1;
      pointer-events: default;
    }
  `}
  &:nth-child(1n) {
    .mobile-photo {transform: rotate(-.75deg);}
  }
  &:nth-child(2n) {
    .mobile-photo {transform: rotate(1.25deg);}
  }
  &:nth-child(3n) {
    .mobile-photo {transform: rotate(-1.25deg);}
  }
  &:nth-child(4n) {
    .mobile-photo {transform: rotate(.5deg);}
  }
`

const IntroWrapper = styled.div`
  ${flexColumn};
  ${shadow};
  max-width: ${shared.article_width};
  padding: ${spacing.double_pad};
  background-color: ${colors.lt_grey};
  margin-bottom: ${spacing.double_pad};
  ${media.desktopNav`
    width: 50vw;
    margin-bottom: 0;
  `}
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
