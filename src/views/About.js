import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { spacing, shared, colors, widths } from './../styles/theme.json'
import { Section, StyledMarkup, H1 } from './../styles/components'
import { BottomLogo, Head, FitImage } from './../components'
import { PatternEleven } from './../patterns'
import { trimExcerpt } from './../scripts'
import { flexColumn } from './../styles/mixins.js'

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
      <BottomLogo />
      <PatternEleven />
    </Fragment>
  )
}

export default connect(
  state => ({
    api_data: state.api_data
  })
)(About)

// STYLES
const AboutSection = styled(Section)`
  max-width: 150rem;
  margin: 0 auto;
  padding-top: ${spacing.double_pad};
  padding-left: calc( ${widths.sidebar_nav} + ${spacing.double_pad});
  padding-right: ${spacing.double_pad};
  h1 {
    color: ${colors.orange};
  }
`

const PhotoWrapper = styled.div`
  width: 50vw;
  max-width: ${shared.article_width};
  position: relative;
  align-self: flex-end;
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
  width: 50vw;
  max-width: ${shared.article_width};
  transform: translateY(-50%);
  padding: ${spacing.double_pad};
  background-color: ${colors.lt_grey};
  align-self: flex-start;
`
