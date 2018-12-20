import React from 'react'
import styled from 'styled-components'
import Socials from './social/Socials'
import ScrollToTop from './ScrollToTop'
import NewsLetterModal from './NewsletterModal'
import { flexColumnCentered, buttonInit, shadow } from './../styles/mixins'
import { spacing, colors, fonts } from './../styles/theme.json'

export default () =>
  <FooterWrapper>
    <a href={`mailto:contact@goodear.tv`} target='_blank'><span>CONTACT@GOODEAR.TV</span></a>
    <NewsLetterModal/>
    <Socials/>
    <ScrollToTop/>
  </FooterWrapper>

// STYLES
const FooterWrapper = styled.footer`
  ${flexColumnCentered};
  ${shadow};
  width: 100%;
  padding: 4rem ${spacing.double_pad} calc(8rem - ${spacing.double_pad});
  background-color: #ff7340;
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