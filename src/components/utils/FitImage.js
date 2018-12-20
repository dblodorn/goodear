import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { absoluteCentered, opacityTransition, absoluteTopFull } from './../../styles/mixins'
import { colors } from './../../styles/theme.json'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  handleImageLoaded() {
    this.setState({
      loaded: true
    })
  }

  render() {
    return (
      <Wrapper>
        <ImgWrapper alpha={(this.state.loaded) ? 1 : 0} onClick={this.props.clickFunction} className={(this.props.clickFunction) && 'hover'}>
          <ImgFit src={this.props.src} onLoad={this.handleImageLoaded.bind(this)}/>
        </ImgWrapper>
      </Wrapper>
    )
  }
}

// STYLE
const Wrapper = styled.div`
  ${absoluteTopFull};
`

const ImgWrapper = styled.div`
  ${absoluteTopFull};
  ${opacityTransition};
  opacity: ${props => props.alpha};
  overflow: hidden;
  &.hover {
    cursor: pointer;
    &:hover {
      img {
        opacity: .75;
      }
    }
  }
`

const ImgFit = styled.img`
  ${absoluteCentered};
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

