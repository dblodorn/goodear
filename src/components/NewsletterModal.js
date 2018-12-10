import React, { Component, Fragment } from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import { colors, spacing } from './../../styles/theme.json'
import { ModalWrapper, ModalContentWrapper, PatternWrapper } from './../../styles/components'
import { absoluteTopFull, flexCenteredAll, media, flexColumn } from './../../styles/mixins'
import { randomNum } from './../scripts'
import Modal from './Modal'
import Close from './../utils/Close'
import MailScrape from './MailScrape'
import BottomLogo from './../BottomLogo'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      pattern: 1
    }
    this._Popup = this._Popup.bind(this)
  }
  _Popup() {
    this.setState({
      modal: !this.state.modal
    })
  }
  componentWillMount() {
    this.setState({
      pattern: randomNum(1, 14)
    })
  }
  render() {
    return (
      <Fragment>
        <button onClick={() => this._Popup()}><span>Newsletter</span></button>
        <Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
          {this.state.modal && (styles => 
            <Modal>
              <ModalWrapper style={styles}>
                <ModalContentWrapper>
                  <Close clickFunction={() => this._Popup()} color={colors.white} />
                  <MailScrape/>
                </ModalContentWrapper>
                <BottomLogo/>
                <PatternWrapper>      
                  <img src={`assets/patterns/pattern${this.state.pattern}.svg`}/>
                </PatternWrapper>
              </ModalWrapper>
            </Modal>
          )}
        </Transition>
      </Fragment>
    )
  }
}
