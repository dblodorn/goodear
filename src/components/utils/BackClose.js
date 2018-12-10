import React, { Component } from 'react'
import propTypes from 'prop-types'
import { CloseButton } from './../../styles/components'
import { colors } from './../../styles/theme.json'

class BackClose extends Component {
  static contextTypes = {
    router: () => true,
  }
  render() {
    return (
      <CloseButton onClick={this.context.router.history.goBack} size={this.props.size || '6rem'}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" width="100%" height="100%">
          <g fill={this.props.color || colors.white}>
            <line fill="none" stroke={this.props.color || colors.white} strokeWidth={'2'} strokeLinecap="square" strokeMiterlimit="10" x1="54" y1="10" x2="10" y2="54" strokeLinejoin="miter"></line>
            <line fill="none" stroke={this.props.color || colors.white} strokeWidth={'2'} strokeLinecap="square" strokeMiterlimit="10" x1="54" y1="54" x2="10" y2="10" strokeLinejoin="miter"></line>
          </g>
        </svg>
      </CloseButton>
    )
  }
}

BackClose.propTypes = {
  color: propTypes.string,
  stroke: propTypes.number
}

export default BackClose
