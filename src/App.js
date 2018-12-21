import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { setPageCount } from './state/actions'
import Routes from './Routes'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.history.listen(() => {
      window.scrollTo(0, 0)
      this.props.set_page_count(this.props.page_count + 1)
    })
  }
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Routes/>
      </ConnectedRouter>
    )
  }
}

export default connect(
  state => ({
    page_count: state.page_count
  }),
  dispatch => ({
    set_page_count: (bool) => dispatch(setPageCount(bool))
  })
)(App)
