import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import FacebookLogo from './FacebookLogo'
import InstaLogo from './InstaLogo'
import SpotifyLogo from './SpotifyLogo'
import { flexRow } from './../../styles/mixins'

const Socials = (props) => {
  if (props.api_data) {
    return (
      <SocialWrapper>
        <li><FacebookLogo link={props.api_data.options.facebook}/></li>
        <li><InstaLogo link={props.api_data.options.instagram}/></li>
        <li><SpotifyLogo link={props.api_data.options.twitter}/></li>
      </SocialWrapper>
    )
  }
}

export default connect(
  state => ({
    api_data: state.api_data
  })
)(Socials)

const SocialWrapper = styled.ul`
  ${flexRow};
  justify-content: space-between;
  width: 100%;
`