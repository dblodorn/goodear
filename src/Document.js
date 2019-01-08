import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { flexColumn, fancyScroll, media } from './styles/mixins'
import { fonts, breakpoints } from './styles/theme.json'
import { routeName } from './scripts'
import { Footer, Header } from './components'
import { LoadingPage } from './views'

const Document = props => {
  if (props.api_data) {
    return (
      <Fragment>
        <GlobalStyles />
        <Header/>
        <Main id={routeName(props.router).routeClass}>
          {props.children}
        </Main>
        {(props.resize_state.window_width < breakpoints.desktop) && <Footer />}
      </Fragment>
    )
  } else {
    return <LoadingPage/>
  }
}

export default connect(
  state => ({
    api_data: state.api_data,
    router: state.router.location.pathname,
    resize_state: state.resize_state
  })
)(Document)

// MAIN STYLING
const Main = styled.main`
  ${flexColumn};
  width: 100vw;
  position: relative;
  min-height: 100vh;
`

// NORMALIZE CSS
const GlobalStyles = createGlobalStyle`
  html {
    font-size: 58%;
    ${fancyScroll};
  }
  @media screen and (min-width: 960px) {
    html {
      font-size: 62.5%;
    }
  }
  @media screen and (min-width: 1550px) {
    html {
      font-size: 66.5%;
    }
  }
  @media screen and (min-width: 1750px) {
    html {
      font-size: 68.5%;
    }
  }
  body {
    font-family: arial;
    font-weight: 300;
    font-style: normal;
    text-decoration: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  ::-webkit-input-placeholder,
  ::-moz-placeholder {
    color: white;
    font-size: ${fonts.sizes.body};
    ${media.desktopNav`
      font-size: ${fonts.sizes.medium};
    `}
    ${fonts.sans};
  }
`
