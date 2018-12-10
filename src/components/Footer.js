import React from 'react'
import { connect } from 'react-redux'
import Socials from './social/Socials'
import ScrollToTop from './ScrollToTop'
import NewsLetterModal from './NewsletterModal'
import { flexColumnCentered } from './../styles/mixins'
import { spacing, colors } from './../styles/theme.json'

const Footer = (props) => {
  return (
    <FooterWrapper>
      <a href={`mailto:contact@goodear.tv`} target='_blank'><span>CONTACT@GOODEAR.TV</span></a>
      <NewsLetterModal/>
      <Socials/>
      <ScrollToTop/>
    </FooterWrapper>
  )
}

export default connect(
  state => ({
    api_data: state.api_data
  })
)(Footer)

// STYLES
const FooterWrapper = styled.footer`
  ${flexColumnCentered};
  width: 100%;
  padding: ${spacing.double_pad};
  background-color: ${colors.orange};
  span {
    ${buttonInit};
    font-family: ${fonts.sans_medium};
    font-weight: 500;
    color: ${colors.white};
    font-size: ${fonts.sizes.small};
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
  }
`