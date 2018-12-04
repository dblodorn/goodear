import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { spacing, shared, colors, widths, breakpoints } from './../styles/theme.json'
import { StyledMarkup, H1 } from './../styles/components'
import { BottomLogo, Head, FitImage } from './../components'
import { PatternEleven } from './../patterns'
import { trimExcerpt } from './../scripts'
import { flexColumn, media } from './../styles/mixins'

const About = props => {
  const aboutData = props.api_data.options.about_us
  console.log(aboutData)
  return (
    <Fragment>
      <Head title={aboutData.header} description={trimExcerpt(aboutData.statement)}/>
      <AboutSection>
        <PhotoWrapper>
          <div className='inner'><FitImage src={aboutData.top_photo} /></div>
        </PhotoWrapper>
        <IntroWrapper>
          <H1>{aboutData.header}</H1>
          <StyledMarkup dangerouslySetInnerHTML={{ __html: aboutData.statement }}/>
        </IntroWrapper>
      </AboutSection>
      {props.resize_state.window_width >= breakpoints.desktop && <BottomLogo />}
      <PatternEleven />
    </Fragment>
  )
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
  padding: ${spacing.double_pad} ${spacing.double_pad} 8rem;
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
