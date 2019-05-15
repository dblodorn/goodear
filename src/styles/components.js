import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { heights, spacing, shared, colors, widths, fonts } from './theme.json'
import * as _ from './mixins'

// DOM NODES
const Section = styled.section`
  width: 100%;
  ${_.flexColumn};
`

const Article = styled.article`
  ${_.wrapperWidths};
  padding-left: ${spacing.double_pad};
  padding-right: ${spacing.double_pad};
`

const PadWrapper = styled.div`
  ${_.mainPadding};
  &.add-top-border {
    border-top: ${shared.border_thin};
  }
`

const GridWrapper = styled.ul`
  ${_.wrapperWidths};
  ${_.flexRowWrap};
  ${_.grid};
`

// TYPE
const H1 = styled.h1`
  ${_.bigType};
  padding-bottom: ${spacing.single_pad};
  color: ${colors.black};
`

const H2 = styled.h2`
  ${_.mediumType};
  color: ${colors.black};
`

const H3 = styled.h3`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.black};
`

const H4 = styled.h4`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.black};
`

const H5 = styled.h5`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.black};
`

const H6 = styled.h6`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
`

const P = styled.p`
  ${_.bodyType};
`

const SmallP = styled.p`
  ${_.smallType};
`

const StyledMarkup = styled.div`
  &.pad-top {
    padding-top: ${spacing.double_pad};
  }
  h1 {
    ${_.bigType};
    color: ${colors.orange}!important;
  }
  h2 {
    ${_.mediumType};
    color: ${colors.orange}!important;
  }
  h3 {
    ${_.bodyType};
    color: ${props => props.theme.body_copy_color}!important;
  }
  h4 {
    ${_.bodyType};
  }
  h5 {
    ${_.bodyType};
  }
  h6 {
    ${_.bodyType};
  }
  p {
    ${_.bodyType};
    margin-bottom: ${spacing.single_pad};
    max-width: ${widths.max_large};
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    ${_.defaultLink};
  }
`

const Manifesto = styled.div`
  background-color: ${colors.orange};
  padding: ${spacing.double_pad};
  background-image: url('/assets/patterns/bg-pattern-mobile.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  * {
    ${_.monoP};
    color: ${colors.white};
    line-height: 1.25;
  }
  ${_.media.desktopNav`
    padding: ${spacing.single_pad} 0;
    border-top: 1px solid ${colors.white};
    border-bottom: 1px solid ${colors.white};
    background: transparent;
    margin-bottom: ${spacing.single_pad};X
  `}
`

const PatternWrapper = styled.aside`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  display: block;
  img,
  svg,
  g {
    ${_.absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CaptionInner = styled.div`
  ${_.shadow};
  ${_.flexColumn};
  padding: ${spacing.micro_pad};
  background-color: ${colors.pink};
  * {
    color: ${colors.white}!important;
    font-family: ${fonts.sans_medium};
    line-height: 1.35;
    font-size: ${fonts.sizes.body_sm};
    ${_.media.medium`
      font-size: ${fonts.sizes.body};
    `}
  }
  ${_.media.medium`
    width: auto;
    min-width: 40rem;
    padding: ${spacing.single_pad};
  `}
`

// UI
const StyledLink = styled(Link)`
  ${_.defaultLink};
  
`

const ExternalLink = styled.a`
  ${_.defaultLink};
  ${_.mediumType};
  color: ${props => props.color}!important;
`

const NavItem = styled.li`
  padding-right: ${spacing.single_pad};
  &:last-child {
    padding-bottom: 0;
  }
  ${_.media.medium`
    padding-right: ${spacing.single_pad};
    padding-bottom: 0;
    &:last-child {
      padding-right: 0;
    }
  `}
  &.active {
    pointer-events: none!important;
    text-decoration: underline;
    * { color: ${colors.active_color}; }
  }
  &.sidebar {
    ${_.media.desktopNav`
      padding-bottom: ${spacing.single_pad};
      padding-right: 0;
      &.footer {
        padding-bottom: 0;
      }
    `}
  }
`

const SocialLink = styled.a`
  ${_.flexCenteredAll};
  width: 4rem;
  height: 4rem;
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

// WRAPPERS
const LogoWrapperFixedTopRight = styled.div`
  position: fixed;
  top: ${props => props.position_sm};
  right: ${props => props.position_sm};
  z-index: 9000;
  ${_.media.medium`
    top: ${props => props.position_med};
    right: ${props => props.position_med};
  `}
`

const FullPageBgWrapper = styled.aside`
  ${_.fixedTopLeft};
  width: 100%;
  height: 100vh;
  z-index: 0;
`

const ModalWrapper = styled.div`
  ${_.flexCenteredAll};
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  padding: 0 1rem;
  background-color: ${colors.lt_grey};
  ${_.media.desktopNav`
    padding: calc(${heights.header} / 2);
  `}
`

const ModalContentWrapper = styled.div`
  ${_.flexCenteredAll};
  max-height: ${props => props.maxHeight};
  width: 100%;
  height: 100%;
  max-width: 100rem;
  position: relative;
  z-index: 1000;
`

const CloseButton = styled.button`
  ${_.buttonInit};
  width: ${props => props.size};
  height: ${props => props.size};
  position: absolute;
  top: .75rem;
  right: .75rem;
  padding: 0;
  z-index: 11000;
  cursor: pointer;
  svg {
    ${_.absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const VideoGridWrapper = styled.ul`
  ${_.flexRowWrap};
  width: 100%;
  position: relative;
  padding: ${spacing.single_pad};
  flex-grow: 0;
  flex-shrink: 0;
  &.home > li {
    width: 50%;
    position: relative;
  }
  &.reel > li {
    width: calc(100% / 2);
  }
  ${_.media.desktopNav`
    &.reel > li {
      width: calc(100% / 5);
    }
    &.home > li {
      width: calc(100% / 3);
    }
  `}
  ${_.media.medium`
    &.reel > li {
      width: calc(100% / 7);
    }
    &.home > li {
      width: calc(100% / 4);
    }
  `}
  ${_.media.big`
    &.reel > li {
      width: calc(100% / 8);
    }
    &.home > li {
      width: calc(100% / 4);
    }
  `}
  ${_.media.tablet`
    &.home > li {
      width: calc(100% / 2);
    }
  `}
`

export {
  Section,
  Article,
  PadWrapper,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  SmallP,
  StyledMarkup,
  SocialLink,
  StyledLink,
  LogoWrapperFixedTopRight,
  FullPageBgWrapper,
  NavItem,
  GridWrapper,
  ModalWrapper,
  ModalContentWrapper,
  CloseButton,
  ExternalLink,
  PatternWrapper,
  Manifesto,
  CaptionInner,
  VideoGridWrapper
}