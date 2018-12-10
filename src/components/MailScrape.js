import React from 'react'
import styled from 'styled-components'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import config from './../config.json'
import { CaptionInner } from './../styles/components'
import { buttonInit, media } from './../styles/mixins'
import { fonts, colors, spacing } from './../styles/theme.json'

const cta = `${config.mail_scrape.cta}`
const url = config.mail_scrape.mailchimp_url

const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });
  return (
    <div className={className} style={style}>
      {status === "sending" && <div className="message">sending...</div>}
      {status === "error" && (
        <div className="message" dangerouslySetInnerHTML={{ __html: message }}/>
      )}
      {status === "success" && (
        <div className="message" dangerouslySetInnerHTML={{ __html: message }}/>
      )}
      <div className="input-wrapper">
        <input ref={node => (input = node)} type="email" placeholder="Email"/>
        <button onClick={submit}><span></span>Subscribe</button>
      </div>
    </div>
  );
};

export default () =>
  <MailingContainer>
    <MailchimpSubscribe 
      url={url}
      render={({ subscribe, status, message }) => (
        <SimpleForm
          status={status}
          message={message}
          onSubmitted={formData => subscribe(formData)}
          className={'form-wrapper'}
        />
      )}
    />
  </MailingContainer>

// STYLES
const MailingContainer = styled(CaptionInner)`
  max-width: 55rem;
  width: 100%;
  padding: ${spacing.double_pad};
  transition: background-color 350ms ease;
  margin-bottom: 8rem;
  ${media.desktopNav`
    margin-bottom: 0;
  `}
  * {
    color: ${colors.white};
    font-size: ${fonts.sizes.body};
    line-height: 1;
    letter-spacing: 2px;
    ${media.desktopNav`
      font-size: ${fonts.sizes.medium};
    `}
  }
  .form-wrapper {
    width: 100%;
    position: relative;
  }
  .message {
    width: 100%;
    padding-bottom: ${spacing.double_pad};
  }
  .input-wrapper {
    width: 100%;
    flex-direction: row;
    display: flex;
    transition: border-bottom 350ms ease;
    border-bottom: 2px solid ${colors.white};
  }
  &:hover {
    background-color: ${colors.blue};
    .input-wrapper {
      border-bottom: 2px solid ${colors.orange};
    }
  }
  input[type=email] {
    ${buttonInit};
    font-family: ${fonts.sans_medium};
    width: 100%;
    border: 0;
    border-radius: 0;
    margin: 0;
    color: ${colors.white}!important;
    -webkit-text-fill-color: ${colors.white}!important;
    &:focus {
      outline: none!important;
      box-shadow: 0;
    }
    &::-webkit-input-placeholder {
      font-family: ${fonts.sans_medium};
    }
  }
  button {
    ${buttonInit};
    margin: 0;
    padding: 0;
    color: ${colors.white}!important;
    flex-shrink: 0;
  }
`
