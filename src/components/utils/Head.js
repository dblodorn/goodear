import React from 'react'
import { Helmet } from 'react-helmet'
import config from './../../config.json'

export default(props) =>
  <Helmet key={window.location.href}>
    <meta charSet="utf-8" />
    <title>{`${config.meta_defaults.title} | ${props.title}`}</title>
    <meta name="description" content={props.description} />
    <meta itemprop='name' content={`${config.meta_defaults.title} | ${props.title}`} />
    <meta itemprop='description' content={props.description} />
    <meta name='twitter:title' content={`${config.meta_defaults.title} | ${props.title}`} />
    <meta name='twitter:description' content={props.description} />
    <meta property='og:title' content={`${config.meta_defaults.title} | ${props.title}`} />
    <meta property='og:description' content={props.description} />
    <meta property='og:site_name' content={`${config.meta_defaults.title} | ${props.title}`} />
  </Helmet>