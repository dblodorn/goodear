import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Socials from './social/Socials'
import ScrollToTop from './ScrollToTop'
import NewsLetterModal from './NewsletterModal'
import { flexColumnCentered, buttonInit, shadow } from './../styles/mixins'
import { spacing, colors, fonts, api_colors } from './../styles/theme.json'

const Footer = props =>
  <FooterWrapper bgColor={props.api_data.options.api_colors.home_sidebar_bg_color}>
    <a href={`mailto:contact@goodear.tv`} target='_blank'><span>CONTACT@GOODEAR.TV</span></a>
    <NewsLetterModal/>
    <Socials/>
    <ScrollToTop/>
  </FooterWrapper>

export default connect(
  state => ({
    api_data: state.api_data
  })
)(Footer)

// STYLES
const FooterWrapper = styled.footer`
  ${flexColumnCentered};
  ${shadow};
  width: 100%;
  padding: 4rem ${spacing.double_pad} calc(8rem - ${spacing.double_pad});
  background-color: ${props => props.bgColor || api_colors.home_sidebar_bg_color};
  a {
    text-decoration: none;
    margin-bottom: ${spacing.double_pad};
  }
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